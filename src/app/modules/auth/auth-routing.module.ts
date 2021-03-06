import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { AuthService } from "./services/auth.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", redirectTo: "/auth/login" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
