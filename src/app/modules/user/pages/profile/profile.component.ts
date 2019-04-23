import { Component, OnInit } from "@angular/core";
import { GlobalAuthService } from "app/common/services/global-auth.service";
import { UserService } from "app/common/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { UserServerAnswer } from "../../../../common/interfaces/user-server-answer";
import { UploadCoverServerAnswer } from "../../../../common/interfaces/upload-cover-server-answer";
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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
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
    this.userService
      .uploadCover(cover)
      .subscribe((res: UploadCoverServerAnswer) => {
        if (!res.error) {
          this.getUser();
        }
      });
  }
}
