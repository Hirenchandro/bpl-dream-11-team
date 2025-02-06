import imagebg from '../../assets/images/banner-main.png'

import PropTypes from 'prop-types'

const Banner = ({handleCoin}) => {
    return (
        <div className= "bg-indigo-500 p-8 rounded-xl mx-auto w-3/4 h-1/2 grid place-content-center">
            <div className=' flex justify-center'>
            <img  src={imagebg} alt="" /> 
             </div>
            <div className='text-center'>
                <h2 className='text-4xl text-white'>Assemble your Ultimate Dream 11 Cricket Team</h2>
                <h3 className='text-2xl text-gray-200'>Beyond Boundaries Beyond Litmits</h3>
                <button onClick={handleCoin} className=' p-3 rounded border-2  bg-lime-400'> <span className='text-xl'>Claim Free Credit</span> </button>
             

            </div>
            
           
            
        </div>
    );
};

Banner.propTypes={
    handleCoin: PropTypes.func.isRequired
}
export default Banner;