import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from"react-router-dom";
import ResCategory from "./ResCategory";
import { useState } from "react";
const ResMenu=()=>{
    
    const[showIndex,setshowIndex]=useState();
    const {resId}=useParams();
    const ResInfo=useRestaurantMenu(resId);
    
    if(!ResInfo || !ResInfo.cards || !ResInfo.cards[5] ) return <Shimmer/>;
    
    const item=ResInfo?.cards[2]?.card?.card?.info;
 
    const categories=ResInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
       c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories);
    return (
        <div className="resinfo">
            <div className="info-top">
            <div >
                <h1 className="infohead">{item?.name}</h1>
                <p className="rescui">{item?.cuisines?.join(",")}</p>
                <p className="address">{item?.locality} 
                   , {item?.city}</p>
            </div>
            <div className="ratings">
               <p className="avg">⭐{item?.avgRating}</p>   
               <p className="krating">{item?.totalRatingsString}</p>
            </div>
            </div>
            
            <div className="info-bot">
                <p className="time">{item?.areaName}</p>
                <p className="time">Rs.{item?.costForTwo/100} for two </p>
            </div>
             
            <ul className="menulist">
                <h1>MENU</h1>
              
             <div  className="category">
               
                {categories.map( (category,index)=>(
                 <ResCategory 
                 key={index}  
                 data={category?.card?.card}
                 showItem= {index === showIndex ? true : false }
                 setshowIndex={()=>setshowIndex(index)}
                 />
                ))}
             </div>


                
            </ul>

           

        </div>
        
    )
};
export default ResMenu;