import { useState } from 'react';
import './App.css';

function Key({label, clickHandler, className}){
  return(
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
    
  );
}

function Display({display}){
  return(
    <div className="Display">
      {display}
    </div>
  );
}


function App() {
  const[disp, setdisp] = useState(0);
  const[num1, setnum1] = useState(null);
  const[num2, setnum2] = useState(null);
  const[op, setop] = useState(null);

  const genenricclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
  }

  const numclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    if (op === null) {
      if (num1 === null) {
        setnum1(value);
        setdisp(value);
      } else {
        const newNum1 = num1 + value;
        setnum1(newNum1);
        setdisp(newNum1);
      }
    } else {
      if (num2 === null) {
        setnum2(value);
        setdisp(value);
      } else {
        const newNum2 = num2 + value;
        setnum2(newNum2);
        setdisp(newNum2);
      }
    }
  }

  const opclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    setop(value);
    setdisp(value);
    console.log(op);
  }

  const eqclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(num1 + '|' + op + '|' +num2);

    let result = null;
    if(op === '+'){
      result = "I MISS YOU <3";
    }
    else if(op === '-'){
      result = "I MISS YOU <3";
    }
    else if(op === '*'){
      result = "I MISS YOU <3";
    }
    else if(op === '/'){
      result = "I MISS YOU <3";
    }
    else{
      result ="Error";
    }
    setdisp(result);
  }

  const clearclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    setdisp(0);
    setop(null);
    setnum1(null);
    setnum2(null);
  }

  const numclearclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
  }
  const nameclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    setdisp("HINDI MO BA AKO MISS?");
  }

  return (
    <div className="Calculator">
      <h1>JOHN LEO MEDINA IT-3A</h1>
      <div className="Calcontainer">
        <div className="Displaycon">
        <Display display ={disp}/>
        </div>
        <div className="Buttons">
          <Key label={7} clickHandler={numclickHandler}/> 
          <Key label={8} clickHandler={numclickHandler}/>
          <Key label={9} clickHandler={numclickHandler}/>
          <Key label={'/'} clickHandler={opclickHandler}/>
          <Key label={4} clickHandler={numclickHandler}/>
          <Key label={5} clickHandler={numclickHandler}/>
          <Key label={6} clickHandler={numclickHandler}/>
          <Key label={'*'} clickHandler={opclickHandler}/>
          <Key label={1} clickHandler={numclickHandler}/>
          <Key label={2} clickHandler={numclickHandler}/>
          <Key label={3} clickHandler={numclickHandler}/>
          <Key label={'-'} clickHandler={opclickHandler}/>
          <Key label={'.'} clickHandler={numclickHandler}/>
          <Key label={0} clickHandler={numclickHandler}/>
          <Key label={'='} clickHandler={eqclickHandler}/>
          <Key label={'+'} clickHandler={opclickHandler}/>
          <Key className="clear-Key" label={'Clear'} clickHandler={clearclickHandler}/>
        </div>
      </div>
      <Key className="MEDINA" label ={'MEDINA'} clickHandler={nameclickHandler}/>
    </div>
  );
}

export default App;