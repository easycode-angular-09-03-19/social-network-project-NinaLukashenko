import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GlobalAuthGuard } from "./guards/global-auth.guard";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: "./modules/auth/auth.module#AuthModule",
    data: { withoutHeader: true }
  },
  {
    path: "",
    loadChildren: "./modules/home/home.module#HomeModule",
    canActivate: [GlobalAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
