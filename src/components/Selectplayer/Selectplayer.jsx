import PropTypes from 'prop-types'

const Selectplayer = ({selectPlayer}) => {
    const{image, name, price}=selectPlayer;
    return (
        <div className="">
           <img className="w-40" src={image} alt="" />
           <h1>Name: {name}</h1>
           <h2>Price: ${price}</h2>
           <button className='border-2 p-1 bg-lime-200'>Removed</button>
        </div>
    );
};
Selectplayer.propTypes={
    selectPlayer: PropTypes.object
}
export default Selectplayer;