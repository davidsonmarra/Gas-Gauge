import {create} from 'zustand';
import {CarsStoreProps, CarProps} from '../../@types';
import {storage} from '@utils';

export const useCarsStore = create<CarsStoreProps>(set => ({
  cars: [],
  getCars: async () => {
    try {
      const carsString = storage.getString('cars') || '';
      const cars = ((await JSON.parse(carsString)) as CarProps[]) || [];
      set(_ => ({cars}));
      console.log('cars', cars);
      return cars;
    } catch (_) {
      return [];
    }
  },
  addCar: async (car: CarProps) => {
    const cars: CarProps[] = await useCarsStore.getState().getCars();
    const newCars = [...cars, car];
    storage.set('cars', JSON.stringify(newCars));
    set(_ => ({cars: newCars}));
    return newCars;
  },
}));
