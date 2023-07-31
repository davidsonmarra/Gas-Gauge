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
    title: 'Capacidade do tanque',
    description: 'Digite a capacidade do tanque do seu carro (em L)',
    field: 'tankCapacity',
    placeholder: 'Ex: 50',
    type: 'number',
  },
  {
    title: 'Cor',
    description: 'Escolha uma cor para o seu carro',
    field: 'color',
    type: 'color',
  },
];
