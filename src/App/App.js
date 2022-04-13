import React from 'react';
import Button from './components/Button/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      DEMAT BREIZH<br />
      <Button bgColor="SandyBrown" onButtonClicked={(unParam) => {
        console.log(unParam);
      }}>
        <img src="/img/OK.png" />
        <div style={{ display: "inline" }}>Text</div>
        </Button>
      <Button>de lu</Button>
      <Button><img src="/img/OK.png" /></Button>
      <Button /><br />
    </div>
  );
}

export default App;
