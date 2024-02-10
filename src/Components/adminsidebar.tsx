
import { Link, useLocation } from "react-router-dom";
import {RiDashboardFill,RiShoppingBag3Fill,RiCoupon3Fill} from "react-icons/ri"
import {IoIosPeople} from "react-icons/io"
import{ AiFillFileText } from "react-icons/ai"
import{FaChartBar,FaChartPie,FaChartLine,
FaStopwatch,FaGamepad} from "react-icons/fa"
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";


const Adminsidebar = () => {
  const location=useLocation()

  const [showModal,setShowModal]=useState<boolean>(false);
  const [phoneActive, setPhoneActive]=useState<boolean>(
    window.innerWidth<100
  );

  return (
<>
  {phoneActive && (
    <button id="hamburger" onClick={()=> setShowModal(true)}>
      <HiMenuAlt4/>
    </button>
  )

  }

    <aside 
     style={phoneActive
       ?{
        width:"20rem",
        height:"100vh",
        position:"fixed",
        top:0,
        left:0,
        transition:"all 0.5s",
       }
       :{}
    }
    
    >
      <h2>Logo.</h2>
      <div className="admincontainer">
        <h5>Dashboard</h5>
        <ul>
           <li >
            <Link to={"/admin/dashboard"}>
              <RiDashboardFill/>
              Dashboard
            </Link>
           </li>
           <li>
            <Link to={"/admin/products"}>
              <RiShoppingBag3Fill/>
              Product
            </Link>
           </li> 
           <li>
            <Link to={"/admin/customer"}>
              <IoIosPeople/>
              Customer
            </Link>
           </li> 
           <li>
            <Link to={"/admin/transaction"}>
              <AiFillFileText/>
              Transcation
            </Link>
           </li>   
        </ul>
      </div>
      {/* charts */}

      <div className="admincontainer">
        <h5>Charts</h5>
        <ul>
           <li >
            <Link to={"/admin/chart/bar"}>
              <FaChartBar/>
              Bar
            </Link>
           </li>
           <li>
            <Link to={"/admin/chart/pie"}>
              <FaChartPie/>
              Pie
            </Link>
           </li> 
           <li>
            <Link to={"/admin/chart/line"}>
              <FaChartLine/>
              Line
            </Link>
           </li> 
        </ul>
      </div>

      {/* apps */}
      <div className="admincontainer">
        <h5>Appas</h5>
        <ul>
           <li >
            <Link to={"/admin/app/stopwatch"}>
              <FaStopwatch/>
              StopWatch
            </Link>
           </li>
           <li>
            <Link to={"/admin/app/coupon"}>
              <RiCoupon3Fill/>
              Coupon
            </Link>
           </li> 
           <li>
            <Link to={"/admin/app/toss"}>
              <FaGamepad/>
              Toss
            </Link>
           </li> 
        </ul>
      </div>

    </aside>
    </>
  )
}


export default Adminsidebar
