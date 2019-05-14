import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProfileComponent } from "../../pages/profile/profile.component";
import { CurrentUserStoreService } from "app/common/services/current-user-store.service";

@Component({
  selector: "app-follower-card",
  templateUrl: "./follower-card.component.html",
  styleUrls: ["./follower-card.component.css"]
})
export class FollowerCardComponent implements OnInit {
  @Input() follower;
  @Output() clickFollow = new EventEmitter();

  constructor(
    private currentUser: CurrentUserStoreService,
    private profileComponent: ProfileComponent
  ) {}

  ngOnInit() {}

  onClickFollow(follower) {
    this.clickFollow.emit(follower);
  }
}
