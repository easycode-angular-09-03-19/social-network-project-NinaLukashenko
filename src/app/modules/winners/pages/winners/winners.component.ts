import { Component, OnInit } from "@angular/core";
import { WinnersService } from "../../services/winners.service";
import { MessageService } from "primeng/api";
import { WinnersServerAnswer } from "../../interfaces/winners-server-answer";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";
import { UserService } from "../../../../common/services/user.service";

@Component({
  selector: "app-winners",
  templateUrl: "./winners.component.html",
  styleUrls: ["./winners.component.css"]
})
export class WinnersComponent implements OnInit {
  private winners = [];
  private authUserId;
  private authUserfavourites;
  constructor(
    private winnersService: WinnersService,
    private messageService: MessageService,
    private globalAuth: GlobalAuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.winnersService.getWinners().subscribe(
      (data: WinnersServerAnswer) => {
        for (let i = 0; i < data.winners.length; i++) {
          if (data.winners[i].member_id.images[0]) {
            this.winners.push(data.winners[i]);
          }
        }
        this.authUserId = this.globalAuth.userId;
        this.userService.getFavourites(this.authUserId).subscribe(data => {
          this.authUserfavourites = data.images;
          this.checkAuthUserFavourites();
        });
      },
      err => {
        console.log(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong. Winners are not available"
        });
      }
    );
  }

  checkAuthUserFavourites() {
    for (let i = 0; i < this.winners.length; i++) {
      for (let y = 0; y < this.authUserfavourites.length; y++) {
        if (
          this.winners[i].member_id.images[0].image_basic._id ===
          this.authUserfavourites[y]._id
        ) {
          this.winners[i].isLiked = true;
          console.log("is liked");
        }
      }
    }
  }
}
