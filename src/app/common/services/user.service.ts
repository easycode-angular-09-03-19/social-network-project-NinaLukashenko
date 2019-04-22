import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { UserServerAnswer } from "../interfaces/user-server-answer";
import { GlobalAuthService } from "./global-auth.service";
import { CurrentUserStoreService } from "./current-user-store.service";
import { map } from "rxjs/operators";
import { UploadCoverServerAnswer } from "../interfaces/upload-cover-server-answer";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService,
    private currentUser: CurrentUserStoreService
  ) {}

  getUserById(id: string): Observable<UserServerAnswer> {
    return this.http
      .get<UserServerAnswer>(`${this.apiUrl}/public/users/get-info/${id}`)
      .pipe(
        map((user: UserServerAnswer) => {
          if (user._id === this.globalAuth.userId) {
            this.currentUser.info = user;
          }
          return user;
        })
      );
  }

  uploadCover(file: File): Observable<UploadCoverServerAnswer> {
    const formData = new FormData();
    formData.append("coverImg", file);
    const id = this.globalAuth.userId;
    return this.http.post<UploadCoverServerAnswer>(
      `${this.apiUrl}/public/users/upload-cover/${id}`,
      formData
    );
  }
}
