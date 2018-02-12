import { Car } from '../car';
import { Action } from '@ngrx/store';
import { CAR_ACTION, AddCar } from './cars.action';

const initialState = {
    cars: [
        new Car('Ford', '12.01.18', 'Focus', false, 1),
        new Car('Mersedes', '07.12.14', 'GL500', false, 2)
    ]
};

export function carsReducer(state = initialState, action: AddCar) {
    switch (action.type) {
        case CAR_ACTION.ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            };
        default:
            return state;
    }
}
