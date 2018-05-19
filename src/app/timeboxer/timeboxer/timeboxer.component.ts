import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animation';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'timeboxer',
  template: `
    <main [@routerTransition]="url">
      <router-outlet (activate)="routeChange($event)" ></router-outlet>
    </main>
  `,
  styles: [],
  animations: [ routerTransition ],

})
export class TimeboxerComponent implements OnInit {

  public url: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

  routeChange(e) {
    this.url = e.router.url
  }
}
