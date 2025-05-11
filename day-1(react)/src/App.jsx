import React from 'react'
import { Fragment } from 'react'

const App = () => {

  //here we write js logic

  let eventhandler = ()=>{
    alert("hello madarchod")
  }

  const eventparamhandler = (msg)=>{
    alert(msg)
  }

  
  
  return (
    <>
      <div>raja ki aayi hai baaraat</div>
      <button onClick={eventhandler}>click</button>
      <button onClick={ ()=>eventparamhandler("i am msg from bujh gye diye")}>click(param)</button>
      </>
  );
}

export default App

// a function component will always return html

// we can not write anything after return
// we can only return single data/ entitu/ variable/ value

// there must be single return in a function and that must in the last statment