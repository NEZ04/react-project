import { useState } from "react";
import "./index.css";
const CounterChallenge = () => {
    const [count, setCount]= useState(0);
    const[step, setStep]=useState(0);

    const increment = ()=>{
        setCount(count + step);
    };
    const decrement = ()=>{
        setCount(count-step);
    };
    const reset = ()=>{
        setCount(0);
    }
    return(
        <div className="container state-container">
            <h1>:Use State Challenge</h1>
            <div>
            <p1>Count:<span>{count}</span></p1>
            <label>
                Step:
                <input 
                type="number"
                //value={step}
                onChange={(e)=>setStep(Number(e.target.value))}
                />
            </label>
        </div>
        <div className="grid-three-cols">
            <button onClick={increment} disabled={count >=100}>Increment</button>
            <button onClick={decrement} disabled={count <=0}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
        </div>
    );
};
export default CounterChallenge;

