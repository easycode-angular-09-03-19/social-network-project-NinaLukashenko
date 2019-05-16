import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImgLoaderDirective } from "./directives/img-loader.directive";
import { DivLoaderDirective } from "./directives/div-loader.directive";

@NgModule({
  declarations: [ImgLoaderDirective, DivLoaderDirective],
  imports: [CommonModule],
  exports: [ImgLoaderDirective, DivLoaderDirective]
})
export class DirectivesModuleModule {}
