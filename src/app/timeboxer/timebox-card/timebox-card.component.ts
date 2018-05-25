import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TimeboxerModel } from '../timeboxer-model';

@Component({
  selector: 'timebox-card',
  template: `
    <mat-expansion-panel [ngClass]="'talk'">
      <mat-expansion-panel-header>
        <mat-panel-title>
          {{timeboxer.title}}
        </mat-panel-title>
        <mat-panel-description>
          <span class="desc">{{timeboxer.speaker}}</span>
          <span class="desc">{{(timeboxer.time | duration).min}}min{{(timeboxer.time | duration).sec}}s</span>
          <span *ngIf="timeboxer.warning" class="desc">warn:{{(timeboxer.warning | duration).min  || 0}}</span>
        </mat-panel-description>
      </mat-expansion-panel-header>
      <button mat-button (click)="edit.emit(id)">edit</button>
      <button mat-raised-button (click)="play.emit(id)">play</button>
    </mat-expansion-panel>
  `,
  styles: [`
    .talk {
      border-left: 5px solid red;
      margin: 10px 5px;
    }
    .desc {
      margin-left: 5px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeboxCardComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
  }

  @Input() timeboxer: TimeboxerModel
  @Input() id: string;
  @Output() play: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
}
