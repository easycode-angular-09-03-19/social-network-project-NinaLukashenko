import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UserService } from "../../../../common/services/user.service";
import { LikePictureServerAnswer } from "../../../../common/interfaces/like-picture-server-answer";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-picture-preview",
  templateUrl: "./picture-preview.component.html",
  styleUrls: ["./picture-preview.component.css"]
})
export class PicturePreviewComponent implements OnInit {
  @Input() image;
  @Input() isCurrentUser;
  @Output() newLike = new EventEmitter();
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  onLikeClick(imageId) {
    this.userService.likePicture(imageId).subscribe(
      (res: LikePictureServerAnswer) => {
        this.newLike.emit();
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
