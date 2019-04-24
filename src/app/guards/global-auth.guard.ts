import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { GlobalAuthService } from "../services/global-auth.service";

@Injectable({
  providedIn: "root"
})
export class GlobalAuthGuard implements CanActivate {
  constructor(private auth: GlobalAuthService, private router: Router) {}

  canActivate(next, state): boolean {
    if (!this.auth.isLogin) {
      this.router.navigate(["/auth/login"]);
      return false;
    }
    return true;
  }
}
