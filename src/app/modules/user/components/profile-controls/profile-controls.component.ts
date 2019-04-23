import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profile-controls",
  templateUrl: "./profile-controls.component.html",
  styleUrls: ["./profile-controls.component.css"]
})
export class ProfileControlsComponent implements OnInit {
  @Input() user;
  constructor() {}

  ngOnInit() {}
}
