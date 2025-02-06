import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = () => {
    const [players, setPlayers]=useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    

    return (
        <div className="grid grid-cols-6 gap-0 mx-56">
           
           {
            players.map(player=> <Player key={player.player_id} player={player}></Player>)
           }
        </div>
    );
};

export default Players;