import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { MdArrowOutward, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { YelpLogo, Google, Star } from '../components/icon/index';

const FeedBack = () => {
    const [index, setIndex] = useState(0);
    const carouselRef = useRef();

    const cards = [
        {
            review: 'I had a great experience with this company. Now my sofa and armchair look like new. Very pleased with the results.',
            name: 'Jared B.',
            icon: <YelpLogo />
        },
        {
            review: "David was an amazing tech when I moved into my new place! Can't wait to schedule my next appointment.",
            name: 'Lesly Q.',
            icon: <Google />
        },
        {
            review: 'The carpet is not only clean, but the stains are gone. They did a wonderful job. I recommend them to everyone.',
            name: 'Tom K.',
            icon: <Google />
        }
    ];

    useEffect(() => {
        const items = carouselRef.current.children;
        gsap.fromTo(
            items,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power1.inOut' }
        );
    }, [index]);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };

    const prevCard = () => {
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <div className="w-full h-screen bg-[#153339] rounded-t-3xl">
            <div className="flex flex-col items-center pt-24 px-4 md:px-0">
                <h1 className="text-[#E2EFF2] text-4xl md:text-6xl uppercase font-bold pb-8 md:pb-12">Clients Feedback</h1>
                <p className="text-[#788588] text-xs md:text-base text-center w-full md:w-1/2">
                    We have <span className="text-[#E2EFF2]">1200+ reviews</span> from Yelp and Google with a combined result of 4.9 star rating, welcome to read our clients' feedback.
                </p>
                <div className="flex md:flex-row gap-4 md:gap-9 mt-6">
                    <Link className="flex gap-1 text-[#00CCF8] hover:text-[#b5f4ff] hover:duration-500 duration-500 text-xs md:text-base" to="#">
                        See All Google Reviews <MdArrowOutward />
                    </Link>
                    <Link className="flex gap-1 text-[#00CCF8] hover:text-[#b5f4ff] hover:duration-500 duration-500 text-xs md:text-base" to="#">
                        See All Yelp Reviews <MdArrowOutward />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 md:mt-12 px-4 md:px-10">
                <div ref={carouselRef} className="flex overflow-hidden w-full gap-5">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`w-full md:w-1/3 h-60 bg-[#002932] md:bg-[#F2F8FA] rounded-lg p-6 md:p-10 transition-transform transform ${
                                i === index ? '' : 'opacity-50'
                            }`}
                        >
                            <p className="text-[#AFC0C4] md:text-[#153339] text-sm md:text-lg">{card.review}</p>
                            <div className="flex justify-between gap-2 mt-6 md:mt-16">
                                <h1 className="text-[#5B757D] text-xs md:text-base">{card.name}</h1>
                                <div className="flex gap-1 md:gap-2 text-xs md:text-base">
                                    {card.icon}<Star />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center mt-5'>
                <button className="border-2 border-zinc-300 rounded-lg mr-4" onClick={prevCard}>
                    <MdKeyboardArrowLeft className="text-zinc-400 hover:bg-zinc-300 hover:text-black duration-500 text-3xl" />
                </button>
                <button className="border-2 border-zinc-300 rounded-lg ml-4" onClick={nextCard}>
                    <MdKeyboardArrowRight className="text-zinc-400 hover:bg-zinc-300 hover:text-black duration-500 text-3xl" />
                </button>
            </div>
        </div>
    );
};

export default FeedBack;
