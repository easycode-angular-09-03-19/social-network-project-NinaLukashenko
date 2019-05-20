import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WinnersComponent } from "./pages/winners/winners.component";
import { WinnersRoutingModule } from "./winners-routing.module";
import { WinnersService } from "./services/winners.service";
import { WinnerPreviewComponent } from "./components/winner-preview/winner-preview.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [WinnersComponent, WinnerPreviewComponent],
  imports: [CommonModule, WinnersRoutingModule, MatCardModule, MatButtonModule],
  providers: [WinnersService]
})
export class WinnersModule {}
