
import image from  '../../assets/images/logo.png'
import { TbCoin } from "react-icons/tb";
import PropTypes from 'prop-types'


const Header = ({coin}) => {
    return (
        <div>
            <div className='flex justify-between mx-56 mt-2 p-3'>
                <img src={image} alt="" />
                <div className='flex p-4'>
                    <div className='flex m-3 p-5'>
                        <h3 className='text-center ml-4'>Home</h3>
                    <h3 className='text-center ml-8'>Fixture</h3>
                    <h3 className='text-center ml-8'>Teams</h3>
                    <h3 className='text-center ml-8'>Schedule</h3>
                    </div>
                    <div className=' m-4 p-4 border-2 border-white bg-purple-100 rounded-2xl flex'>
                        <h2 className='text-xl font-semibold' > {coin} Coin </h2>
                        <h2 className='text-orange-400 ml-1  text-2xl mt-1'> <TbCoin></TbCoin> </h2> 
                    </div>
                   
                </div>
                
                
            </div>
        </div>
    );
};

Header.propTypes={
    coin: PropTypes.number.isRequired
}
export default Header;