import { useEffect, useState } from "react"

const useRestaurantList=()=>{
    
    const[reslist,setreslist]=useState([]);

    useEffect(()=>{
     fetchdata();
    },[])

    async function fetchdata(){

       try{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&page_type=DESKTOP_WEB_LISTING');

        const json=await data.json();

        setreslist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       } 
       catch{}
    }
    return reslist;
}
export default useRestaurantList;