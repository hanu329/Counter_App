import { useState ,useRef, useEffect} from "react"


export const Timer = () =>{

    const [count, setCount] = useState(1)
    const ref = useRef(null)
   let id;
useEffect(() =>{
    timer_fun()
    return () =>{
        clearInterval(id)
        console.log("unmounted")
    }
},[])

const timer_fun = () =>{
    id= setInterval(() =>{
        setCount((c) =>{
            if(c>=10){
                clearInterval(id)
                return 10
                
            }
            return c+1
        })
    },1000)
}
 

    return (

        <div>Timer: {count}
        {
            console.log(count)
        }
        
  
    </div>
      )
}