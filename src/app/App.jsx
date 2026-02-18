import Sidebar from "../widgets/sidebar/ui/Sidebar";
import Menu from "../pages/menu/ui/Menu";
import './styles/index.css'
import ProductInfo from "../pages/info/ui/ProductInfo";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return(
        <div className="app">
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="/product/:id" element={<ProductInfo/>}/>
            </Routes>
        </div>
    );
}

export default App;