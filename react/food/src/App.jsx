import { useState } from 'react'
import Input from './components/Input';
import styles from './App.module.css'
function App() {
  return (
    <>
      <div className={styles.container}>
        <h1>Healthy Food</h1>
        <Input></Input>
      </div>
    </>
  )
  
}

export default App;
