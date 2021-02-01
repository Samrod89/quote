import './App.css';
import Data from './quotes.json';
import React, {useState} from "react";
import QuoteBox from './QuoteBox'
import Color from './Color.json'

const Change =(value)=> {
  value = Math.floor(Math.random()*(0-102)+102);
  return value;
}
const ChangeColor =(value)=> {
  value = Math.floor(Math.random()*(0-17)+17);
  return value;
}

 
  function App() {
    const [isValue, setisValue] = useState (0)
    const [isColor, setisColor] = useState (0);

    const HandleChange = () => {
     setisValue (Change(isValue));
     setisColor (ChangeColor(isColor));
    }

  return (
    <div>
      
      <QuoteBox quote={Data.quotes[isValue].quote} author={Data.quotes[isValue].author} color={Color.colors[isColor].color} func={HandleChange}/>
    </div>
    
  );
}

export default App;

