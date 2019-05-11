import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { NotificationService } from "./services/notification.service";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { ProfileComponent } from "../user/pages/profile/profile.component";
@NgModule({
  declarations: [NavbarComponent, NotificationsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule
  ],
  providers: [NotificationService, ProfileComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {}
