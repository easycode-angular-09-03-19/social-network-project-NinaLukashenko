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
  selector: "[appImgLoader]"
})
export class ImgLoaderDirective implements OnInit, OnChanges {
  @Input("appImgLoader") imgSrc: string;
  @HostBinding("style.opacity") opacity: number;
  @HostBinding("style.transition") transition: string;
  @HostBinding("src") src: string;

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
    img.src = this.imgSrc;
  }

  onLoadImgHandler() {
    this.src = this.imgSrc;
    this.opacity = 1;
  }
}
