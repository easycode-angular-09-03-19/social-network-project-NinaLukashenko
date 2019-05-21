import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsService } from "../../services/news.service";
import { MessageService } from "primeng/api";
import { NewsServerAnswer } from "../../interfaces/news-server-answer";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { UserService } from "../../../../common/services/user.service";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";
import { ServerMsgAnswer } from "../../../../common/interfaces/server-msg-answer";

@Component({
  selector: "app-news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.css"]
})
export class NewsFeedComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  private news = [];
  public page = 1;
  public count = 15;
  private authUserId;
  private authUserfavourites;
  private authUserfollowings;

  constructor(
    private newsService: NewsService,
    private messageService: MessageService,
    private userService: UserService,
    private globalAuth: GlobalAuthService
  ) {}

  ngOnInit() {
    this.getNews(this.page, this.count);
  }

  getNews(page, count) {
    this.newsService.getNews(page, count).subscribe(
      (data: NewsServerAnswer) => {
        this.news = this.news.concat(data.news);
        this.authUserId = this.globalAuth.userId;
        this.userService.getFavourites(this.authUserId).subscribe(data => {
          this.authUserfavourites = data.images;
          this.checkAuthUserFavourites();
          this.userService.getFollowings(this.authUserId).subscribe(data => {
            this.authUserfollowings = data.users;
            this.checkFollowings();
          });
        });
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

  checkAuthUserFavourites() {
    for (let i = 0; i < this.news.length; i++) {
      for (let y = 0; y < this.authUserfavourites.length; y++) {
        if (this.news[i].pictures[0]._id === this.authUserfavourites[y]._id) {
          this.news[i].isLiked = true;
        }
      }
    }
  }

  checkFollowings() {
    for (let i = 0; i < this.news.length; i++) {
      for (let y = 0; y < this.authUserfollowings.length; y++) {
        if (this.news[i].owner._id === this.authUserfollowings[y]._id) {
          this.news[i].owner.following = true;
        }
      }
    }
  }

  onScrollChange(event) {
    if (
      this.viewport.getRenderedRange().end ===
      this.viewport.getDataLength() - 2
    ) {
      this.page++;
      this.getNews(this.page, this.count);
    }
  }

  scrollTo() {
    this.viewport.scrollToIndex(0);
  }

  onLikeClick(item) {
    this.userService.likePicture(item.pictures[0]._id).subscribe(
      (res: ServerMsgAnswer) => {
        if (!res.error) {
          item.isLiked = !item.isLiked;
          if (res.message === "Image was liked.") {
            item.pictures[0].likes.length++;
          } else {
            item.pictures[0].likes.length--;
          }
        }
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong. Like was not added."
        });
      }
    );
  }

  onClickFollowing(owner) {
    this.userService.subscription(owner._id).subscribe(
      (data: ServerMsgAnswer) => {
        owner.following = !owner.following;
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong."
        });
      }
    );
  }
}
