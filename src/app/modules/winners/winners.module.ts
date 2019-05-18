import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WinnersComponent } from "./pages/winners/winners.component";
import { WinnersRoutingModule } from "./winners-routing.module";
import { WinnersService } from "./services/winners.service";

@NgModule({
  declarations: [WinnersComponent],
  imports: [CommonModule, WinnersRoutingModule],
  providers: [WinnersService]
})
export class WinnersModule {}
