import { TimeboxerModel } from './timeboxer-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeboxListService {

  constructor() { }

  private timeboxList: BehaviorSubject<any[]> = new BehaviorSubject<any>([1,2,3,4,5])
  public timeboxList$ = this.timeboxList.asObservable();
  
  add(timeboxer: TimeboxerModel) {
    const current = this.timeboxList.getValue(); 
    this.timeboxList.next([...current, timeboxer]);
  }

  remove(index) {
    const current = this.timeboxList.getValue();
    const updated = [current.slice(0, index), current.slice(index, current.length - 1)];
    this.timeboxList.next(updated);
  }
  
  update(timeboxer) {
    const current = this.timeboxList.getValue();
  }
}
