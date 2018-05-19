import { Component, OnInit } from "@angular/core";

@Component({
  selector: "timer-input",
  template: `
    <mat-form-field>
      <input matInput type="number" placeholder="Hour" />
    </mat-form-field>
    <span>:</span>
    <mat-form-field>
      <input matInput type="number" placeholder="Min" max="60" min="0" />
    </mat-form-field>
    <span>:</span>
    <mat-form-field>
      <input matInput type="number" placeholder="Sec" max="60" min="0" />
    </mat-form-field>
  `,
  styles: [`
    span {
      color: gray;
      margin: 0px 5px;
    }
  `]
})
export class TimerInputComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
