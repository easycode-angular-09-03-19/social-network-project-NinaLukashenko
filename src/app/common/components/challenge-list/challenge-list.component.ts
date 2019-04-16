import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-challenge-list",
  templateUrl: "./challenge-list.component.html",
  styleUrls: ["./challenge-list.component.css"]
})
export class ChallengeListComponent implements OnInit {
  @Input() challenges;
  constructor() {}

  ngOnInit() {
    // console.log(this.challenges);
  }
}
