import { Product } from '../../types/Product';
import api from '../../utils/productApi';
import { AppThunk } from '../store';
import { setProducts } from './productSlice';

export const fetchProductsAsync = (): AppThunk => async (dispatch) => {
  try {
    const products: Product[] = await api.getProducts();

    dispatch(setProducts(products));
  } catch (error) {
    console.log(error);
  } finally {
  }
};
