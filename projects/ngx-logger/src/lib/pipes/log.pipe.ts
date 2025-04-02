import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'logInterpolation'
})
export class LogPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value
  }
}
