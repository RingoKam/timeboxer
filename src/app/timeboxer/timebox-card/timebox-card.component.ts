import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TimeboxerModel } from '../timeboxer-model';

@Component({
  selector: 'timebox-card',
  template: `
    <mat-card>
      {{ timeboxer | json }} 
    </mat-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeboxCardComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
  }

  @Input() timeboxer: TimeboxerModel
}
