

const Subscribe = () => {
    return (
        <div className='grid place-content-center ' >
            <div className=''>
                <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
                <h3>Get the latest updates and new right in your inbox!</h3>
            </div>
            <div className=''>
                <input className="border-2" type="text" />
                <button className="border-2 bg-purple-400 rounded-lg p-1 ml-2 "> Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;