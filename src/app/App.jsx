import Sidebar from "../widgets/sidebar/ui/Sidebar";
import Menu from "../pages/menu/ui/Menu";
import './styles/index.css'
import ProductInfo from "../pages/info/ui/ProductInfo";
import AppRouter from "./providers/routers/AppRouter";

const App = () => {
    return(
        <div className="app">
            <Sidebar/>
            <AppRouter/>
        </div>
    );
}

export default App;