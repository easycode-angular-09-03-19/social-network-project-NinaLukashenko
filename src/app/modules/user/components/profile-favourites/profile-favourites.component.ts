import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "app/common/services/user.service";
import { MessageService } from "primeng/api";
import { FavouritesServerAnswer } from "../../../../common/interfaces/favourites-server-answer";

@Component({
  selector: "app-profile-favourites",
  templateUrl: "./profile-favourites.component.html",
  styleUrls: ["./profile-favourites.component.css"]
})
export class ProfileFavouritesComponent implements OnInit {
  private favourites;
  @Input() userId;
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.userService.getFavourites(this.userId).subscribe(
      (data: FavouritesServerAnswer) => {
        this.favourites = data.images;
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong. Favourites are not available."
        });
      }
    );
  }
}
