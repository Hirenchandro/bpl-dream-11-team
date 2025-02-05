
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Availableplayers from './components/AvailablePlayers/Availableplayers'


function App() {
  
  const [coin, setCoin]=useState(0)

  const handleCoin =()=>{
    const newNumber = coin+60000;
    setCoin(newNumber)
  }

  return (
    <>
      
    <Header coin={coin}></Header>
    <Banner handleCoin={handleCoin}></Banner>
    <Availableplayers></Availableplayers>
      
      
    </>
  )
}

export default App
