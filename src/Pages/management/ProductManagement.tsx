import { ChangeEvent, FormEvent, useState } from "react";
import Adminsidebar from "../../Components/adminsidebar";

const img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Nike Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

 
    const [nameUpdate, setNameUpdate] = useState<string>(name);
    const [priceUpdate, setPriceUpdate] = useState<number>(price);
    const [stockUpdate, setStockUpdate] = useState<number>(stock);
    const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const ChangeImageHandler =(e:ChangeEvent<HTMLInputElement>)=>{

    const file: File | undefined=e.target.files?.[0];
    const reader:FileReader=new FileReader();

    if(file){
      reader.readAsDataURL(file);
      reader.onload=()=>{
        if(typeof reader.result ==="string") setPhotoUpdate(reader.result);
      };
    }

  };

    const submitHandler =(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setName(nameUpdate)
      setPrice(priceUpdate)
      setStock(stockUpdate)
      setPhoto(photoUpdate)
    }



  return (
    <div className="adminContainer">
      <Adminsidebar />
      <main className="product-management">

        <section>
          <strong>ID-Upal-Mitra</strong>
          <img src={photo} alt="product"/>
          <p>{name}</p>
          {
            stock> 0?(
              <span className="green">{stock}Available</span>
            ):(
            <span className="red"> Not Available</span>
         ) }
            <h3>${price}</h3>




        </section>

        <article>
          <form onSubmit={submitHandler}>
            <h2>MANAGE</h2>
            <div>
              <label>Name</label>
              <input
               required
               type="text" 
               placeholder="Name"
               value={nameUpdate}
               onChange={(e)=>setNameUpdate(e.target.value)}
               />
            </div>

            <div>
              <label>Price</label>
              <input
               required
               type="number" 
               placeholder="Price"
               value={priceUpdate}
               onChange={(e)=>setPriceUpdate(Number(e.target.value))}
               />
            </div>

            <div>
              <label>Stock</label>
              <input
               required
               type="number" 
               placeholder="Stock"
               value={stockUpdate}
               onChange={(e)=>setStockUpdate(Number(e.target.value))}
               />
            </div>

            <div>
              <label>Photo</label>
              <input
               required
               type="file" 
               onChange={ChangeImageHandler}
               />
            </div>

            {
              photoUpdate && <img src={photoUpdate} alt="New Image"/>
            }
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};




export default ProductManagement;
