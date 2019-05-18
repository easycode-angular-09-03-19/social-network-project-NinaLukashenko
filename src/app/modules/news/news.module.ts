import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsFeedComponent } from "./pages/news-feed/news-feed.component";
import { NewsRoutingModule } from "./news-routing.module";
import { NewsService } from "./services/news.service";

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [CommonModule, NewsRoutingModule],
  providers: [NewsService]
})
export class NewsModule {}
