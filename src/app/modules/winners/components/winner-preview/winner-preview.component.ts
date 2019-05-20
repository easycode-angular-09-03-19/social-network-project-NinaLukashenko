import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../../../../common/services/user.service";
import { ServerMsgAnswer } from "../../../../common/interfaces/server-msg-answer";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-winner-preview",
  templateUrl: "./winner-preview.component.html",
  styleUrls: ["./winner-preview.component.css"]
})
export class WinnerPreviewComponent implements OnInit {
  @Input() winner;
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  onLikeClick(winner) {
    this.userService
      .likePicture(winner.member_id.images[0].image_basic._id)
      .subscribe(
        (res: ServerMsgAnswer) => {
          if (!res.error) {
            winner.isLiked = !winner.isLiked;
          }
        },
        err => {
          console.log(err);
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "Something went wrong. Like was not added."
          });
        }
      );
  }
}
