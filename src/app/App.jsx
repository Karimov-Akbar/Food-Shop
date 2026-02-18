import Sidebar from "../widgets/sidebar/ui/Sidebar";
import Menu from "../pages/menu/ui/Menu";
import './styles/index.css'

const App = () => {
    return(
        <div className="app">
            <Sidebar/>
            <Menu />
        </div>
    );
}

export default App;