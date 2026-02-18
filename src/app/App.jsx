import Sidebar from "../widgets/sidebar/ui/Sidebar";
import './styles/index.css'
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