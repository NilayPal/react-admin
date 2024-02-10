export type OrderItemType={
 name:string;
 photo:string;
 price:number;
 quantity:number;
 _id:string;
};
export type OrderType={
    name:string;
    address:string;
    city:string;
    pincode:number;
    country:string;
    state:string;
    
    status:"Processing" | "Shiped" | "Deliver";
    subtotal:number;
    discount:number;
    shippingCharges:number;
    tax:number;
    total:number;
    orderItems:OrderItemType[];
    _id:string;
   };