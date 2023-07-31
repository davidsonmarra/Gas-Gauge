export interface CarsStoreProps {
  cars: CarProps[];
  getCars: () => Promise<CarProps[]>;
  addCar: (car: CarProps) => Promise<CarProps[]>;
}

export interface CarProps {
  name: string;
  color: string;
  average?: number;
  tankCapacity: string;
}
