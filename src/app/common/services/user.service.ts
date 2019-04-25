import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { UserServerAnswer } from "../interfaces/user-server-answer";
import { GlobalAuthService } from "./global-auth.service";
import { CurrentUserStoreService } from "./current-user-store.service";
import { map } from "rxjs/operators";
import { UserPicturesServerAnswer } from "../interfaces/user-pictures-server-answer";
import { ServerMsgAnswer } from "../interfaces/server-msg-answer";

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

  uploadCover(file: File): Observable<ServerMsgAnswer> {
    const formData = new FormData();
    formData.append("coverImg", file);
    const id = this.globalAuth.userId;
    return this.http.post<ServerMsgAnswer>(
      `${this.apiUrl}/public/users/upload-cover/${id}`,
      formData
    );
  }

  getUserPictures(id: string): Observable<UserPicturesServerAnswer> {
    return this.http.get<UserPicturesServerAnswer>(
      `${this.apiUrl}/public/users/my-images/${id}`
    );
  }

  likePicture(pictureId: string): Observable<ServerMsgAnswer> {
    return this.http.put<ServerMsgAnswer>(
      `${this.apiUrl}/public/users/like-photo/${pictureId}`,
      {}
    );
  }

  deletePicture(
    imageId: string,
    imageUrl: string
  ): Observable<ServerMsgAnswer> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-access-token": this.globalAuth.token
      }),
      body: {
        image_id: imageId,
        image_url: imageUrl
      }
    };
    const id = this.globalAuth.userId;
    return this.http.delete<ServerMsgAnswer>(
      `${this.apiUrl}/public/users/remove-photo/${id}`,
      httpOptions
    );
  }
}
