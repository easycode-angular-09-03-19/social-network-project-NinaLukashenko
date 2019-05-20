import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsFeedComponent } from "./pages/news-feed/news-feed.component";
import { NewsRoutingModule } from "./news-routing.module";
import { NewsService } from "./services/news.service";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { DirectivesModuleModule } from "../../common/modules/directives-module/directives-module.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ScrollDispatchModule,
    DirectivesModuleModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [NewsService]
})
export class NewsModule {}
