import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginServerAnswer } from "../../interfaces/login-server-answer";
import { CurrentUserStoreService } from "app/common/services/current-user-store.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private currentUser: CurrentUserStoreService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.authService
      .login({ ...this.loginForm.value })
      .subscribe((res: LoginServerAnswer) => {
        if (!res.error) {
          this.currentUser.initCurrentUser();
          this.router.navigate(["/"]);
        }
      });
  }
}
