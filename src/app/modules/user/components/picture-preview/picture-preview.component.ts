import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-picture-preview",
  templateUrl: "./picture-preview.component.html",
  styleUrls: ["./picture-preview.component.css"]
})
export class PicturePreviewComponent implements OnInit {
  @Input() image;
  constructor() {}

  ngOnInit() {}
}
