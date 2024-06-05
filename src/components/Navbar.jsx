import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/Logo-Dark.png";

const Navbar = () => {
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleServicesDropdown = () => {
        setServicesDropdown(!servicesDropdown);
    };

    const toggleAboutDropdown = () => {
        setAboutDropdown(!aboutDropdown);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setServicesDropdown(false);
        setAboutDropdown(false);
    };

    return (
        <div className='w-full py-6 px-5 flex items-center justify-between bg-white '>
            <div className="order-1">
                <img 
                    className='w-22 h-8'
                    src={Logo} 
                    alt="Dark-Logo" 
                />
            </div>
            <div className='md:hidden order-4'>
                <button onClick={toggleMobileMenu} className="text-2xl">
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div className='order-2 md:order-2 hidden md:block'>
                <ul className='flex gap-6'>
                    <li className='relative'>
                        <Link className="flex gap-1 items-center cursor-pointer" onClick={toggleServicesDropdown}>
                            Services {servicesDropdown ? <FaAngleUp /> : <FaAngleDown />}
                        </Link>
                        {servicesDropdown && (
                            <ul className='absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-10'>
                                <li><Link className='block px-6 py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Carpet Cleaning</Link></li>
                                <li><Link className='block px-6 py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Upholstery Cleaning</Link></li>
                                <li><Link className='block px-6 py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Tile and Grout Cleaning</Link></li>
                                <li><Link className='block px-6 py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Commercial Cleaning</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className='relative'>
                        <Link className="flex gap-1 items-center cursor-pointer" onClick={toggleAboutDropdown}>
                            About {aboutDropdown ? <FaAngleUp /> : <FaAngleDown />}
                        </Link>
                        {aboutDropdown && (
                            <ul className='absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-10'>
                                <li><Link className='block px-6 py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Air Duct Cleaning</Link></li>
                                <li><Link className='block px-6 py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Water Damage</Link></li>
                                <li><Link className='block px-6 py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Pressure Washing</Link></li>
                                <li><Link className='block px-6 py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Dryer Vent Cleaning</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="#">Subscription</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </div>
            <div className='order-3 md:order-3'>
                <button className='px-4 py-2 bg-[#00CCF8] text-white rounded-3xl'>Book Online</button>
            </div>
            {mobileMenuOpen && (
                <div className='absolute top-full left-0 w-full bg-white mt-2 shadow-lg z-10'>
                    <ul className='flex flex-col items-start p-4'>
                        <li className='relative w-full'>
                            <Link className="flex justify-between items-center w-full py-2 cursor-pointer" onClick={toggleServicesDropdown}>
                                Services {servicesDropdown ? <FaAngleUp /> : <FaAngleDown />}
                            </Link>
                            {servicesDropdown && (
                                <ul className='pl-4'>
                                    <li><Link className='block py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Carpet Cleaning</Link></li>
                                    <li><Link className='block py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Upholstery Cleaning</Link></li>
                                    <li><Link className='block py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Tile and Grout Cleaning</Link></li>
                                    <li><Link className='block py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Commercial Cleaning</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className='relative w-full'>
                            <Link className="flex justify-between items-center w-full py-2 cursor-pointer" onClick={toggleAboutDropdown}>
                                About {aboutDropdown ? <FaAngleUp /> : <FaAngleDown />}
                            </Link>
                            {aboutDropdown && (
                                <ul className='pl-4'>
                                    <li><Link className='block py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Air Duct Cleaning</Link></li>
                                    <li><Link className='block py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Water Damage</Link></li>
                                    <li><Link className='block py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Pressure Washing</Link></li>
                                    <li><Link className='block py-2 whitespace-nowrap rounded-md hover:bg-gray-100' to="#">Dryer Vent Cleaning</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link className='block py-2 whitespace-nowrap' to="#">Subscription</Link></li>
                        <li><Link className='block py-2 whitespace-nowrap' to="#">Blog</Link></li>
                        <li><Link className='block py-2 whitespace-nowrap' to="#">Contact</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
