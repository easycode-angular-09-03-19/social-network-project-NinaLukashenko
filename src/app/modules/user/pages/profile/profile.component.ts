import { Component, OnInit } from "@angular/core";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";
import { UserService } from "../../../../common/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { UserServerAnswer } from "../../../../common/interfaces/user-server-answer";
import { ServerMsgAnswer } from "../../../../common/interfaces/server-msg-answer";
import { CurrentUserStoreService } from "app/common/services/current-user-store.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user;
  authUserId;
  id;
  activeTab = "selfies";

  constructor(
    private globalAuth: GlobalAuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private currentUser: CurrentUserStoreService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
    this.currentUser.userWatcher.subscribe(user => {
      if (user._id) {
        this.id = user._id;
      }
    });
    this.getUser();
  }

  getUser() {
    this.userService
      .getUserById(this.id)
      .subscribe((user: UserServerAnswer) => {
        if (user._id) {
          this.user = user;
        }
      });
  }

  uploadCover(cover) {
    this.userService.uploadCover(cover).subscribe((res: ServerMsgAnswer) => {
      if (!res.error) {
        this.getUser();
      }
    });
  }
}
