import { Component, OnInit, Input } from "@angular/core";
import { text } from "@angular/core/src/render3";

@Component({
  selector: "app-empty-list",
  templateUrl: "./empty-list.component.html",
  styleUrls: ["./empty-list.component.css"]
})
export class EmptyListComponent implements OnInit {
  @Input() text;
  constructor() {}

  ngOnInit() {}
}
