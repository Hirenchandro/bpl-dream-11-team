import { useEffect, useState } from "react";
import Player from "../Player/Player";
import Selectplayer from "../Selectplayer/Selectplayer";
import PropTypes from 'prop-types'


const Availableplayers = ({handlePrice,coin}) => {
     const [players, setPlayers]=useState([]);
     const [selectPlayers, setSelectPlayers]= useState([]);
     
    
        useEffect(()=>{
            fetch('players.json')
            .then(res=>res.json())
            .then(data=>setPlayers(data))
        },[])
        const handleSelect=(player)=>{
            
   
            if(coin>player.price){
             const newSelectPlayer =[... selectPlayers, player]

              if(selectPlayers.length<11){
                setSelectPlayers(newSelectPlayer);
                
           
         }
         else{
             alert('All Ready Eleven Players Selected')
         }
         const remainingAvailablePlayer= players.filter(newPlayer=>newPlayer.player_id !== player.player_id)
                setPlayers(remainingAvailablePlayer);
                
         }
                handlePrice(player.price)
              
         

        }
      
    return (
        <div>
            <div className="flex justify-between p-4 mx-56">
                <h1 className="text-3xl font-semibold">Available Players</h1>
                <div className="border border-black">
                <button className=" bg-white p-2">Available</button>
                <button onClick={handleSelect} className="ml-2 border-l border-black bg-white p-2">Selected</button>
                </div>
              
            </div>
           <div className="border-2 m-56 mb-4 mt-2">
            <h1 className="text-center font-bold text-3xl"> Selected Players: {selectPlayers.length} </h1>
             <div className="grid grid-cols-6 gap-4 m-56 mb-4 mt-4">
               
                {
                    selectPlayers.map((selectPlayer,idx)=> <Selectplayer key={idx} selectPlayer={selectPlayer}></Selectplayer>)
                }
            </div>
           </div>
          
           <div className="grid grid-cols-3 gap-0 mx-56">
                 {
                    players.map(player=> <Player 
                        key={player.player_id} 
                        player={player}
                        handleSelect={handleSelect}
                        ></Player>)
                }
               </div>
        </div>
    );
};

Availableplayers.propTypes={
    handlePrice:PropTypes.func,
    coin: PropTypes.number
}

export default Availableplayers;