import imagebg from '../../assets/images/banner-main.png'

const Banner = () => {
    return (
        <div className= "bg-indigo-500 p-8 rounded-xl mx-auto w-3/4 h-1/2">
            <div className=''>
            <img src={imagebg} alt="" /> 
             </div>
            <div>
                <h2 className='text-4xl text-white'>Assemble your Ultimate Dream 11 Cricket Team</h2>
                <h3 className='text-2xl text-gray-200'>Beyond Boundaries Beyond Litmits</h3>
                <button className=' p-3 rounded border-2 border-yellow-300 bg-yellow-500'> <span className='text-xl'>Claim Free Credit</span> </button>
                <h1>Banner incomplete</h1>

            </div>
            
           
            
        </div>
    );
};

export default Banner;