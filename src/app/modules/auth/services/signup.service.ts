import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { SignupServerAnswer } from "../interfaces/signup-server-answer";
import { Observable } from "rxjs";

@Injectable()
export class SignupService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  signup(cred): Observable<SignupServerAnswer> {
    return this.http.post<SignupServerAnswer>(
      `${this.apiUrl}/public/auth/signup`,
      cred
    );
  }
}
