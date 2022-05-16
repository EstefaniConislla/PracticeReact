// import React from "react";
// import ListOption from './components/ListOption';
// import { ListOption } from './components';
// import { Timer } from './components';
// import { CounterFunction } from './components';
import { FormControlado } from './components';

// function App() {
//   return (
//     <h1>Hi</h1>
//   );
// }
// export default App;
// const NuevoApp = React.createElement('p', null, 'Hola Mundo');
// export default NuevoApp;

// const customStyle = (backColor = '#9090ff') => ({
//   backgroundColor: backColor,
//   margin: '20px 30px'
// })

// function App() {
//   return (
//     <ul>
//       {/* <ListOption style={customStyle('#750757')} tiempo=" frio">Lunes</ListOption> */}
//       <ListOption className="blue" tiempo=" frio">Lunes</ListOption>
//       <ListOption className="" >Martes</ListOption>
//       <ListOption className="" >Miercoles</ListOption>
//     </ul>
//   );
// }

// const List = () =>{
//   return (
//     <ul>
//       <ListOption>Lunes</ListOption>
//       <ListOption>Martes</ListOption>
//       <ListOption>Miercoles</ListOption>
//     </ul>
//  )
// };

// const ErrorMessage = () =>{
//   return (
//     <p>No hay lista</p>
//   )
// }

// function App() {
//   const isList = false;
//   if (isList === false) {
//     return <ErrorMessage/>
//   }
//   return(
//     <List/>
//   );
// }

// function App() {
//   const isList = true;
//   if (!isList) {
//     return <ErrorMessage/>
//   }
//   return(
//     <List/>
//   );
// }

// function App() {
//   const isList = true;
//   return(
    //Aca me pinta ambos
    // <>
    //   <List/>
    //   <ErrorMessage/>
    // </>
    //Agregando condicional SEGUNDA OPCION
    // <>
    //   {
    //      isList ? <List/> : <ErrorMessage/>
    //   }
    // </>
    //Agregando condicional TERCERA OPCION
//     <>
//       { isList && <List/>}
//     </>
//   );
// }

// function App() {
//   const days = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
//   return(
//     <ul>
//       {days.map(day=>
//         <ListOption>{day}</ListOption>
//         )}
//     </ul>
//   );
// }

//React me pide que agregue ID

// function App() {
//   const days = [
//     {id:1, nombre:"Lunes"},
//     {id:2, nombre:"Martes"},
//     {id:3, nombre:"Miercoles"},
//     {id:4, nombre:"Jueves"},
//     {id:5, nombre:"Viernes"},
//   ];
//   return(
//     <ul>
//       {days.map(day=>
//         <ListOption key={day.id}>{day.nombre}</ListOption>
//         )}
//     </ul>
//   );
// }

//Otro componente

// function App() {
//   return(
//     <Timer/>
//   );
// }

function App() {
  return(
    <FormControlado/>
  );
}
export default App;