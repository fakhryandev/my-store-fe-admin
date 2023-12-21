import { FC } from 'react';
import { Product } from '../../types/Product';

interface ProductListProps {
  products: Product[];
}
const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.plu} - {product.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
