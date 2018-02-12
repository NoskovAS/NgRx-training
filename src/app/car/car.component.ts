import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';
import { AppState } from '../ngrx/app.state';
import { Store } from '@ngrx/store';
import { DeleteCar, UpdateCar } from '../ngrx/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onBuy() {
    this.store.dispatch(new UpdateCar(this.car));
  }

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }

}
