import ItemList from "./ItemList";
const ResCategory=({data,showItem,setshowIndex})=>{
    //return jsx
    const handleClick=()=>{
      setshowIndex();
    }
    return(
            <div className="incategory">
                <div className="forflex" onClick={handleClick}>
                  <h5>{data?.title} ({data?.itemCards?.length})</h5>
                  <h5 className="arrow">▼</h5>
                </div>
                {  showItem && <ItemList items={data?.itemCards}/>}
            </div>
    );     
};
export default ResCategory;