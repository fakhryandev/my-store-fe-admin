import { Product } from './Product';

export interface ProductState {
  data: Product[];
  loading: boolean;
}
