import { TimeboxListService } from './../timebox-list.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'timebox-list',
  template: `
    <div>
      <timebox-card *ngFor="let timeboxer of (timeboxList | async)" [timeboxer]="timeboxer" ></timebox-card>
      <button mat-fab (click)="add()">+</button>
    </div>
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeboxListComponent implements OnInit {

  public timeboxList: Observable<any>;
  constructor(private _timeboxlistSvc: TimeboxListService) { }

  ngOnInit() {
    this.timeboxList = this._timeboxlistSvc.timeboxList$
  }

  add() {

  }
}
