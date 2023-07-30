export interface CarsStoreProps {
  cars: CarProps[];
  getCars: () => Promise<CarProps[]>;
}

export interface CarProps {
  name: string;
  color: string;
  average?: number;
}
