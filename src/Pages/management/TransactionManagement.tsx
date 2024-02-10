import { useState } from "react"
import Adminsidebar from "../../Components/adminsidebar"
import { OrderType,OrderItemType } from "../../types";
import { Link } from "react-router-dom";


const img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?   w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww";

const orderItems:OrderItemType[]=[
  {
    name:"Nike shoers",
    photo:img,
    _id:"nikeshoes",
    quantity:4,
    price:2000,
  },
];


const TransactionManagement = () => {

const [order,setOrder]=useState<OrderType>({
  name:"Upal-Mita",
  address:"Baba choron Road",
  city:"Shriampur",
  state:"West-Bengal",
  country:"India",
  pincode:712413,
  status:"Processing",
  subtotal:4000,
  discount:1200,
  shippingCharges:0,
  tax:200,
  total:4000+ 200 + 0 - 1200,
  orderItems,
  _id:"nikeshoes",

});

const {name,address,city,state,country,pincode,status,subtotal,discount,shippingCharges,tax,total}=order;

const updateHander=()=>{
  setOrder((prev)=>({
    ...prev,
    status:prev.status==="Processing"?"Shiped":"Deliver",
  }));
};

  return (
    <div className="adminContainer">
    <Adminsidebar/>
    <main className="product-management">
        <section>
          <h2>Order Items</h2>
          {order.orderItems.map((i)=>(
            <ProductCart
            name={i.name}
            photo={i.photo}
            _id={i._id}
            quantity={i.quantity}
            price={i.price}
            />
         ))}
        </section>
            <article className="shipping-info">
              <h1>Order Info</h1>
              <h5>User Info</h5>
              <p>Name: {name}</p>
              <p>Addres: {`${address},${city},${state},${country},${pincode}`}</p>

              <h5>Amount Info</h5>
              <p>Subtotal: {subtotal}</p>
              <p>Shipping Charges: {shippingCharges}</p>
              <p>Tax: {tax}</p>
              <p>Discount: {discount}</p>
              <p>Total: {total}</p>
              <h5>Status Info</h5>
              <p>
                Status:{" "}
                <span className={status==="Deliver"? "purple":status==="Shiped"?"green":"red"}>{status}</span>
              </p>
              <button onClick={updateHander}>Process Order</button>

            </article>

    </main>
  </div>
  )
}
const ProductCart=({name,photo,price,quantity,_id}:OrderItemType)=>(
     <div className="transaction-product-card">
        <img src={photo} alt={name}/>
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>
        ${price} X {quantity}=${price * quantity}
        </span>

     </div>
);

export default TransactionManagement
