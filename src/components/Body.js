import ResCard,{withPromotedList} from "./ResCard";
// import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [ResList, setResList] = useState([]);
  const [Searchname,setSearchname]=useState("");
  const [Filterlist,setFilterlist]=useState([]);

  useEffect(() => {   
    fetchData();
  },[]);

    const fetchData = async () => {
      try{
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4065&lng=78.4772&page_type=DESKTOP_WEB_LISTING');

      const json = await response.json();
      
      setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      catch{  }
};
    const status=useOnlineStatus();
    if(status===false)
    return ( <h1>issue</h1> );
    
    const PromotedComp=withPromotedList(ResCard);

    return !ResList ||ResList.length === 0 ? (
    <Shimmer />
    ) : (
      <div className="body">

        <div className="filter-btn">
               
              <button className="top" onClick={()=>{                    
                    const filterList=ResList.filter(
                        (res)=>parseFloat(res.info.avgRating)>4                
                     );
                     setFilterlist(filterList);      
                }
                     }>
                     Top Rated Restaurant⭐ 
              </button>

              <div className="search">
               <input className="search-box" type="text" placeholder="searh your restaurant" value={Searchname} onChange={(e)=>{
                setSearchname(e.target.value);
               }}
               />
               <button className="find" onClick={()=>{
                const filter=ResList.filter(
                  (res)=>(
                    res.info.name.toLowerCase().includes(Searchname.toLowerCase()
                  )
                  )
                );
                setFilterlist(filter);
               }}>
                 <i className="fa-solid fa-magnifying-glass">
                </i>
                </button>
               
              </div>

        </div> 

        <div className="cardContainer">

          {Filterlist.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id} className="reslink">
              {restaurant?.info?.promoted?(<PromotedComp resObj={restaurant}/>):(<ResCard  resObj={restaurant} />) }            
            </Link>
          ))}
       
        </div>
    </div>
  );
};

export default Body;