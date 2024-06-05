import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import videoBg from "../assets/Hero/Video.gif";
import Bubble from "../assets/Bubble.png";

const Feature = ({ animateVideoBg }) => {
    const videoContainerRef = useRef(null);

    useEffect(() => {
        if (animateVideoBg) {
            animateVideoBg(videoContainerRef.current);
        }
    }, [animateVideoBg]);

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 p-5">
            <div className="p-6 w-full md:w-1/2 text-center md:text-left">
                <div className="flex flex-col md:flex-row my-14 items-center md:items-start">
                    <div className="mb-8 md:mb-0 md:mr-11">
                        <p className="text-xs text-[#153339]">Since</p>
                        <h1 className="text-4xl md:text-7xl font-bold">2010</h1>
                        <p className="w-full md:w-2/3 text-sm text-[#788588]">Providing the same level of quality service</p>
                    </div>
                    <div className="md:ml-16">
                        <p className="text-xs text-[#153339]">Operate</p>
                        <h1 className="text-4xl md:text-7xl font-bold">3</h1>
                        <p className="w-full md:w-2/3 text-sm text-[#788588]">Trucks for fast & reliable cleaning service</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row my-14 items-center md:items-start">
                    <div className="mb-8 md:mb-0 md:mr-11">
                        <p className="text-xs text-[#153339]">Over</p>
                        <h1 className="text-4xl md:text-7xl font-bold">8000+</h1>
                        <p className="w-full md:w-2/3 text-sm text-[#788588]">Home & Businesses trust us for cleaning services</p>
                    </div>
                    <div>
                        <p className="text-xs text-[#153339]">4.9 star</p>
                        <h1 className="text-4xl md:text-7xl font-bold">1200+</h1>
                        <p className="w-full md:w-3/4 text-sm text-[#788588]">Homeowners reviewed us on internet.</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 md:mr-16 mt-10 md:mt-0 relative" ref={videoContainerRef}>
                <img className="hidden md:block absolute top-24 -left-10 w-20" src={Bubble} alt="Bubble" />
                <img src={videoBg} className="w-full h-full object-cover rounded-lg" alt="Carpet Cleaning Video" />
            </div>
        </div>
    );
};

export default Feature;
