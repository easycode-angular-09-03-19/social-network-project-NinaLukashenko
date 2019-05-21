import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-follower-card",
  templateUrl: "./follower-card.component.html",
  styleUrls: ["./follower-card.component.css"]
})
export class FollowerCardComponent implements OnInit {
  @Input() follower;
  @Input() authUserId;
  @Output() clickFollow = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickFollow(follower) {
    this.clickFollow.emit(follower);
  }
}
