import { Component, OnInit } from "@angular/core";
import { WinnersService } from "../../services/winners.service";
import { MessageService } from "primeng/api";
import { WinnersServerAnswer } from "../../interfaces/winners-server-answer";

@Component({
  selector: "app-winners",
  templateUrl: "./winners.component.html",
  styleUrls: ["./winners.component.css"]
})
export class WinnersComponent implements OnInit {
  constructor(
    private winnersService: WinnersService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.winnersService.getWinners().subscribe(
      (data: WinnersServerAnswer) => {
        console.log(data);
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
}
