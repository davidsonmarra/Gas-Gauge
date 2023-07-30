import {create} from 'zustand';
import {CarsStoreProps, CarProps} from '../../@types';
import {storage} from '@utils';

export const useCarsStore = create<CarsStoreProps>(set => ({
  cars: [],
  getCars: async () => {
    const carsString = storage.getString('cars') || '';
    const cars = ((await JSON.parse(carsString)) as CarProps[]) || [];
    set(_ => ({cars}));
    console.log('cars', cars);
    return cars;
  },
}));
