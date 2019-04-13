import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { ResetPasswordModalComponent } from "./components/reset-password-modal/reset-password-modal.component";
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginFormComponent,
    ResetPasswordModalComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AuthModule {}
