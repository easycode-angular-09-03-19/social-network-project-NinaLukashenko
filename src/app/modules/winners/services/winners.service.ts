import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { WinnersServerAnswer } from "../interfaces/winners-server-answer";
import { Observable } from "rxjs";

@Injectable()
export class WinnersService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getWinners(): Observable<WinnersServerAnswer> {
    let params = new HttpParams();
    params = params.append("part", "1").append("limit", "15");
    const httpOptions = { params };

    return this.http.get<WinnersServerAnswer>(
      `${this.apiUrl}/public/winners`,
      httpOptions
    );
  }
}
