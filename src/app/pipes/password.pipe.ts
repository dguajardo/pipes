import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
  standalone: true
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, show: boolean = true): string {
    let words = value.split(' ');
    return (show) ? '*'.repeat(value.length) : value;
  }

}
