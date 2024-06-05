import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MdArrowOutward, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarpetCleaningService from "../assets/Quality-Service/CarpetCleaningService.jpg";
import AirDuctCleaning from "../assets/Quality-Service/AirDuct.jpg";
import UpholsteryCleaningService from "../assets/Quality-Service/UpholsteryCleaningService.jpg";
import TileGroutCleaningService from "../assets/Quality-Service/TileGroutCleaningService.jpg";
import PetOdorRemoval from "../assets/Quality-Service/PetOdorRemoval.jpg";

const Services = () => {
    const [index, setIndex] = useState(0);
    const images = [
        { src: CarpetCleaningService, title: "Carpet Cleaning", description: "Say Goodbye To Stains & Odors" },
        { src: UpholsteryCleaningService, title: "Upholstery Cleaning", description: "Like New When We Finish" },
        { src: TileGroutCleaningService, title: "Tile & Grout Cleaning", description: "Make Your Floors Shine Again" },
        { src: PetOdorRemoval, title: "Pet Odor Removal", description: "No More Bad Pet Odors" },
        { src: AirDuctCleaning, title: "Air Duct Cleaning", description: "Breathe Clean Air You Deserve" }
    ];

    const carouselRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            carouselRef.current.children[index],
            { scale: 1 },
            { scale: 1.1, duration: 0.8, ease: "power1.inOut" }
        );
    }, [index]);

    const nextImage = () => {
        gsap.to(carouselRef.current.children[index], { scale: 1, duration: 0.5, ease: "power1.inOut" });
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        gsap.to(carouselRef.current.children[index], { scale: 1, duration: 0.5, ease: "power1.inOut" });
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className='w-full h-screen bg-[#153339]'>
            <div className='pt-10 md:pt-32 pb-10 md:pb-12 px-10 md:px-40 flex flex-col md:flex-row gap-16 md:gap-64 justify-between'>
                <div className='text-5xl md:text-7xl font-bold text-white uppercase'>
                    <h1>Quality</h1>
                    <h1>Services</h1>
                </div>
                <div>
                    <p className='text-sm md:-mt-0 md:text-lg text-[#788588]'>Monster Steamer is the most trusted and professional cleaning service provider in the San Diego area.</p>
                    <div className=' md:mt-5 flex flex-col md:flex-row items-start md:items-center  gap-4 md:gap-16 '>
                        <button className='flex gap-1 text-[#00CCF8] hover:text-[#b5f4ff] hover:duration-500 duration-500 text-sm'>See Our Pricing <MdArrowOutward className="text-zinc-400" /> </button>
                        <button className='flex gap-1 text-[#00CCF8] hover:text-[#b5f4ff] hover:duration-500 duration-500 text-sm'>Call Us (619) 201-9480 <MdArrowOutward className="text-zinc-400" /> </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex gap-3 py-12 px-6 bg-[#002932] rounded-xl w-80 md:w-3/4 h-3/4 md:h-1/2">
                    <div className="mt-36 md:mt-44">
                        <div className="flex gap-2">
                            <button className="border-2 border-zinc-300 rounded-lg" onClick={prevImage}>
                                <MdKeyboardArrowLeft className="text-zinc-400  hover:bg-zinc-300 hover:text-black hover:duration-500 duration-500 text-3xl" />
                            </button>
                            <button className=" border-2 border-zinc-300 rounded-lg" onClick={nextImage}>
                                <MdKeyboardArrowRight className="text-zinc-400  hover:bg-zinc-300 hover:text-black hover:duration-500 duration-500 text-3xl" />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-4 overflow-hidden w-full pb-5" ref={carouselRef}>
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className={`transition-transform duration-700 ${i === index ? "transform scale-120" : ""}`}
                                style={{ display: i >= index && i < index + 4 ? "block" : "none" }}
                            >
                                <div className="flex flex-col items-center">
                                    <img className="w-42 h-28 md:w-48 md:h-36 rounded-lg" src={img.src} alt={img.title} />
                                    <h1 className="text-md md:text-base whitespace-nowrap font-semibold text-[#E2EFF2] mt-2">{img.title}</h1>
                                    <p className="text-xs md:text-sm text-[#788588] whitespace-nowrap">{img.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
