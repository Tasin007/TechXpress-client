import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto py-6 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <h3 className="text-lg font-bold mb-2">About Us</h3>
                        <p className="text-sm">We are dedicated to providing the latest technology and electronics products to our customers, ensuring high-quality and exceptional service.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact</h3>
                        <p className="text-sm">123 Technology Street, Electronics City</p>
                        <p className="text-sm">support@tech-electro.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Useful Links</h3>
                        <ul className="text-sm">
                            <li>Home</li>
                            <li>Add Product</li>
                            <li>My Cart</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-gray-500">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-500">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-500">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm">© 2023 TechElectro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
