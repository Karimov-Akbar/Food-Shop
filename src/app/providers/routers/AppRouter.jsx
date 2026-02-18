import { Routes, Route } from 'react-router-dom';
import Menu from '../../../pages/menu/ui/Menu';
import ProductInfo from '../../../pages/info/ui/ProductInfo';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/product/:id" element={<ProductInfo />} />
        </Routes>
    );
};

export default AppRouter;