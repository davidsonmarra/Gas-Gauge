import {AddCarStepProps} from '@types';

export const STEPS: AddCarStepProps[] = [
  {
    title: 'Nome',
    description: 'Escolha um nome para o seu carro',
    field: 'name',
    placeholder: 'Ex: Gol Bolinha',
    type: 'text',
  },
  {
    title: 'Cor',
    description: 'Escolha uma cor para o seu carro',
    field: 'color',
    placeholder: 'Ex: #f0f0f0',
    type: 'color',
  },
];
