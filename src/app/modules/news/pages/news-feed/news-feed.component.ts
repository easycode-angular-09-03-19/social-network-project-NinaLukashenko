import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../services/news.service";
import { MessageService } from "primeng/api";
import { NewsServerAnswer } from "../../interfaces/news-server-answer";

@Component({
  selector: "app-news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.css"]
})
export class NewsFeedComponent implements OnInit {
  public news;
  constructor(
    private newsService: NewsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(
      (data: NewsServerAnswer) => {
        console.log(data.news[0]);
        this.news = data.news;
        console.log(this.news);
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong. News feed is not available"
        });
      }
    );
  }
}
