import { useEffect, useRef } from 'react';
import van from "../assets/van.png";
import { gsap } from 'gsap';

const Off = () => {
    const vanRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(vanRef.current, 
            { x: '100%', y: '0%' }, 
            { x: '0%', y: '0%', duration: 1, ease: 'power2.out' }
        );
    }, []);

    return (
        <div className='w-full min-h-screen px-4 py-16 md:px-20 md:py-12 flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 h-full flex flex-col items-start justify-center'>
                <h1 className='text-4xl md:text-8xl text-[#153339] font-semibold leading-tight'>
                    Book Online<br />And Get 10% Off.
                </h1>
                <button className='px-7 py-4 mt-7 bg-[#00CCF8] text-white text-sm rounded-full'>
                    Book Us Today
                </button>
            </div>
            <div className='w-full md:w-1/2 h-full flex justify-center items-end md:items-center'>
                <img 
                    ref={vanRef} 
                    className="w-11/12 md:w-full h-auto object-contain shadow-van" 
                    src={van} 
                    alt="Van" 
                />
            </div>
        </div>
    );
}

export default Off;
