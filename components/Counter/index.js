import React, {useEffect, useState} from "react";

const CounterFunction = () => {
    const [count, setCount] = useState(0);
    const [nombre, setNombre] = useState("Gabriela");

     const sumOne = () =>{
         setCount(count + 1);
     }
    
     useEffect(() => {
         return() =>{
            console.log("Termine");
         }
     },[]);

    return (
        <div>
            <h1>{nombre}</h1>
            <p>{count}</p>
            <button onClick={() => sumOne()}>Sumar 1</button>
        </div>
    )
}

export default CounterFunction;