import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayingService {

  constructor() { }

  private nowPlaying: BehaviorSubject<any> = new BehaviorSubject([]);
  public nowPlaying$ = this.nowPlaying.asObservable();

}
