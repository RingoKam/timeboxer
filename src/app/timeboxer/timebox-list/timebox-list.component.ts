import { TimeboxListService } from "./../timebox-list.service";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "timebox-list",
  template: `
    <div>
      <ng-container *ngIf="(timeboxList | async) as list">
        <timebox-card 
          *ngFor="let timeboxer of list" 
          [timeboxer]="timeboxer.timebox"
          [id]="timeboxer.id"
          (play)="play(timeboxer.id)"
          (edit)="add(timeboxer.id)"
        ></timebox-card>
        <div class="empty-list" *ngIf="!list || list.length === 0">
          - List is Empty -
        </div>
      </ng-container>
      <button mat-button (click)="add()">+ Add</button>
    </div>
  `,
  styles: [
  `
    .empty-list {
      display: flex;
      justify-content: center;
    }
  `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeboxListComponent implements OnInit {
  public timeboxList: Observable<any>;
  constructor(
    private _timeboxlistSvc: TimeboxListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.timeboxList = this._timeboxlistSvc.timeboxList$.pipe(
      map(list => {
        return Object.keys(list).map((id) => {
          return { id, timebox: list[id]};
        });
      })
    );
  }

  add(id) {
    this.router.navigate(["new", {id}]);
  }

  play(id) {
    this.router.navigate(["player", {id}])
  }
}
