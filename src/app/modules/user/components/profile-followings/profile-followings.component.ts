import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "app/common/services/user.service";
import { MessageService } from "primeng/api";
import { ServerMsgAnswer } from "../../../../common/interfaces/server-msg-answer";
import { Following } from "../../../../common/interfaces/following";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";

@Component({
  selector: "app-profile-followings",
  templateUrl: "./profile-followings.component.html",
  styleUrls: ["./profile-followings.component.css"]
})
export class ProfileFollowingsComponent implements OnInit {
  @Input() userId;
  public followings;
  private authUserId;
  private authUserfollowings;
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private globalAuth: GlobalAuthService
  ) {}

  ngOnInit() {
    this.authUserId = this.globalAuth.userId;
    this.userService.getFollowings(this.userId).subscribe(
      data => {
        this.followings = data.users;
        this.userService.getFollowings(this.authUserId).subscribe(
          data => {
            this.authUserfollowings = data.users;
            this.checkFollowings();
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
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong. Followings are not available."
        });
      }
    );
  }

  checkFollowings() {
    for (let i = 0; i < this.followings.length; i++) {
      for (let y = 0; y < this.authUserfollowings.length; y++) {
        if (this.followings[i]._id === this.authUserfollowings[y]._id) {
          this.followings[i].following = true;
        }
      }
    }
  }

  clickFollowingHandler(following: Following) {
    this.userService.subscription(following._id).subscribe(
      (data: ServerMsgAnswer) => {
        following.following = !following.following;
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
}
