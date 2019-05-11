import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-following-card",
  templateUrl: "./following-card.component.html",
  styleUrls: ["./following-card.component.css"]
})
export class FollowingCardComponent implements OnInit {
  @Input() following;
  @Output() clickFollowing = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.following.following = true;
  }

  onClickFollowing(following) {
    this.clickFollowing.emit(following);
  }
}