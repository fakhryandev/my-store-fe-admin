import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import RootState from '../../types/RootState';
import { ProductState } from '../../types/ProductState';
import { Product } from '../../types/Product';

const initialState: ProductState = {
  data: [],
  loading: true,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.data.push(action.payload);
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addProduct, setProducts } = productsSlice.actions;

export const getProducts = (state: RootState) => state.products.data;
export const getProductsLoading = (state: RootState) => state.products.loading;

export default productsSlice.reducer;
