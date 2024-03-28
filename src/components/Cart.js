import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const removeItem=()=>{
       dispatch(clearCart());
    }
    return(
        <div className="cart">
            <div className="maincart">
            <h1 className="headcart">Cart🛒</h1>
            <button onClick={removeItem}>Clear All🗑️</button>
            </div>
            <div>
            <CartList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;