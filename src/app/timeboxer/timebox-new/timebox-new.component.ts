import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { TimeboxListService } from "../timebox-list.service";

@Component({
  selector: "app-timebox-new",
  template: `
    <mat-card>
      <form [formGroup]="newTimeboxer" (ngSubmit)="onSubmit()" class="new-timeboxer-inputs">

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
            <timer-input></timer-input>
          </div>
        </div>
      
        <div>
          <label>Warning</label>
          <div>
            <timer-input></timer-input>
          </div>
        </div>
     
        <button mat-raised-button type="submit">Submit</button>
      </form>
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

  public newTimeboxer: FormGroup;
  
  constructor(private router: Router, private timeboxListSerivce: TimeboxListService) {}

  ngOnInit() {
    this.newTimeboxer = new FormGroup({
      title: new FormControl(),
      speaker: new FormControl(),
      length: new FormControl(),
      warning: new FormControl()
    });
  }

  onSubmit() {
    this.timeboxListSerivce.add({time: 1, title: "ringo", speaker: "speaking"});
    this.router.navigate(["list"])
  }
}
