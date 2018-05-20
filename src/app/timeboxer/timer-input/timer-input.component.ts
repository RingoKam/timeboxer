import { HourToMs, MinToMs, SecToMs } from './../time';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { MsToTimeFormat } from "../time"

@Component({
  selector: "timer-input",
  template: `
  <div class="timer-input"> 
    <mat-form-field>
      <input matInput type="number" placeholder="Hour"  [(ngModel)]="hour" (change)="updateTime()" />
    </mat-form-field>
    <span>:</span>
    <mat-form-field>
      <input matInput type="number" placeholder="Min" max="60" min="0" [(ngModel)]="min" (change)="updateTime()" />
    </mat-form-field>
    <span>:</span>
    <mat-form-field>
      <input matInput type="number" placeholder="Sec" max="60" min="0" [(ngModel)]="sec" (change)="updateTime()" />
    </mat-form-field>
  </div>
  `,
  styles: [`
    span {
      color: gray;
      margin: 0px 5px;
    }
    .timer-input {
      display: inline;
    }
  `]
})
export class TimerInputComponent implements OnChanges {
  constructor() {}
  
  @Input() time: number = 0;
  @Output() timeChange = new EventEmitter();
  
  public hour: number;
  public min: number;
  public sec: number;
  
  ngOnChanges(changes: SimpleChanges): void {
    const { hour, min, sec } = MsToTimeFormat(this.time);
    this.hour = hour;
    this.min = min;
    this.sec = sec;
  }

  updateTime() {
    const time = HourToMs(this.hour) + MinToMs(this.min) + SecToMs(this.sec);
    this.timeChange.emit(time);
  }
}
