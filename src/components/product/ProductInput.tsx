import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { useSelector } from 'react-redux';
import { getCategories } from '../../states/category/categorySlice';
import { fetchCategoriesAsync } from '../../states/category/categoryAction';
import { useAppDispatch } from '../../states/store';

interface ProductInputProps {
  onAddProduct: (newProduct: Product) => void;
}

const ProductInput: FC<ProductInputProps> = ({ onAddProduct }) => {
  const dispatch = useAppDispatch();

  const categories = useSelector(getCategories);

  const [newProductName, setNewProductName] = useState('');
  const [newProductPlu, setNewProductPlu] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    onAddProduct({
      name: newProductName,
      plu: newProductPlu,
      category_id: 1,
    });
    setNewProductName('');
    setNewProductPlu('');
  };

  return (
    <>
      <form>
        <label htmlFor="name">Nama Produk</label>
        <input
          type="text"
          value={newProductName}
          id="name"
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <label htmlFor="plu">Produk Plu</label>
        <input
          type="text"
          value={newProductPlu}
          id="plu"
          onChange={(e) => setNewProductPlu(e.target.value)}
        />
        <select
          value={selectedCategoryId || ''}
          onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddProduct}>Tambah Produk</button>
      </form>
    </>
  );
};

export default ProductInput;
