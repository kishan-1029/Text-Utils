
// import { useState, useSyncExternalStore } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
  setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);


  }
  const togglemode=()=>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.background='#042743';
    showAlert("Dark mode has been enabled","success");
    document.title="TextUtils-Dark Mode";
    // setInterval(()=>{
    // document.title="TextUtils is Amazing Mode";

    // },2000);
    // setInterval(()=>{
    //   document.title="Install TextUtils Now";
  
    //   },1500);
  }
  else{
    setMode('light');
    document.body.style.background='white';
    showAlert("Dark mode has been enabled","success");
    document.title="TextUtils-Light Mode";


  }
}
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="cpntainer my-3">
  {/* <Routes> */}
      {/* <Route exact path='/about' element={ <About/>}/>        */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
  {/* </Routes> */}
</div>
{/* </Router> */}
    </>
  );

}

export default App;
