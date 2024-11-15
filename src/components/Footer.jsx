
import logo from '../assets/logo-footer.png';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content p-10 mt-64 pt-44">
            <div className="container mx-auto flex flex-col items-center space-y-6">
                
                {/* Logo Section */}
                <div className="w-full flex justify-center mb-6">
                    <img src={logo} alt="Cricket Logo" className="w-24" />
                </div>

                {/* Sections Container */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 place-content-around gap-6">

                    {/* About Us Section */}
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-lg font-semibold">About Us</h3>
                        <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </div>
                    
                    {/* Quick Links Section */}
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li><a href="#home" className="link link-hover">Home</a></li>
                            <li><a href="#services" className="link link-hover">Services</a></li>
                            <li><a href="#about" className="link link-hover">About</a></li>
                            <li><a href="#contact" className="link link-hover">Contact</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-lg font-semibold">Subscribe</h3>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <form className="form-control">
                            <div className="relative">
                                <input type="email" placeholder="Enter your email" className="input input-bordered w-full pr-16" />
                                <button type="submit" className="btn bg-gradient-to-r from-pink-400 to-yellow-500 text-white absolute top-0 right-0 rounded-l-none">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
