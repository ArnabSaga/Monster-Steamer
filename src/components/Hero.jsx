import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import videoBg from "../assets/Hero/Video.gif";
import CallUsToday from "../assets/Hero/CallUsToday.png";
import CallIcon from "../assets/Hero/CallIcon.png";

const Hero = ({ triggerAnimation }) => {
    const callUsRef = useRef(null);
    const videoBgRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);

    useEffect(() => {
        gsap.to(callUsRef.current, {
            rotation: 360,
            duration: 50,
            repeat: -1,
            ease: "linear"
        });

        gsap.from([textRef1.current, textRef2.current, textRef3.current], {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 3,
            ease: "power3.out"
        });
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-24 px-4 md:px-0">
                <div className="flex items-center md:flex md:items-center gap-2">
                    <div 
                        className="w-44 h-20 md:w-36 md:h-20 rounded-md overflow-hidden cursor-pointer"
                        ref={videoBgRef}
                        onClick={() => triggerAnimation(videoBgRef.current)}
                    >
                        <img src={videoBg} className="w-full h-full object-cover" alt="Carpet Cleaning Video" />
                    </div>
                    <div>
                        <h1 ref={textRef1} className="text-[#00CCF8] text-5xl md:text-8xl font-bold uppercase leading-none tracking-wideest">Carpet</h1>
                    </div>
                </div>
                <div>
                    <h1 ref={textRef2} className="text-5xl md:text-8xl font-bold uppercase leading-none tracking-wideest">
                        <span className="text-[#00CCF8]">Cleaning</span> in  
                    </h1>
                </div>
                <div>
                    <h1 ref={textRef3} className="text-5xl md:mr-16 md:text-8xl font-bold uppercase leading-none tracking-wideest">SAN Diego.</h1>
                </div>
            </div>
            <div className="mt-12 md:mt-24 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 text-zinc-500 text-sm md:text-lg text-center md:text-left">
                    <p className="text-[#788588]">Elevate your living environment to new heights of</p>
                    <p className="text-[#788588]"> cleanliness and hygiene. We serve both <span className="font-bold text-[#153339]">residential</span> and </p>
                    <p className="text-[#788588]"><span className="font-bold text-[#153339]">commercial</span> clients.</p>
                </div>
                <div className="flex items-center justify-center mt-9 md:mt-0 relative">
                    <img ref={callUsRef} className="w-20 md:w-28" src={CallUsToday} alt="call" />
                    <img className="absolute inset-0 w-8 md:w-12 m-auto" src={CallIcon} alt="call icon" />
                </div>
            </div>
        </>
    );
};

export default Hero;
