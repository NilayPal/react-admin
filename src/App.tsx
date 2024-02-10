import React from 'react'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./Pages/home";
import Search from './Pages/search';
import Cart from './Pages/cart';
import Header from './Components/header';
import Dashboard from './Pages/dashboard';
import Products from './Pages/products';
import Customer from './Pages/customer';
import Transaction from './Pages/transaction';
import NewProduct from './Pages/management/NewProduct';
import TransactionManagement from './Pages/management/TransactionManagement';
import ProductManagement from './Pages/management/ProductManagement';
import BarCharts from './Pages/charts/BarCharts';
import PieChart from './Pages/charts/PieCharts';
import LineCharts from './Pages/charts/LineCharts';
import PieCharts from './Pages/charts/PieCharts';
import Cupon from './Pages/apps/Cupon';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      {/* {Header} */}
      {/* <Header/> */}
      <Routes>
       

      <Route path="/" element={<Link to="/admin/dashboard"><button>Visit Dashboard</button></Link>}/>


       <Route path="/" element={<Home/>}/>
       <Route path="/Search" element={<Search/>}/>
       <Route path="/Cart" element={<Cart/>}/>
       <Route path="/admin/dashboard" element={<Dashboard/>}/>
       <Route path="/admin/products" element={<Products/>}/>
       <Route path="/admin/customer" element={<Customer/>}/>
       <Route path="/admin/transaction" element={<Transaction/>}/>
       
      
      {/* Charts */}
      <Route path="/admin/chart/bar" element={<BarCharts/>}/>
      <Route path="/admin/chart/pie" element={<PieCharts/>}/>
      <Route path="/admin/chart/line" element={<LineCharts/>}/>

      {/* apps */}
      <Route path="/admin/app/coupon"  element={<Cupon/>}/>

      {/* Management */}
      <Route path="/admin/products/admin/product/new" element={<NewProduct/>}/>
      <Route path="/admin/products/admin/product/:id" element={<ProductManagement/>}/>
      <Route path="admin/transaction/nilay" element={<TransactionManagement/>}/>
      </Routes>
    </Router>
  );
};

export default App
