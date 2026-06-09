import { useState } from 'react'
import Errormsg from './components/Errormsg';
import './App.css'
import Fooditems from './components/Fooditems';
import Item from './components/Item';

function App() {
  let foodItems = ["apple" , "mango" , "Litchi"]

  return (
    <>
      <h1>Healthy food</h1>
      <Errormsg items = {foodItems}></Errormsg>
      <Fooditems ></Fooditems>
    </>
  );
}

export default App
