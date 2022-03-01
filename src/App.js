import React, {useState} from 'react';
import './styles.css';

function App() {

  const [result, setResult] = useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.innerText))
  }

  const clear=()=>{
    setResult("");
  }

  const del=(event)=>{
    setResult(result.concat(event.target.innerText).substring(0, result.length - 1));
  }

  const calc=()=>{
    setResult(eval(result).toString());
  }

  return (
    <React.Fragment>

    <div className="calculator-grid">
      <div className='output-display'>
        <div className='inp'>{result}</div>
      </div>

      <div className='buttons'>
        <button onClick={clear}>CE</button>
        <button onClick={del}>DEL</button>
        <button onClick={clickHandler}>/</button>
        <button onClick={clickHandler}>1</button>
        <button onClick={clickHandler}>2</button>
        <button onClick={clickHandler}>3</button>
        <button onClick={clickHandler}>4</button>
        <button onClick={clickHandler}>5</button>
        <button onClick={clickHandler}>6</button>
        <button onClick={clickHandler}>7</button>
        <button onClick={clickHandler}>8</button>
        <button onClick={clickHandler}>9</button>
        <button onClick={clickHandler}>*</button>
        <button onClick={clickHandler}>0</button>
        <button onClick={clickHandler}>-</button>
        <button onClick={clickHandler}>.</button>
        <button onClick={clickHandler}>+</button>
        <button onClick={calc}>=</button>
      </div>
      
    </div>
    </React.Fragment>
  );
}

export default App;
