import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CategoryState } from '../../types/CategoryState';
import { Category } from '../../types/Category';
import RootState from '../../types/RootState';

const initialState: CategoryState = {
  data: [],
  loading: true,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.data.push(action.payload);
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addCategory, setCategories } = categoriesSlice.actions;

export const getCategories = (state: RootState) => state.categories.data;
export const getCategoriesLoading = (state: RootState) =>
  state.categories.loading;

export default categoriesSlice.reducer;
