import { ReactElement } from "react";
import Adminsidebar from "../Components/adminsidebar"
import Tablehoc from "../Components/tablehoc"
import { useState , useCallback} from "react"
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType{
  photo:ReactElement;
  name:string;
  price:number;
  stock:number;
  action:ReactElement;
}
const columns:Column<DataType>[]=[
  {
    Header:"Photo",
    accessor:"photo"
  },
  {
    Header:"Name",
    accessor:"name"
  },
  {
    Header:"Price",
    accessor:"price"
  },
  {
    Header:"Stock",
    accessor:"stock"
  },
  {
    Header:"Action",
    accessor:"action"
  }
];

const img="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVtYSUyMHNob2VzfGVufDB8fDB8fHww";
const img2="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFja2Jvb2t8ZW58MHx8MHx8fDA%3D";

const arr:DataType[]=[
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma shoes jordon air",
    price:900,
    stock:3,
    action:<Link to ="admin/product/nilay1">Manage</Link>
  },
  {
    photo:<img src={img2} alt="Mackbook"/>,
    name:"Mackbok",
    price:70000,
    stock:3,
    action:<Link to ="admin/product/nilay1">Manage</Link>
  },
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma shoes jordon air",
    price:900,
    stock:3,
    action:<Link to ="admin/product/nilay1">Manage</Link>
  },
  {
    photo:<img src={img2} alt="Mackbook"/>,
    name:"Mackbok",
    price:70000,
    stock:3,
    action:<Link to ="admin/product/nilay1">Manage</Link>
  },
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma shoes jordon air",
    price:900,
    stock:3,
    action:<Link to ="admin/product/nilay1">Manage</Link>
  },
  {
    photo:<img src={img2} alt="Mackbook"/>,
    name:"Mackbok",
    price:70000,
    stock:3,
    action:<Link to ="admin/product/nilay1">Manage</Link>
  },
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma shoes jordon air",
    price:900,
    stock:3,
    action:<Link to ="admin/product/nilay1">Manage</Link>
  },
  {
    photo:<img src={img2} alt="Mackbook"/>,
    name:"Mackbok",
    price:70000,
    stock:3,
    action:<Link to ="admin/product/nilay1">Manage</Link>
  },
];




const Products = () => {

  const [data]=useState<DataType[]>(arr);

  const Table=useCallback(
    Tablehoc<DataType>(columns,data,"product-dashboard","Products",true),[]
  );


  return (
    <div className="adminContainer">
     <Adminsidebar/>
     <main>{Table()}</main>
     <Link to="admin/product/new" className="product-btn">
     <FaPlus/>
     </Link>
    </div>
  )
}

export default Products
