import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routerTransition } from '../router.animation';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'timeboxer',
  template: `
    <main [@routerTransition]="url">
      <router-outlet (activate)="routeChange($event)"></router-outlet>
    </main>
  `,
  styles: [`
    main {
      height: 100%
    }
  `],
  animations: [ routerTransition ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeboxerComponent implements OnInit {

  public url: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

  routeChange(e) {
    if(e && e.router) {
      this.url = e.router.url.slice(1) == "list" ? "left" : "right";
      console.log(this.url);
    }
  }
}
