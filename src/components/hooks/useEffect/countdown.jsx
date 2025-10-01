import { useEffect, useState } from "react"

export const CountDown = () => {
    const [count, setCount] = useState(0);
    useEffect(
        () => { 
            const intervalId= setInterval(() => {
            setCount(count+1);
        }, 1000);
        return()=>clearInterval(intervalId);
     },
        [count]);
    return (
        <div>
            <h1>Count:<span>{count}</span></h1>
        </div>
    )
}