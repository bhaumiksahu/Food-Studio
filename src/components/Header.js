import { useState } from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

import img from "../../images/—Pngtree—food logo_8239825.png";
const Header = () => {
    // let btn="login";
    const [Btn,setBtn]=useState("Login");
    const cartItem=useSelector((store)=>store.cart.items);
    return ( 
    <div className = "header"  >
        
        <div className = "logoContainer">     
            <img src ={img} alt = "" />
        </div> 
        <div className = "navItem" >
        <ul >   
            <li> <Link className="link" to="/" >Home</Link> </li>  
            <li>  <Link className="link" to="/about">About us</Link> </li> 
            <li> <Link className="link" to="/contact">Contact</Link> </li>
            <li><Link className="link" to="/cart">Cart({cartItem.length})</Link></li> 
            <button className="login" 
            onClick={()=>{
               {Btn==="login"?(setBtn("logout")):(setBtn("login"));}
               console.log(Btn);
            }}>
                {Btn}</button>
        </ul > 
        </div> 
    </div >
    );   
};
export default Header;