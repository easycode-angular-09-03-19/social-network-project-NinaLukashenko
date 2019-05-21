import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NewsServerAnswer } from "../interfaces/news-server-answer";
import { Observable } from "rxjs";

@Injectable()
export class NewsService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getNews(page, count): Observable<NewsServerAnswer> {
    let params = new HttpParams();
    params = params.append("page", page).append("count", count);
    const httpOptions = { params };

    return this.http.get<NewsServerAnswer>(
      `${this.apiUrl}/public/news`,
      httpOptions
    );
  }
}
