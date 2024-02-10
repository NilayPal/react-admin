import { Column } from "react-table";
import Tablehoc from "./tablehoc";


const columns : Column<Datatype>[]=[
    {
        Header:"Id",
        accessor:"id",
    },
    {
        Header:"Qunatity",
        accessor:"quantity",
    },
    {
        Header:"Discount",
        accessor:"discount",
    },
    {
        Header:"Amount",
        accessor:"amount",
    },
    {
        Header:"Status",
        accessor:"status",
    },

];
interface Datatype{
    id:String;
    quantity:number;
    discount:number;
    amount:number;
    status:string;
}

const Dashboardtable = ({data=[]}:{data:Datatype[]}) => {


  return Tablehoc<Datatype>(columns,data,"transactionbox",
  "Top transaction")();

};

export default Dashboardtable
