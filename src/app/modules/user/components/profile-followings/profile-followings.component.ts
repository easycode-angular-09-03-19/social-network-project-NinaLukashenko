import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "app/common/services/user.service";
import { MessageService } from "primeng/api";
import { ServerMsgAnswer } from "../../../../common/interfaces/server-msg-answer";
import { Following } from "../../../../common/interfaces/following";
@Component({
  selector: "app-profile-followings",
  templateUrl: "./profile-followings.component.html",
  styleUrls: ["./profile-followings.component.css"]
})
export class ProfileFollowingsComponent implements OnInit {
  @Input() userId;
  private followings;
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.userService.getFollowings(this.userId).subscribe(
      data => {
        this.followings = data.users;
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
