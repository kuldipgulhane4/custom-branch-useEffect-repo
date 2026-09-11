
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';


function UseEffectss() {

  const [count,setCount]=useState(0);
  const [count2, setCount2] = useState(0);
  
  function count1() {
  alert("hi..I m  useeffect")
  }

  // function count22() {
  // alert("hi..I m second Type useeffect")
  // }
 

  //useEffect(() => { count1() });
  
  //useEffect(()=>{count22(),[]});
  
  useEffect(() => { count1(), [count]})
  
  return (
    <>
      <h1>Counter{ count}</h1>  
      <button onClick={() => setCount(count + 1)}>++</button>
      
       <h1>Counter{ count2}</h1>  
      <button onClick={ ()=>setCount2(count+1)}>++</button>
    </>
  )
}

export default UseEffectss
