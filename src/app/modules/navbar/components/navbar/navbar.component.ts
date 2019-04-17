import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isHidden = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe(event => {
        this.activatedRoute.firstChild.data.subscribe(value => {
          this.isHidden = !!value.withoutHeader;
        });
      });
  }
}
