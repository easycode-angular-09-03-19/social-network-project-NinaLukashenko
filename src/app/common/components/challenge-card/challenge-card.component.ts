import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-challenge-card",
  templateUrl: "./challenge-card.component.html",
  styleUrls: ["./challenge-card.component.css"]
})
export class ChallengeCardComponent implements OnInit {
  @Input() challenge;
  constructor() {}

  ngOnInit() {}
}
