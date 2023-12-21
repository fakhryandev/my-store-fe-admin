import { ProductVariant } from '../../types/ProductVariant';
import api from '../../utils/productVariantApi';
import { AppThunk } from '../store';
import { setProductVariants } from './productVariantSlice';

export const fetchProductVariantsAsync = (): AppThunk => async (dispatch) => {
  try {
    const productVariants: ProductVariant[] = await api.getProductVariants();

    dispatch(setProductVariants(productVariants));
  } catch (error) {
    console.log(error);
  } finally {
  }
};
