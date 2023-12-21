import { Category } from '../../types/Category';
import api from '../../utils/categoryApi';
import { AppThunk } from '../store';
import { setCategories } from './categorySlice';

export const fetchCategoriesAsync = (): AppThunk => async (dispatch) => {
  try {
    const categories: Category[] = await api.getAllCategory();

    dispatch(setCategories(categories));
  } catch (error) {
    console.log(error);
  } finally {
  }
};

// export const postCategoryAsync = (): AppThunk => async (dispatch) => {
//   try {
//     const categories: Category[] = await api.getAllCategory();

//     dispatch(setCategories(categories));
//   } catch (error) {
//     console.log(error);
//   } finally {
//   }
// };
