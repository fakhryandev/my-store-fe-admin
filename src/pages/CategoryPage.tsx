import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCategories } from '../states/category/categorySlice';
import { fetchCategoriesAsync } from '../states/category/categoryAction';
import { useAppDispatch } from '../states/store';
import CatgegoryList from '../components/category/CategoryList';
import CategoryInput from '../components/category/CategoryInput';
import { Category } from '../types/Category';

const CategoryPage = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector(getCategories);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const handleAddCategory = (newCategory: Category) => {
    console.log(newCategory);

    // dispatch(addCategoryAsync(newCategory));
  };

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <>
      <p>Category</p>
      <CategoryInput onAddCategory={handleAddCategory} />
      {loading ? <p>Loading</p> : <CatgegoryList categories={categories} />}
    </>
  );
};

export default CategoryPage;
