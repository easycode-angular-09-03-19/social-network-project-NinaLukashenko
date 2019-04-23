import { Component, OnInit } from "@angular/core";
import { CurrentUserStoreService } from "./common/services/current-user-store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Mostliked Person";
  constructor(private currentUser: CurrentUserStoreService) {}

  ngOnInit(): void {
    this.currentUser.initCurrentUser();
  }
}
