import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
  name: 'domseguro',
  standalone: true,
})
export class DomseguroPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
