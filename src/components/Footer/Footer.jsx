import footerImage from '../../assets/images/logo-footer.png'

const Footer = () => {
    return (
       <div>
        <div className='flex justify-center mb-5 p-4'>
            <img src={footerImage} alt="" />
        </div>
         <div className="grid grid-cols-3 ml-2 pl-3 pt-2 mb-2">
            <div>
                <h1 className="text-white text-2xl">About Us</h1>
                <p className="text-white">We are passionate team
                    <br />
                    dedicated to providing the best
                    <br />
                    services to our customer
                </p>
            
            </div>
            <div>
                <h1 className="text-white text-2xl">Quick Link</h1>
                <ol className="text-white">
                    <li>Home</li>
                    <li>Service</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </div>
            <div>
                <h1 className="text-white text-2xl">Subscribe</h1>
                <p className="text-white">Subscribe to our newsletter for the <br /> latest updates</p>
                <div>
                    <input type="text" />
                    <button className="bg-lime-300 rounded p-1 ml-1 font-semibold">Subscribe</button>
                </div>
            </div>
            
        </div>
        <hr />
        <h1 className="text-white text-center p-2"> @2025 Your Company All Rights Reserved</h1>
       </div>
    );
};

export default Footer;