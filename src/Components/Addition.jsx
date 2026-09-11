
import React, { useEffect } from 'react'

function Addition() { 
    let a = 20;
    let b = 10;
    let sum = a + b;
    function add() { 
console.log("The addition is: "+sum)
    }
    function sub() { 
console.log("The Substraction is: "+(a-b))
    }
    function mul() { 
console.log("The Multiplication is: "+(a*b))
    }

   // useEffect(() => { add()})     //First Type
  //  useEffect(() => { sub(),[]})     //Second Type
 useEffect(() => { mul(),[25,4]})     //Third Type
  return (
    <>
      
          <h1>Calculator</h1>




    </>
  )
}

export default Addition
