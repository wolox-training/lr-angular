import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBooks'
})
export class SearchBooksPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: any, args?: any): any {

    // return null;
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
