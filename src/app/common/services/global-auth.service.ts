import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalAuthService {
  constructor() {}

  get isLogin() {
    return localStorage.getItem("sn_app_token") ? true : false;
  }

  public get token() {
    return localStorage.getItem("sn_app_token") || "";
  }
}
