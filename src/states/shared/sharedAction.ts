import { Category } from '../../types/Category';
import { Product } from '../../types/Product';
import productApi from '../../utils/productApi';
import categoryApi from '../../utils/categoryApi';
import { AppThunk } from '../store';
import { setProducts } from '../product/productSlice';
import { setCategories } from '../category/categorySlice';

export const fetchProductsAndCategoriesAsync = (): AppThunk => async (dispatch) => {
  try {
    const products: Product[] = await productApi.getProducts();
    const category: Category[] = await categoryApi.getAllCategory();

    dispatch(setProducts(products))
    dispatch(setCategories(category))
  } catch (error) {
    console.log(error);
  } finally {
  }
};
