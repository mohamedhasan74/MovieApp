import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textcut'
})
export class TextcutPipe implements PipeTransform {

  transform(title: string, numberOfWord : number = 20): string {
    return title.split(" ").slice(0, numberOfWord).join(" ");
  }

}
