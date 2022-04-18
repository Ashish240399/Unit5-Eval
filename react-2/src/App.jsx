import logo from './logo.svg';
import './App.css';
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(true);
  function statusHandler(){
    console.log(show)
    setShow(!show)
  }
  return (
    <div className="App">
      <button onClick={()=>{
        statusHandler()
      }} className="togglebtn">Toggle</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {show ? <div><ShowStudents/></div>:<div><AddStudent/></div>}
    </div>
  );
}

export default App;
