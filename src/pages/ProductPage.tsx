import { useSelector } from 'react-redux';
import { useAppDispatch } from '../states/store';
import { useEffect, useState } from 'react';
import { getProducts } from '../states/product/productSlice';
import ProductList from '../components/product/ProductList';
import ProductInput from '../components/product/ProductInput';
import { Product } from '../types/Product';
import { fetchProductsAsync } from '../states/product/productAction';

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(getProducts);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const handleAddProduct = (newProduct: Product) => {
    console.log(newProduct);

    // dispatch(addCategoryAsync(newCategory));
  };

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <>
      <p>Product</p>
      <ProductInput onAddProduct={handleAddProduct} />
      {loading ? <p>Loading</p> : <ProductList products={products} />}
    </>
  );
};

export default ProductPage;
