import { Car } from '../car';
import { Action } from '@ngrx/store';
import { CAR_ACTION, CarAction } from './cars.action';

const initialState = {
    cars: [
        new Car('Ford', '12.01.18', 'Focus', false, 1),
        new Car('Mersedes', '07.12.14', 'GL500', false, 2)
    ]
};

export function carsReducer(state = initialState, action: CarAction) {
    switch (action.type) {
        case CAR_ACTION.ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            };
        case CAR_ACTION.DELETE_CAR:
            return {
                ...state,
                cars: [...state.cars.filter(car => car.id !== action.payload.id)]
            };
        case CAR_ACTION.UPDATE_CAR:
        const index = state.cars.findIndex(car => car.id === action.payload.id);
        state.cars[index].isSold = true;
        return {
            ...state,
            cars: [...state.cars]
        };
        default:
            return state;
    }
}
