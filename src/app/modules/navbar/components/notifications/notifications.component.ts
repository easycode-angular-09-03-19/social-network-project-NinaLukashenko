import { Component, OnInit, Input } from "@angular/core";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"]
})
export class NotificationsComponent implements OnInit {
  notifications;
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
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

  onClickClose(note) {
    this.notificationService.deleteNote(note._id).subscribe(
      data => {
        this.getNotes();
      },
      err => {
        console.log(err);
      }
    );
  }
}
