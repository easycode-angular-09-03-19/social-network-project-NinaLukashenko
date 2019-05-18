import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WinnersComponent } from "./pages/winners/winners.component";
import { WinnersRoutingModule } from "./winners-routing.module";
import { WinnersService } from "./services/winners.service";
import { WinnerPreviewComponent } from './components/winner-preview/winner-preview.component';

@NgModule({
  declarations: [WinnersComponent, WinnerPreviewComponent],
  imports: [CommonModule, WinnersRoutingModule],
  providers: [WinnersService]
})
export class WinnersModule {}
