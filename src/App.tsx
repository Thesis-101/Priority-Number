import './styles/tailwind.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './auth/Login';
import MenuNavigation from './pages/MainMenu/MenuNavigation';
import InventoryNavigation from './pages/InventoryMenu/InventoryNavigation';
import MainNavigation from './pages/Main/MainNavigation';

function App() {

  return (
    // <h1 className="text-3xl font-bold underline text-red-500">
    //   Hello world!
    // </h1>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main/front-office/*" element={<MainNavigation />} />
        {/* <Route path="/main/*" element={<MenuNavigation />} /> */}
        {/* <Route path="/main/inventory" element={<InventoryNavigation />} /> */}
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
