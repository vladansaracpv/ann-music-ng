import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hertz'
})
export class HertzPipe implements PipeTransform {

  transform(value: number): string {
    return `${value.toFixed(2)} Hz`;
  }

}
