import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './category/categorySlice';
import productsReducer from './product/productSlice';
import productVariantReducer from './productvariant/productVariantSlice';

import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    productVariants: productVariantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
