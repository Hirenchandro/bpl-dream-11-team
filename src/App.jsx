
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Availableplayers from './components/AvailablePlayers/Availableplayers'



function App() {
  
  const [coin, setCoin]=useState(0)


  const handleCoin =()=>{
    const newNumber = coin+6000000;
    setCoin(newNumber)

  }
 const handlePrice=(price)=>{
  if(coin>price){
setCoin(coin-price)
  }
  else{
    alert('Not Enough Coin! Please Claim Coin')
  }
  
 }

  return (
    <>
      
    <Header coin={coin}></Header>
    <Banner handleCoin={handleCoin}></Banner>
    <Availableplayers
    handlePrice={handlePrice}
    coin ={coin}
    ></Availableplayers>
      
      
    </>
  )
}

export default App
