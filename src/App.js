// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

//let name = "Mk";

function App() {


  const [mode, setMode] = useState('light');

  const toggleMode = () => {

    if(mode === 'light'){ 
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }





  return (
            <>
            
            <Navbar title='Text Utilities' menu_home='Home' menu_aboutus='About Us' mode={mode} toggleMode={toggleMode}/>
            
            <Textform heading='Enter Text'/>

            </>
  );
}

export default App;
