import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowOutward, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { YelpLogo, Google, Star } from '../components/icon/index';
import { revealOnScroll } from '../utils/gsapUtils';

gsap.registerPlugin(ScrollTrigger);

const FeedBack = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    const cards = [
        {
            review: 'I had a great experience with this company. Now my sofa and armchair look like new. Very pleased with the results.',
            name: 'Jared B.',
            source: 'Yelp',
            icon: <YelpLogo />
        },
        {
            review: "David was an amazing tech when I moved into my new place! Can't wait to schedule my next appointment.",
            name: 'Lesly Q.',
            source: 'Google',
            icon: <Google />
        },
        {
            review: 'The carpet is not only clean, but the stains are gone. They did a wonderful job. I recommend them to everyone.',
            name: 'Tom K.',
            source: 'Google',
            icon: <Google />
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealOnScroll(".feedback-reveal", containerRef.current);
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };

    const prevCard = () => {
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <section ref={containerRef} className="section-padding bg-[#0A0A0B] rounded-[4rem] md:rounded-[8rem] mx-4 my-32 overflow-hidden relative border border-white/5">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#00CCF8]/10 blur-[150px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
            
            <div className="container-tight relative z-10">
                <div className="text-center mb-24 feedback-reveal">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-block px-6 py-2 rounded-full bg-white/5 text-[#00CCF8] text-xs font-black uppercase tracking-[0.3em] mb-8 border border-white/10"
                    >
                        Testimonials
                    </motion.div>
                    
                    <h2 className='text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-12 text-white'>
                        <span className="block">What Our</span>
                        <span className="text-gradient">Clients Say</span>
                    </h2>
                    
                    <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
                        We have <span className="text-white font-bold">1200+ five-star reviews</span> across platforms. Here&apos;s why homeowners trust <span className="text-[#00CCF8]">Monster Steamer</span>.
                    </p>

                    <div className='flex flex-wrap justify-center gap-12 mt-16'>
                        <Link className='flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm group' to="#">
                            Google Reviews 
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#00CCF8] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,204,248,0.5)]">
                                <MdArrowOutward size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </Link>
                        <Link className='flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm group' to="#">
                            Yelp Reviews 
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#00CCF8] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,204,248,0.5)]">
                                <MdArrowOutward size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="relative min-h-[500px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100, scale: 0.9, rotateY: 20 }}
                            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, x: -100, scale: 0.9, rotateY: -20 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="w-full max-w-4xl glass p-12 md:p-20 rounded-[4rem] border border-white/10 shadow-2xl relative perspective-2000"
                        >
                            <div className="absolute -top-10 -left-10 text-[200px] font-black text-white/5 leading-none pointer-events-none select-none">
                                &ldquo;
                            </div>
                            
                            <div className="flex gap-2 mb-12">
                                {[...Array(5)].map((_, i) => <Star key={i} className="text-[#00CCF8] w-6 h-6 shadow-[0_0_10px_rgba(0,204,248,0.5)]" />)}
                            </div>
                            
                            <p className="text-white text-3xl md:text-5xl font-black leading-tight mb-16 tracking-tight">
                                {cards[index].review}
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-[#00CCF8] to-blue-600 flex items-center justify-center font-black text-3xl text-white shadow-xl shadow-[#00CCF8]/20">
                                        {cards[index].name[0]}
                                    </div>
                                    <div>
                                        <h4 className="text-white text-2xl font-black uppercase tracking-tight">{cards[index].name}</h4>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[#86D88B] rounded-full animate-pulse"></div>
                                            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Verified Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-3">
                                    <span className="text-white/40 text-xs font-black uppercase tracking-widest">Source</span>
                                    {cards[index].icon}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className='flex items-center justify-center mt-24 gap-12'>
                    <motion.button 
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-6 rounded-full border border-white/10 text-white hover:bg-[#00CCF8] hover:border-[#00CCF8] transition-all duration-300 group shadow-2xl" 
                        onClick={prevCard}
                    >
                        <MdKeyboardArrowLeft className="text-4xl group-hover:scale-125 transition-transform" />
                    </motion.button>
                    
                    <div className="flex gap-4">
                        {cards.map((_, i) => (
                            <button 
                                key={i} 
                                onClick={() => setIndex(i)}
                                className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-16 bg-[#00CCF8] shadow-[0_0_15px_rgba(0,204,248,0.5)]' : 'w-2 bg-white/10 hover:bg-white/30'}`}
                            ></button>
                        ))}
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-6 rounded-full border border-white/10 text-white hover:bg-[#00CCF8] hover:border-[#00CCF8] transition-all duration-300 group shadow-2xl" 
                        onClick={nextCard}
                    >
                        <MdKeyboardArrowRight className="text-4xl group-hover:scale-125 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default FeedBack;

