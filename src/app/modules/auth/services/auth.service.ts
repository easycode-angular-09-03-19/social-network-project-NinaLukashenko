import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { LoginServerAnswer } from "../interfaces/login-server-answer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ResetPasswordServerAnswer } from "../interfaces/reset-password-server-answer";
import { SignupServerAnswer } from "../interfaces/signup-server-answer";

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

  signup(cred): Observable<SignupServerAnswer> {
    return this.http.post<SignupServerAnswer>(
      `${this.apiUrl}/public/auth/signup`,
      cred
    );
  }

  resetPassword(cred): Observable<ResetPasswordServerAnswer> {
    return this.http.post<ResetPasswordServerAnswer>(
      `${this.apiUrl}/public/auth/reset-password`,
      cred
    );
  }
}
