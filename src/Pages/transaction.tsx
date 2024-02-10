
import Adminsidebar from "../Components/adminsidebar";
import { ReactElement } from "react";
import { Column } from "react-table";
import { useState,useCallback } from "react";
import Tablehoc from "../Components/tablehoc"
import { Link } from "react-router-dom";


interface DataType{

user:string;
amount:number;
discount:number;
quantity:number;
status:ReactElement;
action:ReactElement;
}

const columns:Column<DataType>[]=[

{
  Header:"User",
  accessor:"user"
},
{
  Header:"Amount",
  accessor:"amount"
},
{
  Header:"Discount",
  accessor:"discount"
},
{
  Header:"Quantity",
  accessor:"quantity"
},
{
  Header:"Status",
  accessor:"status"
},
{
  Header:"Action",
  accessor:"action"
}
];
 const arr:DataType[]=[
  {
    user:"Upal-Mitra",
    amount:4500,
    discount:400,
    quantity:30,
    status:<span className="red">Processing</span>,
    action:<Link to="/admin/transaction/nilay">Manage</Link>,
  },
  {
    user:"Sumon-Maji",
    amount:4500,
    discount:400,
    quantity:30,
    status:<span className="green">Processing</span>,
    action:<Link to="/admin/transaction/nilay">Manage</Link>,
  },
  {
    user:"nilay-Pal",
    amount:4500,
    discount:400,
    quantity:30,
    status:<span className="purple">Processing</span>,
    action:<Link to="/admin/transaction/nilay">Manage</Link>,
  },
 ];



const Transaction = () => {

  const [data]=useState<DataType[]>(arr);

  
  const Table=useCallback(
    Tablehoc<DataType>(columns,data,"product-dashboard","Transaction",true),[]
  );

  return (
    <div className="adminContainer">
     <Adminsidebar/>
     <main>{Table()}</main>


  
    </div>
  )
}

export default Transaction
