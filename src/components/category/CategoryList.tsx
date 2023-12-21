import { FC } from 'react';
import { Category } from '../../types/Category';

interface CategoryListProps {
  categories: Category[];
}

const CatgegoryList: FC<CategoryListProps> = ({ categories }) => {
  return (
    <>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CatgegoryList;
