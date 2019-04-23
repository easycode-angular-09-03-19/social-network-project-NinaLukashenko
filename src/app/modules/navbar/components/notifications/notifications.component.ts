import { Component, OnInit, Input } from "@angular/core";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"]
})
export class NotificationsComponent implements OnInit {
  notifications;
  notReadNotes;
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(
      data => {
        this.notifications = data;
        this.notReadNotes = this.notifications.some(item => {
          return item.readed === false;
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  onClickClose(note) {
    note.readed = true;
    this.notReadNotes = this.notifications.some(item => {
      return item.readed === false;
    });
    //запрос на сервер по изминению ноута
    //endpoint для запроса - ?
  }
}
