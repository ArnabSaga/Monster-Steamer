import { useState, useEffect } from 'react';
import sanDiego from "../assets/Service-Area/San-Diego.jpg";
import logoWhite from "../assets/Logo-light.png";

import { IoIosMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";

import footer from "../assets/Footer/Homeadvisor-approved.png";
import footerIcon from "../assets/Monster/Frame40.png";

import gsap from 'gsap';
import { CallIcon, LocationIcon, MailIcon, Star } from './icon';

const Footer = () => {
    const [hovered, setHovered] = useState(null);

    const areas = [
        "San Diego", "Oceanside", "Escondido", "Del Mar", "Miramar",
        "Rancho Bernardo", "Carlsbad", "El Cajon", "Fallbrook", "Miramesa",
        "National City", "Vista", "Bonsall", "Encinitas", "La Jolla",
        "Ramona", "Chula Vista"
    ];

    useEffect(() => {
        if (hovered === "San Diego") {
            gsap.to("#sanDiegoImage", { opacity: 0.5, duration: 0.5 });
        } else {
            gsap.to("#sanDiegoImage", { opacity: 0, duration: 0.5 });
        }
    }, [hovered]);

    return (
        <div className='relative'>
            {/* Area We Serve Section */}
            <div className='relative w-full z-10' style={{ height: '5vh' }}>
                <div className='absolute top-[-18vh] left-0 w-full flex justify-center px-4 md:px-20'>
                    <div className='relative w-full md:w-4/5 rounded-3xl bg-[#00CCF8] py-10 overflow-hidden'>
                        <div id="sanDiegoImage" className='absolute inset-0 opacity-0'>
                            <img src={sanDiego} alt="San Diego" className='w-full h-full object-cover rounded-t-3xl' />
                        </div>
                        <h1 className='text-3xl md:text-7xl text-white font-bold uppercase text-center mt-2'>Area We Serve</h1>
                        <div className='mt-2'>
                            <div className='flex flex-wrap items-center justify-center gap-4 py-4'>
                                {areas.map((area, index) => (
                                    <div key={index} className='relative'>
                                        <button
                                            className='flex items-center px-3 py-2 rounded-xl bg-white text-[#153339] font-medium uppercase'
                                            onMouseEnter={() => setHovered(area)}
                                            onMouseLeave={() => setHovered(null)}
                                        >
                                            {area}
                                            {hovered === area && area === "San Diego" && <span className='ml-2'>📍</span>}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className='w-full bg-[#00343E] pt-60'>
                <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='mb-6 md:mb-0'>
                            <img className='w-32' src={logoWhite} alt="Logo" />
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-between md:space-x-10'>
                            <div className='mb-6 md:mb-0'>
                                <h1 className='flex items-center gap-1.5 text-[#E2EFF2] text-sm'>
                                    <IoIosCall className='text-[#00CCF8]' />
                                    (619) 201-9480
                                </h1>
                            </div>
                            <div className='mb-6 md:mb-0'>
                                <h1 className='flex items-center gap-1.5 text-[#E2EFF2] text-sm'>
                                    <IoIosMail className='text-[#00CCF8]' />
                                    info@monstersteamer.net
                                </h1>
                            </div>
                            <div className='mb-6 md:mb-0'>
                                <h1 className='flex items-center gap-1.5 text-[#E2EFF2] text-sm'>
                                    <CiLocationOn className='text-[#00CCF8]' />
                                    San Diego, CA.
                                </h1>
                            </div>
                            <div className='flex gap-4'>
                                <FaFacebook className='text-[#00CCF8]' />
                                <FaInstagram className='text-[#00CCF8]' />
                                <IoArrowUpCircleOutline className='text-[#00CCF8] text-lg' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center mt-16'>
                        <div className='w-full md:w-4/5 px-4 py-10 bg-[#002932] rounded-lg flex flex-col md:flex-row justify-between'>
                            <div className='flex flex-col mb-10 md:mb-0'>
                                <h1 className='text-[#E2EFF2] font-semibold text-2xl mb-5'>About</h1>
                                <div className='text-white text-sm font-light'>
                                    <p className='my-2'>Area We Serve</p>
                                    <p className='my-2'>Subscription</p>
                                    <p className='my-2'>Career</p>
                                    <p className='my-2'>Deals</p>
                                    <p className='my-2'>Blog</p>
                                </div>
                            </div>
                            <div className='flex flex-col mb-10 md:mb-0'>
                                <h1 className='text-[#E2EFF2] font-semibold text-2xl mb-5'>Services</h1>
                                <div className='text-white text-sm font-light'>
                                    <p className='my-2'>Carpet Cleaning</p>
                                    <p className='my-2'>Upholstery Cleaning</p>
                                    <p className='my-2'>Tile & Grout Cleaning</p>
                                    <p className='my-2'>Commercial Cleaning</p>
                                    <p className='my-2'>Water Damage</p>
                                    <p className='my-2'>Air Duct Cleaning</p>
                                    <p className='my-2'>Pressure Washing</p>
                                    <p className='my-2'>Dryer Vent Cleaning</p>
                                </div>
                            </div>
                            <div className='flex flex-col mb-10 md:mb-0'>
                                <h1 className='text-[#E2EFF2] font-semibold text-2xl mb-5'>Quick Links</h1>
                                <div className='text-white text-sm font-light'>
                                    <p className='my-2'>Book Online</p>
                                    <p className='my-2'>Google Reviews</p>
                                    <p className='my-2'>Yelp Reviews</p>
                                    <p className='my-2'>Review Us</p>
                                    <p className='my-2'>Privacy Policy</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col items-center mb-5'>
                                    <img className='w-36 md:w-20 mb-3' src={footer} alt="Homeadvisor Approved" />
                                    <p className='text-white text-sm text-center'>We Accept All Major Credit Cards</p>
                                    <img className='mt-2' src={footerIcon} alt="Credit Cards Accepted" />
                                </div>
                                <div className='w-48 md:w-36 h:20 md:h-16 p-2 rounded-md bg-[#153339] flex flex-col items-center'>
                                    <Star />
                                    <p className='text-white text-sm ml-2'>1200+ Yelp & Google reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center mt-10 pb-10'>
                        <p className='text-[#5B757D] text-sm mb-2 md:mb-0'>© 2024 Monster Steamer Carpet Cleaning.</p>
                        <p className='text-[#5B757D] text-sm'>Built by Jeremy Ellsworth Designs LLC</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
