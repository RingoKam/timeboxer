import { TimeboxerModel } from "./../timeboxer-model";
import { Component, OnInit, HostListener, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TimeboxListService } from "../timebox-list.service";
import { map, switchMap, pluck } from "rxjs/operators";
import { Observable, combineLatest, Subscription } from "rxjs";

@Component({
  selector: "player",
  template: `
    <div *ngIf="overlay">
      <div class="description">
        <div>
        </div>
      </div>
      <div class="absolute-center">
        <button class="control-button" *ngIf="!timer.playing; else pause" (click)="start()">
          Play
        </button>
        <ng-template #pause>
          <button class="control-button" (click)="stop()">Pause</button>
        </ng-template>
      </div>
    </div>
    <div class="player" [ngClass]="{'overlay': overlay}">
      <div 
        class="timer" 
        *ngIf="timer.playingTime | duration; let playingTime; else defaultTime">
        <span class="hour time" *ngIf="playingTime.hour; let hour; else default">
          {{hour}}:
        </span>
        <span class="minute time" *ngIf="playingTime.min; let min">
          {{min}}
        </span>
        <span class="second time" *ngIf="playingTime.sec; let sec">
          :{{sec}}
        </span>
      </div>
      <ng-template #defaultTime>
        00:00:00
      </ng-template>
    </div>
  `,
  styles: [
    `
    .player {
      height: 100%;
      display: flex;
      justify-content: center;
    }
    
    .timer {
      display: flex;
      flex-direction: row;
    }

    .time {
      font-size: 20vw;
    }

    .absolute-center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
    }

    .control-button {
      background: rgba(0, 0, 0, 0);
      color: white;
      border: solid white 5px;
      border-radius: 10px;
    }

    .control-button-icon {
      font-size: 30vh;
    }

    .overlay {
      position: fixed; /* Sit on top of the page content */
      width: 100%; /* Full width (cover the whole page) */
      height: 100%; /* Full height (cover the whole page) */
      top: 0; 
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5); /* Black background with opacity */
      z-index: 2;
    } 
  `
  ]
})
export class PlayerComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private timeboxListSerivce: TimeboxListService,
    private cdr: ChangeDetectorRef
  ) {}
  
  public timer: TimeboxerModel;
  public running: boolean;
  public overlay: boolean;
  private timeOut;
  private id: string;
  private sub: Subscription;
  
  ngOnInit() {
    this.sub = combineLatest(
      this.timeboxListSerivce.timeboxList$,
      this.activatedRoute.paramMap
    )
      .pipe(
        map(([timeboxerList, param]) => {
          this.id = param.get("id");
          return {
            id: this.id,
            timeboxer: timeboxerList[this.id] || null
          };
        })
      )
      .subscribe(obj => {
        const { id, timeboxer } = obj;
        if (timeboxer !== undefined && timeboxer.playing === undefined) {
          timeboxer.playing = false;
          timeboxer.playingTime = timeboxer.time;
        }
        this.timer = timeboxer;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  @HostListener("click", ["$event.target"])
  click() {
    this.overlay = !this.overlay;
  }

  start() {
    const tickInterval = 100;
    this.timer.playing = true;
    this.timeOut = setInterval(() => {
      console.log(this.timer.playingTime);
      if (this.timer.playingTime <= 0) {
        this.stop();
      }
      this.timer.playingTime -= tickInterval;
      this.timeboxListSerivce.update(this.id, this.timer);
    }, tickInterval);
  }

  stop() {
    clearInterval(this.timeOut);
    this.timer.playing = false;
    this.timeboxListSerivce.update(this.id, this.timer);
  }
}
