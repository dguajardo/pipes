import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  UpperCasePipe,
  LowerCasePipe,
  SlicePipe,
  DecimalPipe,
  PercentPipe,
  CurrencyPipe,
  JsonPipe,
  AsyncPipe,
  DatePipe,
  registerLocaleData,
} from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';
import localeFr from '@angular/common/locales/fr';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

registerLocaleData(localeEsCl);
registerLocaleData(localeFr);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // <--- add this comment
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    JsonPipe,
    AsyncPipe,
    DatePipe,
    CapitalizePipe,
    DomseguroPipe
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = 'Captain America';
  name1: string = 'DiEgO olIVia';
  date: Date = new Date();
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr = ['IronMan', 'Thor', 'Hawkeye', 'SpiderMan', 'CaptainAmerica'];
  PI: number = Math.PI;
  percentage: number = 0.235;
  salary: number = 1234.5;
  language: string = 'EN';
  videoUrl: string =
    'https://www.youtube.com/embed/4GVLWf-Y3Kk?si=AiSsSlcGYdVZxa1c';

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('llego data');
    }, 4500);
  });
  hero = {
    name: 'Logan',
    nickname: 'Wolverine',
    age: 500,
    address: {
      city: 'New York',
      state: 'NY',
      country: 'USA',
    },
  };
}
