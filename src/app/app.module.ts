import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { NavbarComponent } from "./common/components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { NotificationService } from "./services/notification.service";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [MessageService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
