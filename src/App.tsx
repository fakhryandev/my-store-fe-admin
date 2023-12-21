import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ProductVariantPage from './pages/ProductVariantPage';
import HomePage from './pages/User/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<DashboardPage />} />
        <Route path="/admin/category" element={<CategoryPage />} />
        <Route path="/admin/product" element={<ProductPage />} />
        <Route path="/admin/productvariant" element={<ProductVariantPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
