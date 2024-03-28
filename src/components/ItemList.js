import {useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList=(props)=>{
  const {items}=props; 
  const dispatch=useDispatch();
  const handleadd=(item)=>{
    dispatch(addItem(item));
  }
  return(
         
         <div className="men" >
                
                {items.map((item)=>(
                  <div className="item-list" key={item.card.info.id}>
                      <li >{item.card.info.name}<br/>
                      
                      Rs.{item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)}<br />
                      
                      <p className="desc">{item.card.info.description}</p>
                      </li>
                    <div>

                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`} alt="" />

                    <button
                     onClick={()=>handleadd(item)}>Add</button>
                    </div>
                  </div>  
                     
                   ))}     
                </div>            

   )
}
export default ItemList;