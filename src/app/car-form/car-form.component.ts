import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Car } from '../car';
import { AppState } from '../ngrx/app.state';
import { Store } from '@ngrx/store';
import { AddCar } from '../ngrx/cars.action';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  public carForm: FormGroup = null;
  public formError: boolean = false;

  private id: number = 2;

  constructor(private store: Store<AppState>) {
    this.carForm = new FormGroup({
      carName: new FormControl('', Validators.required),
      carModel: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }

  onAdd() {
    if (this.carForm.invalid) {
      Object.keys(this.carForm.controls).forEach(key => {
        this.carForm.controls['carName'].markAsTouched();
        this.carForm.controls['carModel'].markAsTouched();
      });
      return;
    }

    this.id = ++this.id;

    const car = new Car(
      this.carForm.value.carName,
      moment().format('DD.MM.YY'),
      this.carForm.value.carModel,
      false,
      this.id
    );

    this.store.dispatch(new AddCar(car));

    this.carForm.reset();
  }

  onLoad() {
    console.log('onLoad()');
  }

  getErrorMessage() {
    return this.carForm.value.carName.hasError('required') ? 'You must enter a value' : '';
  }
}
