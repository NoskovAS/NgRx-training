import {Car} from '../car';

export interface AppState {
    carPage: {
        cars: Car[]
    };
}
