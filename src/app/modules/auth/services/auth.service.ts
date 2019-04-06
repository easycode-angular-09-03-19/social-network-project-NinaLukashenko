import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { LoginServerAnswer } from "../interfaces/login-server-answer";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  login(cred): Observable<LoginServerAnswer> {
    return this.http
      .post<LoginServerAnswer>(`${this.apiUrl}/public/auth/login`, cred)
      .pipe(
        map(
          (res: LoginServerAnswer): LoginServerAnswer => {
            if (!res.error) {
              localStorage.setItem("sn_app_token", res.token);
              console.log(res);
            }
            return res;
          }
        )
      );
  }
}
