import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UserService } from "../../../../common/services/user.service";
import { ServerMsgAnswer } from "../../../../common/interfaces/server-msg-answer";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-picture-preview",
  templateUrl: "./picture-preview.component.html",
  styleUrls: ["./picture-preview.component.css"]
})
export class PicturePreviewComponent implements OnInit {
  @Input() image;
  @Input() isCurrentUser;
  @Output() deletePicture = new EventEmitter();
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  onLikeClick(image) {
    this.userService.likePicture(image._id).subscribe(
      (res: ServerMsgAnswer) => {
        if (!res.error) {
          image.isLiked = !image.isLiked;
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

  onBasketClick(image) {
    const imageId = image._id;
    const imageUrl = image.url.substring(image.url.indexOf("users-photos/"));
    this.userService.deletePicture(imageId, imageUrl).subscribe(
      (res: ServerMsgAnswer) => {
        if (!res.error) {
          this.deletePicture.emit();
        }
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong. Deletion was failed."
        });
      }
    );
  }
}
