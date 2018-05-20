import { TimeboxerModel } from "./timeboxer-model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TimeboxListService {
  constructor() {}

  private timeboxList: BehaviorSubject<{
    [id: string]: TimeboxerModel;
  }> = new BehaviorSubject<any>({});
  public timeboxList$ = this.timeboxList.asObservable();

  add(timeboxer: TimeboxerModel) {
    const current = this.timeboxList.getValue();
    const ids = Object.keys(current)
      .sort()
      .reverse();
    const id = ids[0] ? ids[0] + 1 : 0;
    this.timeboxList.next({ ...current, ...{ id: timeboxer } });
  }

  remove(id) {
    const current = this.timeboxList.getValue();
    delete current[id];
    this.timeboxList.next(current);
  }

  update(id, timeboxer: TimeboxerModel) {
    const current = this.timeboxList.getValue();
    current[id] = {...current[id], ...timeboxer};
    this.timeboxList.next(current);
  }
}
