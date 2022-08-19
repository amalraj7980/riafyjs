import React, {useState,useEffect,memo} from "react";

const Counter=()=>{
const [counter,setCount]=useState(0);
console.log(counter,"child")
    return(
        <div>
            <p>{counter}</p>
            <button onClick={()=>{
              setCount(counter+1)
            }}>Increement</button>
        </div>
    )


}
export default memo(Counter);