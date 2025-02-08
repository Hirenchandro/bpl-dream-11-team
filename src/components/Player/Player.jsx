import { IoFlagSharp } from "react-icons/io5";
import PropTypes from 'prop-types'

const Player = ({player,handleSelect}) => {
    const {image,name,country,player_role,rating, batting_style,price} = player;
    return (
        <div>
            <div className="w-auto p-2">
               
                    <div className="">
                        <img className="flex w-full rounded-2xl" src={image} alt="" />
                </div>
                
                
                <h1 className="font-semibold"> Name: {name}</h1>

                <div className="flex justify-between">
                    <h2 className="flex text-sm "><IoFlagSharp></IoFlagSharp> {country}</h2>
                    <button className="text-sm bg-gray-100 rounded-sm px-1">{player_role}</button>                  
                </div>

                 <hr/>
                 <div>
                  <div className="flex justify-between">
                      <h1 className="font-semibold">Rating</h1>
                      <h2>{rating}</h2>
                  </div>
                  <div className="flex justify-between">
                    <h2>batting_style</h2>
                    <h2>{batting_style}</h2>
                  </div>
                  <div className="flex justify-between">
                    <h2>Price: ${price}</h2>
                    <button onClick={()=>handleSelect(player)} className="border-2 bg-lime-200 p-1">Choose Player</button>
                  </div>

                 </div>
            
            </div>
        </div>
    );
};
Player.propTypes={
    player: PropTypes.object.isRequired,
    handleSelect: PropTypes.func
}

export default Player;