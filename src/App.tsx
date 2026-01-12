import { Routes, Route, Navigate } from 'react-router-dom';
import AllCategories from './components/All_Categories/components/AllCategories';
import ProductGallery from './components/Product_Gallery/components/ProductGallery';

function App() {
  return (
    <Routes>   
      <Route path="/products" element={<AllCategories />} />
      <Route path="/products/:id" element={<ProductGallery />} />

      {/* 3. Automatic redirect if someone just goes to the base URL  chagne this later*/}
      <Route path="/" element={<Navigate to="/products" />} />
    </Routes>
  );
}

export default App;