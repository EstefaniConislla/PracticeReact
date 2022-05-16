// import React, { useState } from "react";
import React, { useRef } from "react";

// const FormControlado = () => {
//     const [ value, setValue ] = useState("");
//     const onChange = (event) =>{
//         setValue(event.currentTarget.value);
//     }

//     const ABC = (event) =>{
//         event.preventDefault();
//         console.log(value);
//     }

//     return(
//         <form onSubmit={ABC}>
//             <h1>Mi input</h1>
//             <input value={value} onChange={onChange}/>
//             <button type="submit">Continuar</button>
//         </form>
//     )
// }

const FormControlado = () => {
    const inputRef = useRef();


    const onClickButton = () => {
        console.log(inputRef.current.value);
    }


    return(
        <div>
            <h1>Mi input</h1>
            <input ref={inputRef}/>
            <button onClick={onClickButton}>Continuar</button>
        </div>
    )
}
export default FormControlado;