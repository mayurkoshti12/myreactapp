// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => { 
    setAlert({type:type, msg : message}); 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  
  }
  

  const toggleMode = () => {

    if(mode === 'light'){ 
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('success', 'Dark mode has been enabled');
    }else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('success', 'Light mode has been enabled');
    }
  }





  return (
            <>
            
            <Navbar title='Text Utilities' menu_home='Home' menu_aboutus='About Us' mode={mode} toggleMode={toggleMode}/>

            <Alert alert={alert}/>
            
            <Textform showAlert={showAlert} heading='Enter Text'/>

            </>
  );
}


export default App;
