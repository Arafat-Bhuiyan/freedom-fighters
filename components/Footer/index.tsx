const Footer = () => {
    return (
        <footer className='bg-red-800 text-white py-6'>
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; 2023 Asad Anik</p>
                
                <div className="space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        Privacy Policy
                    </a>

                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        Terms of Service
                    </a>

                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;