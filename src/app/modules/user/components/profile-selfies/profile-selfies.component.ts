import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../../../../common/services/user.service";
import { MessageService } from "primeng/api";
import { UserPicturesServerAnswer } from "../../../../common/interfaces/user-pictures-server-answer";
import { UploadPhotosServerAnswer } from "../../../../common/interfaces/upload-photos-server-answer";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";

@Component({
  selector: "app-profile-selfies",
  templateUrl: "./profile-selfies.component.html",
  styleUrls: ["./profile-selfies.component.css"]
})
export class ProfileSelfiesComponent implements OnInit {
  @Input() userId;
  @Input() isCurrentUser;
  private authUserId;
  private images;
  private authUserfavourites;
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private globalAuth: GlobalAuthService
  ) {}

  ngOnInit() {
    this.authUserId = this.globalAuth.userId;
    this.getPictures();
  }

  getPictures() {
    this.userService.getUserPictures(this.userId).subscribe(
      (data: UserPicturesServerAnswer) => {
        if (data.images) {
          this.images = data.images;
          this.userService.getFavourites(this.authUserId).subscribe(
            data => {
              this.authUserfavourites = data.images;
              this.checkAuthUserFavourites();
            },
            err => {
              console.log(err);
              this.messageService.add({
                severity: "error",
                summary: "Error",
                detail: "Something went wrong."
              });
            }
          );
        }
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong. Photos are not available."
        });
      }
    );
  }

  checkAuthUserFavourites() {
    for (let i = 0; i < this.images.length; i++) {
      for (let y = 0; y < this.authUserfavourites.length; y++) {
        if (this.images[i]._id === this.authUserfavourites[y]._id) {
          this.images[i].isLiked = true;
        }
      }
    }
  }

  loadPhotos(input) {
    const files = Array.from(input.files);
    console.log(files);
    this.userService.uploadPhotos(files).subscribe(
      (data: UploadPhotosServerAnswer) => {
        this.getPictures();
        this.messageService.add({
          severity: "success",
          summary: "Success",
          detail: "Photos are added."
        });
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong. Photos are not added."
        });
      }
    );
  }
}
