import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-winner-preview",
  templateUrl: "./winner-preview.component.html",
  styleUrls: ["./winner-preview.component.css"]
})
export class WinnerPreviewComponent implements OnInit {
  @Input() winner;
  constructor() {}

  ngOnInit() {
    console.log(this.winner.member_id.images.image_basic);
  }
}
