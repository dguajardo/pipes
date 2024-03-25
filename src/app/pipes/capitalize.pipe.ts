import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  // digit:number

  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase();
    let names = value.split(' ');
    if (todas) {
      names = names.map(name => {
      return name[0].toUpperCase() + name.substr(1);
      });

    } else {
      names[0]=names[0][0].toUpperCase() + names[0].substr(1);

    }
    return names.join(' ');
  }
}
