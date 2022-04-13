import React from 'react';
import Button from './components/Button/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      DEMAT BREIZH<br/>
      <Button bgColor="SandyBrown" text = "Hello" onButtonClicked={(unParam)=>{
        console.log(unParam);
      }}
         />
      <Button text="de lu"/><Button text="Benj Button"/><Button/><br/>
    </div>
  );
}

export default App;
