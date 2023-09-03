import React from 'react'
import { useState } from 'react'




export default function Textform(props) {


  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => { 
    
    setText(text.toUpperCase()); 
    props.showAlert('success', 'Converted to Uppercase!');
  
  }

  const handleLoClick = () => { setText(text.toLowerCase()); props.showAlert('success', 'Converted to Lowercase!');}

  const handleClearClick = () => { setText('');  }

  const handleCopyClick = () => { navigator.clipboard.writeText(text); props.showAlert('success', 'Copied all text!'); }

  const handleExtraSpaceClick = () => { let nt = text.split(/[ ]+/); setText(nt.join(" ")); }


  const handleOnChange = (event) => { setText(event.target.value); }

  

  //console.log(useState('Enter text here'));

  return (
          <>
            
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={ text } onChange={ handleOnChange } id="myBox" rows="8"></textarea>                    
                </div>
                <button className="btn btn-primary mx-1" onClick={ handleUpClick }>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={ handleLoClick }>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={ handleClearClick }>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={ handleCopyClick }>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={ handleExtraSpaceClick }>Remove Extra Spaces</button>
            </div>
            
            <div className="container my-3">
              <h5>Your Text Summerys</h5>
              <p> Total { text.trim().split(" ").length } words and { text.length } characters</p>              
            </div>
            
            <div className="container my-3">
              <h5>Preview</h5>
              <p>{ text.length > 0? text:"Enter something please!" }</p>              
            </div>

          </>
  )
}
