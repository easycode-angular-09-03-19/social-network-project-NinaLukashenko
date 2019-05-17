import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  OnChanges,
  SimpleChanges,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appDivLoader]"
})
export class DivLoaderDirective implements OnInit, OnChanges {
  @Input("appDivLoader") bgUrl: string;
  @HostBinding("style.opacity") opacity: number;
  @HostBinding("style.transition") transition: string;
  @HostBinding("style.background") url: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.transition = "opacity .5s ease-in";
  }
  ngOnChanges(changes: SimpleChanges) {
    this.opacity = 0;
    this.loadImg();
  }

  loadImg() {
    const img = new Image();
    img.onload = () => this.onLoadImgHandler();
    img.src = this.bgUrl;
  }

  onLoadImgHandler() {
    this.url = `url(${this.bgUrl})`;
    this.opacity = 1;
  }
}
