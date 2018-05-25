import { TimeboxerModel } from './../timeboxer-model';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { map, switchMap, pluck } from "rxjs/operators";
import { TimeboxListService } from "../timebox-list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-timebox-new",
  template: `
    <mat-card *ngIf="t$ | async; let t">
      {{ t$ | async | json }}
        <div class="new-timerbox-one-input">
          <mat-form-field [style.display]="'block'">
            <input matInput placeholder="Talk Title" [(ngModel)]="t.title" />
          </mat-form-field>
        </div>

        <div>
          <mat-form-field [style.display]="'block'">
            <input matInput placeholder="Speaker Name" [(ngModel)]="t.speaker" />
          </mat-form-field>
        </div>

        <div class="new-timeboxer-timer-input">
          <label>Talk Length</label>
          <div>
            <timer-input [(time)]="t.time"></timer-input>
          </div>
        </div>
      
        <div>
          <label>Warning</label>
          <div>
            <timer-input [(time)]="t.warning"></timer-input>
          </div>
        </div>
     
        <button mat-raised-button (click)="onSubmit(t)" > {{ editing ? "Edit" : "Submit"}}</button>
    </mat-card>
  `,
  styles: [
    `
    .new-timeboxer-inputs {
      display: flex;
      flex-direction: column;
    }
    .new-timeboxer-timer-input {
      display: flex;
      flex-direction: column;
    }
    .new-timerbox-one-input {
      width: 100%
    }
  `
  ]
})
export class TimeboxNewComponent implements OnInit {
  id: string;
  public t$: Observable<any>;
  public newTimeboxer: FormGroup;
  public editing: boolean = false;
  public timeboxer: TimeboxerModel = {
    time: 20,
    title: "",
    speaker: "",
    playing: false
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private timeboxListSerivce: TimeboxListService
  ) {}

  ngOnInit() {
    this.t$ = this.activatedRoute.paramMap.pipe(
      map(param => {
        this.id = param.get("id");
        return this.id;
      }),
      switchMap(id => this.timeboxListSerivce.timeboxList$.pipe(pluck(id))),
      map(result => {
        if(result) {
          this.editing = true;
          return result;
        } else {
          return {
            title: null,
            speaker: null, 
            time: 1200000, //20 min
            warning: 300000 //5 min
          }
        }
      })
    )
  }

  onSubmit(t) {
    if(this.editing) {
      this.timeboxListSerivce.update(this.id, t);
    } else {
      this.timeboxListSerivce.add(t);
    }
    this.router.navigate(["list"]);
  }
}
