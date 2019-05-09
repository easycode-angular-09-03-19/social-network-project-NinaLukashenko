import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-profile-controls",
  templateUrl: "./profile-controls.component.html",
  styleUrls: ["./profile-controls.component.css"]
})
export class ProfileControlsComponent implements OnInit {
  @Input() user;
  activeTab: Observable<string>;
  tabList = [
    {
      tab: "selfies",
      text: "SELFIES"
    },
    {
      tab: "favourites",
      text: "FAVOURITES"
    }
  ];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activeTab = this.route.queryParams.pipe(map(params => params.tab));

    this.route.queryParams.subscribe(params => {
      const isValidTab = this.tabList.some(item => item.tab === params.tab);
      if (!params.tab || !isValidTab) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { tab: "selfies" }
        });
      }
    });
  }
}
