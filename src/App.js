import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode, setMode]=useState('light');
  //whether dark mode enabled or not

  const[alert, setAlert]=useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
  }

  const toggleMode= () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#15202B';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Texutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About mode={mode}/> */}
    </div>
    </>
  );
}

export default App;
