import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NotificationService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getNotifications() {
    return this.http.get(`${this.apiUrl}/public/users/notification`);
  }
}
