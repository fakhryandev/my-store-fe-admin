import { FC, useState } from 'react';
import { Category } from '../../types/Category';

interface CategoryInputProps {
  onAddCategory: (newCategory: Category) => void;
}

const CategoryInput: FC<CategoryInputProps> = ({ onAddCategory }) => {
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    onAddCategory({
      name: newCategoryName,
    });
    setNewCategoryName('');
  };

  return (
    <>
      <form>
        <label htmlFor="name">Nama Kategori</label>
        <input
          type="text"
          value={newCategoryName}
          id="name"
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button onClick={handleAddCategory}>Tambah Kategori</button>
      </form>
    </>
  );
};

export default CategoryInput;
