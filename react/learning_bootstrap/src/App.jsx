import { useState } from 'react'

import './App.css'

function App() {
  let arr = ["apple" , "mango" , "Litchi"]

  return (
    <>
      <ul>
        {arr.map((item)=>(
          <li key={item}>{console.log(item)}</li>
        ))}
      </ul>
    </>
  );
}

export default App
