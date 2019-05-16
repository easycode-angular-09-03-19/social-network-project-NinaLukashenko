import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { ProfileCoverComponent } from "./components/profile-cover/profile-cover.component";
import { ProfileControlsComponent } from "./components/profile-controls/profile-controls.component";
import { ProfileSelfiesComponent } from "./components/profile-selfies/profile-selfies.component";
import { PicturePreviewComponent } from "./components/picture-preview/picture-preview.component";
import { ProfileTabsContainerComponent } from "./components/profile-tabs-container/profile-tabs-container.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ProfileFavouritesComponent } from "./components/profile-favourites/profile-favourites.component";
import { ProfileFollowersComponent } from "./components/profile-followers/profile-followers.component";
import { ProfileFollowingsComponent } from "./components/profile-followings/profile-followings.component";
import { FavouritePreviewComponent } from "./components/favourite-preview/favourite-preview.component";
import { FollowingCardComponent } from "./components/following-card/following-card.component";
import { FollowerCardComponent } from "./components/follower-card/follower-card.component";
import { DirectivesModuleModule } from "../../common/modules/directives-module/directives-module.module";

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
    ProfileCoverComponent,
    ProfileControlsComponent,
    ProfileSelfiesComponent,
    PicturePreviewComponent,
    ProfileTabsContainerComponent,
    ProfileFavouritesComponent,
    ProfileFollowersComponent,
    ProfileFollowingsComponent,
    FavouritePreviewComponent,
    FollowingCardComponent,
    FollowerCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatCardModule,
    DirectivesModuleModule
  ]
})
export class UserModule {}
