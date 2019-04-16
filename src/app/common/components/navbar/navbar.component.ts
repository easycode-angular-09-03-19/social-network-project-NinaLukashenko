import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { NotificationService } from "../../../services/notification.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  notifications;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe(event => {
        this.activatedRoute.firstChild.data.subscribe(value => {
          this.isHidden = !!value.withoutHeader;
        });
      });
    this.notificationService.getNotifications().subscribe(
      data => {
        this.notifications = data;
        console.log(this.notifications);
      },
      err => {
        console.log(err);
      }
    );
  }
}
