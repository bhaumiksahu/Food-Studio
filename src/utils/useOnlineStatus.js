import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [status,setstatus]=useState(true);
    useEffect( ()=>{
        window.addEventListener("online",()=>{
          setstatus(true);
        })
        window.addEventListener("online",()=>{
            setstatus(false);
        })
    },[]);
    return status;
}
export default useOnlineStatus;