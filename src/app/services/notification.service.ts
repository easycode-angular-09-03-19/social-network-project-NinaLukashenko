import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class NotificationService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getNotifications() {
    const token = localStorage.getItem("sn_app_token");

    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": token
      })
    };

    return this.http.get(
      `${this.apiUrl}/public/users/notification`,
      httpOptions
    );
  }
}
