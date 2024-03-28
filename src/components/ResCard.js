import { CDN } from "../utils/constant";
const ResCard = (props) => {
    const { resObj } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resObj ?.info;
    return ( 
        <div className = "item">
          <img className = "resCard"
            src = { CDN + cloudinaryImageId }
            alt = "" />
            <h3> { name } </h3> 
            { /* < h4 > { resObj.data.cuisines.join(",") } < /h4> */} 
            <h4 className="cuisine-list "> { cuisines.join(",") } </h4>   
            
            <h4> { costForTwo } <span className="rating">  { avgRating }⭐ </span>  </h4>   
    </div>

);
};

export const withPromotedList=(ResCard)=>{
  //returning function component  
  return(props)=>{
      return(
        <div>
          <label className="label">👑</label>
          <ResCard {...props} />
        </div>
      )
    }
}
export default ResCard;