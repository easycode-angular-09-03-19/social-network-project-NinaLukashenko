import { Component, OnInit } from "@angular/core";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  resetPasswordModal = false;
  constructor(
    private authGlobalService: GlobalAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authGlobalService.isLogin) {
      this.router.navigate(["/"]);
    }
  }
}
