import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { CurrentUserStoreService } from "app/common/services/current-user-store.service";
import { ProfileComponent } from "../../../user/pages/profile/profile.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  userAvatar;
  userId;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private currentUser: CurrentUserStoreService,
    private profileComponent: ProfileComponent
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe(event => {
        this.activatedRoute.firstChild.data.subscribe(value => {
          this.isHidden = !!value.withoutHeader;
        });
      });
    this.currentUser.userWatcher.subscribe(({ avatar, _id }) => {
      if (_id) {
        this.userAvatar = avatar;
        this.userId = _id;
      }
    });
  }

  onClickMyProfile() {
    this.profileComponent.id = this.userId;
    this.profileComponent.getUser();
  }
}
