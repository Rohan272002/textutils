
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  const [btnText,setBtntext]=useState("Enable Dark Mode");
  const[mode,setMode]=useState("light");
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#072c64'   
      document.body.style.color='white'   
      setBtntext('Enable Light Mode')
     showAlert("success","Dark mode has been enabled")
      
    } else 
    {
       setMode('light') 
       document.body.style.backgroundColor='white'
      document.body.style.color='black'   

      setBtntext('Enable Dark Mode')
     showAlert("success","Light mode has been enabled")


      


    }  
  }
 
  
  
  const [alert,setAlert]=useState(null);
  const showAlert=(type,messege)=>{
    setAlert({
      type:type,
      msg:messege
     
    });

    setTimeout(() => {
      setAlert(null);
    },1000);
  }
  return (
   <>
    <BrowserRouter>
   <Navbar title="textutils" Home="Home" About="About" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
   <Alert  alert={alert}/>
  <div className="container">
  <Routes>
  <Route exact path="/" element={<Textform heading="Enter the valid text"  mode={mode} showAlert={showAlert}/>}>
  </Route>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          
        </Routes>
    
    </div>  
    </BrowserRouter>
  
  </>

  );
 
}


export default App;
