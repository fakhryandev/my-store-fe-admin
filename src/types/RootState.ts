import { CartState } from './CartState';
import { CategoryState } from './CategoryState';
import { ProductState } from './ProductState';
import { ProductVariantState } from './ProductVariantState';

interface RootState {
  categories: CategoryState;
  products: ProductState;
  productVariants: ProductVariantState;
  cart: CartState;
}

export default RootState;
