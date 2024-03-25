import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  UpperCasePipe, LowerCasePipe, SlicePipe }  from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // <--- add this comment
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = 'Captain America';
  date: Date = new Date();
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
