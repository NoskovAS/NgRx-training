import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    this.car.isSold = true;
  }

  onDelete() {
    this.deleteCar.emit(this.car);
  }

}
