import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { map, switchMap, pluck } from "rxjs/operators";
import { TimeboxListService } from "../timebox-list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-timebox-new",
  template: `
    <mat-card>
      {{ t$ | async | json }}
        <div class="new-timerbox-one-input">
          <mat-form-field [style.display]="'block'">
            <input matInput placeholder="Talk Title" />
          </mat-form-field>
        </div>

        <div>
          <mat-form-field [style.display]="'block'">
            <input matInput placeholder="Speaker Name" />
          </mat-form-field>
        </div>

        <div class="new-timeboxer-timer-input">
          <label>Talk Length</label>
          <div>
            <timer-input [(time)]="time"></timer-input>
          </div>
        </div>
      
        <div>
          <label>Warning</label>
          <div>
            <timer-input></timer-input>
          </div>
        </div>
     
        <button mat-raised-button type="submit">Submit</button>
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
  public t$: Observable<any[]>;
  public newTimeboxer: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private timeboxListSerivce: TimeboxListService
  ) {}

  ngOnInit() {
    this.t$ = this.activatedRoute.paramMap.pipe(
      map(param => param.get("id")),
      switchMap(id => this.timeboxListSerivce.timeboxList$.pipe(pluck(id)))
    );
  }

  onSubmit() {
    this.timeboxListSerivce.add({
      time: 1,
      title: "ringo",
      speaker: "speaking"
    });
    this.router.navigate(["list"]);
  }
}
