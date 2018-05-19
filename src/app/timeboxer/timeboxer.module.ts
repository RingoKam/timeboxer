import { TimeboxListService } from './timebox-list.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeboxListComponent } from './timebox-list/timebox-list.component';
import { TimeboxCardComponent } from './timebox-card/timebox-card.component';
import { TimeboxNewComponent } from './timebox-new/timebox-new.component';

import { MatCardModule, MatToolbarModule, MatButtonModule } from "@angular/material";

const materialModule = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule
]

@NgModule({
  imports: [
    CommonModule,
    ...materialModule
  ],
  providers: [TimeboxListService],
  declarations: [TimeboxListComponent, TimeboxCardComponent, TimeboxNewComponent],
  exports: [TimeboxListComponent]
})
export class TimeboxerModule { }
