import { IoFlagSharp } from "react-icons/io5";
import PropTypes from 'prop-types'

const Player = ({player}) => {
    const {image,name,country,player_role} = player;
    return (
        <div>
            <div className="w-56 p-2">
               
                    <div className="">
                        <img className="flex w-full" src={image} alt="" />
                </div>
                
                
                <h1 className="font-semibold"> Name: {name}</h1>

                <div className="flex justify-between">
                    <h2 className="flex text-sm "><IoFlagSharp></IoFlagSharp> {country}</h2>
                    <button className="text-sm bg-gray-100 rounded-sm px-1">{player_role}</button>                  
                </div>

                 <hr/>
                 <div>
                    <h1 className="font-semibold">Rating</h1>

                 </div>
            
            </div>
        </div>
    );
};
Player.propTypes={
    player: PropTypes.object.isRequired
}

export default Player;