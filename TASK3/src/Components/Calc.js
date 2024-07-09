import React ,{useState} from 'react'

const Calc = () => {
    
    const [text,setText] = useState("");

    const add=(input)=>{
        setText(text+input);
        }

    const clear=()=>{
        setText("");
    }

    const calculate=()=>{
        setText(eval(text));
    }

    return (
    <div className="container">
      <input className="header" type="text" value={text}/>
      <div className="keys">
        <button className="operator" onClick={()=>{add('+')}}>+</button>
        <button onClick={()=>{add('7')}}>7</button>
        <button onClick={()=>{add('8')}}>8</button>
        <button onClick={()=>{add('9')}}>9</button>
        <button className="operator" onClick={()=>{add('-')}}>-</button>
        <button onClick={()=>{add('4')}}>4</button>
        <button onClick={()=>{add('5')}}>5</button>
        <button onClick={()=>{add('6')}}>6</button>
        <button className="operator" onClick={()=>{add('*')}}>*</button>
        <button onClick={()=>{add('1')}}>1</button>
        <button onClick={()=>{add('2')}}>2</button>
        <button onClick={()=>{add('3')}}>3</button>
        <button className="operator" onClick={()=>{add('/')}}>/</button>
        <button onClick={()=>{add('0')}}>0</button>
        <button onClick={()=>{add('.')}}>.</button>
        <button onClick={calculate}>=</button>
        <button className="operator" onClick={clear}>C</button>
        
      </div>
    </div>
  )
}

export default Calc
