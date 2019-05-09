import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { HomeService } from "./services/home.service";
import { HomeInnerComponent } from "./components/home-inner/home-inner.component";
import { ChallengeCardComponent } from "../../common/components/challenge-card/challenge-card.component";
import { ChallengeListComponent } from "../../common/components/challenge-list/challenge-list.component";
import { EmptyListComponent } from "../../common/components/empty-list/empty-list.component";
import { MatCardModule } from "@angular/material/card";
import { LoaderModule } from "../loader/loader.module";

@NgModule({
  declarations: [
    HomePageComponent,
    HomeInnerComponent,
    ChallengeCardComponent,
    ChallengeListComponent,
    EmptyListComponent
  ],
  imports: [CommonModule, HomeRoutingModule, MatCardModule, LoaderModule],
  providers: [HomeService]
})
export class HomeModule {}
