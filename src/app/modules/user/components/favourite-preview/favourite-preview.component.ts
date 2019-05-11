import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-favourite-preview",
  templateUrl: "./favourite-preview.component.html",
  styleUrls: ["./favourite-preview.component.css"]
})
export class FavouritePreviewComponent implements OnInit {
  @Input() favourite;
  constructor() {}

  ngOnInit() {}
}
