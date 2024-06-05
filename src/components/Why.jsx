import { useEffect } from 'react';
import { gsap } from 'gsap';
import fastIcon from "../assets/Fast-icon.png";
import cusTomerIcon from "../assets/Customer-icon.png";
import noBaitIcon from "../assets/No-Bait-icon.png";
import insuredIcon from "../assets/Insured-icon.png";
import attention from "../assets/Attention-Icon.png";
import ecoFridendlyIcon from "../assets/Eco-friendly-icon.png";

const Why = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        const section = document.querySelector('.why-section');
        const timeline = gsap.timeline();
        
        cards.forEach((card, i) => {
            timeline.fromTo(card, 
                { x: -300, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 1, delay: i * 1 },
                `=1`
            );
        });

        timeline.to(section, { backgroundColor: '#d6fcd7', duration: 1 }, `-=${cards.length * 1}`);
    }, []);

    return (
        <div className='why-section w-full h-screen flex flex-col md:flex-row justify-between px-10 py-12'>
            <div className='text-center md:text-left'>
                <h1 className='text-4xl md:text-7xl uppercase font-bold'>Why</h1>
                <h1 className='text-4xl md:text-7xl uppercase font-bold'>choose us?</h1>
                <div className='w-full md:w-1/3'>
                    <p className='text-base text-[#5B757D] pt-10'>Our reputation has been built by word-of-mouth referrals since the very beginning in 2010, and we’re committed to providing the same level of quality service to you.</p>
                    <p className='text-base text-[#5B757D] pt-10'>We have also developed our own green and eco-friendly product line under the name <span className='text-[#86D88B]'>Monsterchems</span>.</p>
                </div>
                <div>
                    <button className='mt-5 py-4 px-2.5 rounded-full bg-[#00CCF8]'>Book Now -10% Off</button>
                </div>
            </div>
            <div className="relative cards flex items-center justify-center mt-2 md:mt-32 mb-40 md:pr-40 md:w-1/2 ">
                <div className='card bg-[#325B64] flex flex-col items-center w-56 h-32 py-4 rounded-lg absolute top-2 md:left-3'>
                    <img className="w-[80px] h-[80px]" src={fastIcon} alt="Fast Icon" />
                    <p className="text-sm text-center text-[#92ADB3]">Fast And Reliable Team</p>
                </div>
                <div className='card bg-[#28515A] flex flex-col items-center w-56 h-32 py-4 rounded-lg absolute top-8 md:left-8'>
                    <img className="w-[80px] h-[80px]" src={cusTomerIcon} alt="Customer" />
                    <p className="text-sm text-center text-[#92ADB3]">Customer Satisfaction</p>
                </div>
                <div className='card bg-[#1E4750] flex flex-col items-center w-56 h-32 py-4 rounded-lg absolute top-16 md:left-16'>
                    <img className="w-[80px] h-[80px]" src={noBaitIcon} alt="No Bait" />
                    <p className="text-sm text-center text-[#92ADB3]">No Bait And Switch</p>
                </div>
                <div className='card bg-[#143D46] flex flex-col items-center w-56 h-32 py-4 rounded-lg absolute top-24 md:left-24'>
                    <img className="w-[80px] h-[80px]" src={insuredIcon} alt="Insured Cleaning" />
                    <p className="text-sm text-center text-[#92ADB3]">Insured Cleaning</p>
                </div>
                <div className='card bg-[#14333C] flex flex-col items-center w-56 h-32 py-4 rounded-lg absolute top-32 md:left-32'>
                    <img className="w-[80px] h-[80px]" src={attention} alt="Attention" />
                    <p className="text-sm text-center text-[#92ADB3]">Attention To Detail</p>
                </div>
                <div className='card bg-[#002932] flex flex-col items-center w-56 h-32 py-4 rounded-lg absolute top-40 md:left-40'>
                    <img className="w-[80px] h-[80px]" src={ecoFridendlyIcon} alt="Eco-Friendly Products" />
                    <p className="text-sm text-center text-[#92ADB3]">Eco-Friendly Products</p>
                </div>
            </div>
        </div>
    )
}

export default Why;
