import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';

@NgModule({
  declarations: [ProfileComponent, SettingsComponent, ProfileCoverComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
