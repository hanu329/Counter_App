
import { useState } from "react";

export default function Counter(){
    let [counter,setCounter]=useState(0);
    return (
        
            <> <p>Counter: {counter}</p>
            <button onClick={()=>{
              setCounter(counter+1)
            }
               
            }>
               increament
            </button>
            <button onClick={()=>{
              setCounter(counter-1)
            }
               
            }>
               decreament
            </button>
            <button onClick={()=>{
              setCounter(counter*2)
            }
               
            }>
               double
            </button>
            </>
      
    )
}