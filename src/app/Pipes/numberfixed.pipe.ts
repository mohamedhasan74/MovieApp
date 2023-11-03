import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberfixed'
})
export class NumberfixedPipe implements PipeTransform {

  transform(number : number): number {
    return Number(number.toFixed(1));
  }

}
