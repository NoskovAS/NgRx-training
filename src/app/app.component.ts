import { Component } from '@angular/core';
import { Car, Cars } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ford', '12.01.18', 'Focus', false, 1),
    new Car('Mersedes', '07.12.14', 'GL500', false, 2)
  ];
}
