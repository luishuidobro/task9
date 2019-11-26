import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], args: any[]): any {
    return items.filter(item => item.indexOf(args[0]) !== -1);
  }

}
