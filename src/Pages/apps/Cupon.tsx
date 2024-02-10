import { FormEvent, useEffect, useState } from "react"
import Adminsidebar from "../../Components/adminsidebar"

const allLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers="1234567890";
const allSymbol="!@#$%^&*()_+";

const Cupon = () => {

const [size,setSize]=useState<number>(8);
const [prefix,setPrefix]=useState<string>("");
const [includeNumbers,setIncludeNumbers]=useState<boolean>(false);
const [includeCharacters,setIncludeCharacters]=useState<boolean>(false);
const [includeSymbols,setIncludeSymbols]=useState<boolean>(false);
const [isCopied,setIsCopied]=useState<boolean>(false);

const[cupon,setCupon]=useState<string>("");


 const copyText=async (cupon:string)=>{
await window.navigator.clipboard.writeText(cupon);
setIsCopied(true);
 };

 const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  if(!includeNumbers && !includeCharacters && !includeSymbols)
  return alert("Please Select One At Least");

  let result:string=prefix||"";
   const loopLength: number=size-result.length;

   for(let i=0;i<loopLength;i++){
    let entireString:string="";
    if(includeCharacters) entireString+=allLetters;
    if(includeNumbers) entireString+=allNumbers;
    if(includeSymbols) entireString+=allSymbol;

    const randomNum:number=Math.floor(Math.random()*entireString.length);
    result+=entireString.charAt(randomNum);
  }
  setCupon(result);
 };

 useEffect(()=>{
  setIsCopied(false);
 },[cupon]);

  return (
    <div className="adminContainer">
    <Adminsidebar />
      <main className="dashboard-app-container">
        <h1>Cupon</h1>
        <section>
        <form className="cupon-form" onSubmit={submitHandler}>

         <input type="text" placeholder="Text to include"
         value={prefix}
         onChange={(e)=>setPrefix(e.target.value)}
         maxLength={size}
         />
        
        <input type="number" placeholder="Cupon Length"
         value={size}
         onChange={(e)=>setSize(Number(e.target.value))}
        min={8}
        max={25}
         />
         
         <fieldset>
            <legend>Include</legend>

         <input type="checkbox" 
         checked={includeNumbers}
         onChange={()=>setIncludeNumbers((prev)=>!prev)}
         />
        <span>Numbers</span>
        
        <input type="checkbox" 
         checked={includeCharacters}
         onChange={()=>setIncludeCharacters((prev)=>!prev)}
         />
        <span>Characters</span>

        <input type="checkbox" 
         checked={includeSymbols}
         onChange={()=>setIncludeSymbols((prev)=>!prev)}
         />
        <span>Symbols</span>


         </fieldset>
        <button type="submit">Generate</button>
        </form>

        {cupon && <code>{cupon}
            <span onClick={()=>copyText(cupon)}>{isCopied?"Copied":"Coppy"}</span>            
            
            </code>}
     


        </section>
      </main>
    </div>
  )
}

export default Cupon
