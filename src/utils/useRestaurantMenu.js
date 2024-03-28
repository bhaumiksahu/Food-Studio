import { useEffect, useState } from "react";
import {Menulist} from "./constant";
const useRestaurantMenu=(resId)=>{
    const[ResInfo,setResInfo]=useState(null);
    useEffect(()=>{
       fetchdata();
    },[]);
    async function fetchdata(){
        
            const data= await fetch(Menulist+resId);
            const json=await data.json();
            console.log(json?.data);
           setResInfo(json?.data);
          
    }
 
    return ResInfo;
   
}
export default useRestaurantMenu;