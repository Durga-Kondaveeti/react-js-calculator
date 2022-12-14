import React, { useState } from 'react'
import './App.css';



const App = () => {
  const[value,setValue] = useState('calculator')
  const[value1,setValue1]= useState('')
  const inputValueshandler=(e)=>
  {
      setValue1(value1+e)
      setValue(value1+e)
  }
  const clearHandler=()=>
  {
    setValue('calculator');
    setValue1('');
    
  }
  return (
    <div className='MainDiv'>
      <center>
      <div className='display'>
      <h3>{value}</h3>
      </div>
      <div className='button'>
        <button className='creamcolor' onClick={()=>inputValueshandler('+')}><p>+</p></button>
        <button className='creamcolor' onClick={()=>inputValueshandler('-')}><p>-</p></button>
        <button className='creamcolor' onClick={()=>inputValueshandler("*")}><p>x</p></button>
        <button className='creamcolor' onClick={()=>inputValueshandler("/")}><p>/</p></button>
        <button className='whitecolor'  onClick={()=>inputValueshandler(1)}><p>1</p></button>
        <button className='whitecolor'  onClick={()=>inputValueshandler(2)}><p>2</p></button>
        <button className='whitecolor'  onClick={()=>inputValueshandler(3)}><p>3</p></button>
        <button className='whitecolor'  onClick={()=>inputValueshandler(4)}><p>4</p></button>
        <button className='whitecolor'  onClick={()=>inputValueshandler(5)}><p>5</p></button>
        <button className='whitecolor' onClick={()=>inputValueshandler(6)}><p>6</p></button>
        <button className='whitecolor' onClick={()=>inputValueshandler(7)}><p>7</p></button>
        <button className='whitecolor'  onClick={()=>inputValueshandler(8)}><p>8</p></button>
        <button className='whitecolor'  onClick={()=>inputValueshandler(9)}><p>9</p></button>
        <button className='whitecolor'  onClick={()=>inputValueshandler(0)}><p>0</p></button>
        <button className='whitecolor' onClick={()=>clearHandler()}><p>c</p></button>
        <button className='orangecolor' onClick={()=>setValue(eval(value1))}><p>=</p></button>
      </div>

      </center>
    </div>
  )
}

export default App;
