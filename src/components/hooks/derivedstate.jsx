import { useState } from "react"
// const users=[
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Angles", age: 45 },
// ];

export const DerivedState = () =>{
    const[users, setUsers]=useState(
        [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
]
    )
    // deprived state of usercount
    const userNum=users.length;
    // deprived state of user average age
    const averageAge=users.reduce((accum,currElem)=>accum+currElem.age,0)/userNum;

        // const[count,setCount]=useState(0);
        // const handleCountPrint=()=>{
        //     setCount(()=>count+1);
        // }

    return(
        <>
        <div className="main-div">
            <h1>Users</h1>
            <ul>
                {
                    users.map((currElem,index) => {
                        return(
                            <li key={index}>
                                {currElem.name} - {currElem.age}
                                {/* {handleCountPrint()}; */}
                            </li>
                        )
                    })
                }
            </ul>
            <h2>UserNumber = {userNum}</h2>
            <h2>AverageAge={averageAge}</h2>
        </div>
        {/* <div className="main-div">
            <h1>{count}</h1>
        </div> */}
        </>
    )
}