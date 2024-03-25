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
  DatePipe, registerLocaleData
} from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';

registerLocaleData(localeEsCl);
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
    DatePipe
  ],
  providers: [ {provide:LOCALE_ID,useValue:'es-CL'} ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = 'Captain America';
  date: Date = new Date();
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr = ['IronMan', 'Thor', 'Hawkeye', 'SpiderMan', 'CaptainAmerica'];
  PI: number = Math.PI;
  percentage: number = 0.235;
  salary: number = 1234.5;

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
      country: 'USA'
    }
  };



}
