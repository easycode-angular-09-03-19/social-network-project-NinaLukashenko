import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "app/common/services/user.service";
import { MessageService } from "primeng/api";
import { UserPicturesServerAnswer } from "../../../../common/interfaces/user-pictures-server-answer";

@Component({
  selector: "app-profile-selfies",
  templateUrl: "./profile-selfies.component.html",
  styleUrls: ["./profile-selfies.component.css"]
})
export class ProfileSelfiesComponent implements OnInit {
  @Input() userId;
  @Input() isCurrentUser;
  private images;
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.userService.getUserPictures(this.userId).subscribe(
      (data: UserPicturesServerAnswer) => {
        this.images = data.images;
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
}
