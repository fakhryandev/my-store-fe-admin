import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductVariant } from '../../types/ProductVariant';
import { ProductVariantState } from '../../types/ProductVariantState';
import RootState from '../../types/RootState';

const initialState: ProductVariantState = {
  data: [],
  loading: true,
};

const productVariantsSlice = createSlice({
  name: 'productvariants',
  initialState,
  reducers: {
    setProductVariants: (state, action: PayloadAction<ProductVariant[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setProductVariants } = productVariantsSlice.actions;

export const getProductVariants = (state: RootState) =>
  state.productVariants.data;
export const getProductsVariantsLoading = (state: RootState) =>
  state.productVariants.loading;

export default productVariantsSlice.reducer;
