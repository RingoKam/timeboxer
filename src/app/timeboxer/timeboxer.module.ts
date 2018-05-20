import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { RouterModule, Routes } from "@angular/router";

import { TimeboxListService } from "./timebox-list.service";

import { TimeboxListComponent } from "./timebox-list/timebox-list.component";
import { TimeboxCardComponent } from "./timebox-card/timebox-card.component";
import { TimeboxNewComponent } from "./timebox-new/timebox-new.component";

import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatBadgeModule,
  MatFormFieldModule
} from "@angular/material";
import { TimeboxerComponent } from './timeboxer/timeboxer.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { PlayerComponent } from './player/player.component';

const materialModule = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonModule,
  MatInputModule,
  MatBadgeModule,
  MatFormFieldModule
];

const routes: Routes = [
  { path: "list", component: TimeboxListComponent },
  { path: "new", component: TimeboxNewComponent },
  { path: "**", redirectTo: "list" }
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ...materialModule, RouterModule.forRoot(routes)],
  providers: [TimeboxListService],
  declarations: [
    TimeboxListComponent,
    TimeboxCardComponent,
    TimeboxNewComponent,
    TimeboxerComponent,
    TimerInputComponent,
    PlayerComponent
  ],
  exports: [TimeboxerComponent]
})
export class TimeboxerModule {}
