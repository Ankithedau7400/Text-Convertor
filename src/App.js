
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'
import{
  BrowserRouter as Router,
  Switch,Route
}from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasss=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode =(cls)=>{
    removeBodyClasss();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled ","success");
   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled ","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" mode={mode} abouttext="About" toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
         
          <Route exact path="/">
            <Textform showAlert = {showAlert} heading = "Try TextUtils - Word counter , Character counter , Lowercase to Uppercase , Uppercase to Lowercase, Reverse String" mode={mode}/>
          </Route>

          <Route  path="/about">
            <About mode={mode}/>
          </Route>
        </Switch>
    
    {/* <About/> */}
    </div>
    </Router>
    </>

  );
}

export default App;
