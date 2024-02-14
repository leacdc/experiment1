import { Outlet } from "react-router-dom";
import ContentRowTop from '.components/ContentRowTop';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import TopBar from "./components/TopBar";
import ProductDetail from '.components/ProductDetail';
import User from '.components/User';
import UserDetail from './components/UserDetail' ;
import UserList from '.components/UserList';
import './App.css';

function App() {

  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <TopBar />
        <ContentRowTop />
        <UserDetail />
        <ProductDetail />
        <UserList/>
        <User />
        <Outlet />
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
