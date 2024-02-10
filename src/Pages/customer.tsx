import Adminsidebar from "../Components/adminsidebar"
import { ReactElement } from "react";
import { Column } from "react-table";
import { useState,useCallback } from "react";
import Tablehoc from "../Components/tablehoc"
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

interface DataType{
  avatar:ReactElement;
  name:string;
  email:string;
  gender:string;
  role:string;
  action:ReactElement;
}

const columns:Column<DataType>[]=[
  {
    Header:"Avatar",
    accessor:"avatar"
  },
  {
    Header:"Name",
    accessor:"name"
  },
  {
    Header:"Email",
    accessor:"email"
  },
  {
    Header:"Role",
    accessor:"role"
  },
  {
    Header:"Gender",
    accessor:"gender"
  },
  {
    Header:"Action",
    accessor:"action"
  }
];

const img="https://images.unsplash.com/photo-1706716109264-ac80916f55ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D";
const img2="https://images.unsplash.com/photo-1706496366816-f589fadff1cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D";

const arr: DataType[]=[
  {
    avatar:(
      <img style={{borderRadius:"50%",}}
      src={img} alt="Shoes"/>
    ),
    name:"Upal-Mitra",
    email:"upal123@gmai.com",
    gender:"Male",
    role:"User",
    action:(
      <button><FaTrash/></button>
    ),
  },
  {
    avatar:(
      <img style={{borderRadius:"50%",}}
      src={img2} alt="Shoes"/>
    ),
    name:"Suman-Maji",
    email:"suman123@gmai.com",
    gender:"Male",
    role:"User",
    action:(
      <button><FaTrash/></button>
    ),
  },
];

const Customer = () => {

  const [data]=useState<DataType[]>(arr)

  const Table=useCallback(
    Tablehoc<DataType>(columns,data,"product-dashboard","Customer",true),[]
  );


  return (
    <div className="adminContainer">
    <Adminsidebar/>
    <main>{Table()}</main>
    </div>
  )
}

export default Customer
