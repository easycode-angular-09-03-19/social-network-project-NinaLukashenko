import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "app/common/services/user.service";
import { MessageService } from "primeng/api";
import { FollowersFollowingsServerAnswer } from "../../../../common/interfaces/followers-followings-server-answer";
import { Following } from "../../../../common/interfaces/following";
import { ServerMsgAnswer } from "../../../../common/interfaces/server-msg-answer";

@Component({
  selector: "app-profile-followers",
  templateUrl: "./profile-followers.component.html",
  styleUrls: ["./profile-followers.component.css"]
})
export class ProfileFollowersComponent implements OnInit {
  @Input() userId;
  private followers;
  private followings;
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.userService.getFollowers(this.userId).subscribe(
      (data: FollowersFollowingsServerAnswer) => {
        this.followers = data.users;
        this.userService.getFollowings(this.userId).subscribe(
          data => {
            this.followings = data.users;
            this.checkFollowers();
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
          detail: "Something went wrong. Followers are not available."
        });
      }
    );
  }

  checkFollowers() {
    for (let i = 0; i < this.followers.length; i++) {
      for (let y = 0; y < this.followings.length; y++) {
        if (this.followers[i]._id === this.followings[y]._id) {
          this.followers[i].following = true;
        }
      }
    }
  }

  clickFollowHandler(follower: Following) {
    this.userService.subscription(follower._id).subscribe(
      (data: ServerMsgAnswer) => {
        follower.following = !follower.following;
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
