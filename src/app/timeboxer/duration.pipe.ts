import { Pipe, PipeTransform } from '@angular/core';
import { MsToTimeFormat } from './time';


@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(ms: number, args?: any): any {
    return MsToTimeFormat(ms);
  }
}
