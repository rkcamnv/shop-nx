import { ID } from '@datorama/akita';

export interface ModelProduct {
  id: ID;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
