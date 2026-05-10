import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { revealOnScroll } from '../utils/gsapUtils';

import fastIcon from "../assets/Fast-icon.png";
import cusTomerIcon from "../assets/Customer-icon.png";
import noBaitIcon from "../assets/No-Bait-icon.png";
import insuredIcon from "../assets/Insured-icon.png";
import attention from "../assets/Attention-Icon.png";
import ecoFridendlyIcon from "../assets/Eco-friendly-icon.png";

gsap.registerPlugin(ScrollTrigger);

const Why = () => {
    const containerRef = useRef(null);
    const gridRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX_scroll = useTransform(scrollYProgress, [0, 1], [5, -5]);
    const springRotateX = useSpring(rotateX_scroll, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealOnScroll(".why-reveal", containerRef.current);
            
            gsap.from(".card", {
                y: 100,
                opacity: 0,
                scale: 0.8,
                duration: 1,
                stagger: {
                    amount: 0.8,
                    grid: [3, 2],
                    from: "start"
                },
                ease: "power4.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const cards = [
        { icon: fastIcon, title: "Fast and Reliable", color: "from-blue-500 to-cyan-400" },
        { icon: cusTomerIcon, title: "100% Satisfaction", color: "from-cyan-500 to-teal-400" },
        { icon: noBaitIcon, title: "No Bait & Switch", color: "from-indigo-500 to-blue-400" },
        { icon: insuredIcon, title: "Fully Insured", color: "from-teal-500 to-emerald-400" },
        { icon: attention, title: "Detail Oriented", color: "from-blue-600 to-indigo-400" },
        { icon: ecoFridendlyIcon, title: "Eco-Friendly", color: "from-emerald-500 to-green-400" }
    ];

    return (
        <section ref={containerRef} className='section-padding w-full bg-slate-50 relative overflow-hidden'>
            {/* Background 3D blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00CCF8]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="flex flex-col lg:flex-row gap-24 items-center relative z-10">
                <div className='lg:w-1/2'>
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-5 py-2 rounded-full bg-[#00CCF8]/10 text-[#00CCF8] text-xs font-black uppercase tracking-[0.3em] mb-8"
                    >
                        Why Choose Us
                    </motion.div>
                    
                    <h2 className='why-reveal text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mb-12'>
                        <span className="block">Why</span>
                        <span className="text-gradient">Choose Us?</span>
                    </h2>

                    <div className='max-w-md space-y-8 why-reveal'>
                        <p className='text-xl text-slate-500 leading-relaxed font-medium'>Our reputation has been built by word-of-mouth referrals since the very beginning in 2010, and we’re committed to providing the same level of quality service to you.</p>
                        <p className='text-xl text-slate-500 leading-relaxed font-medium'>We have also developed our own green and eco-friendly product line under the name <span className='text-[#86D88B] font-bold border-b-4 border-[#86D88B]/20'>Monsterchems</span>.</p>
                        <div className="pt-10">
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className='btn-primary px-12 py-5 text-xl font-bold shadow-2xl shadow-[#00CCF8]/30'
                            >
                                Book Now -10% Off
                            </motion.button>
                        </div>
                    </div>
                </div>

                <motion.div 
                    ref={gridRef} 
                    style={{ rotateX: springRotateX }}
                    className="lg:w-1/2 grid grid-cols-2 gap-8 w-full perspective-2000"
                >
                    {cards.map((item, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ 
                                y: -15, 
                                rotateY: 15,
                                rotateX: -5,
                                scale: 1.05,
                                boxShadow: "0 50px 100px rgba(0,0,0,0.12)"
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="card bg-white p-10 rounded-[3.5rem] shadow-xl border border-white flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className={`relative w-24 h-24 rounded-[2.5rem] bg-gradient-to-br ${item.color} p-6 mb-8 shadow-2xl shadow-cyan-500/20 group-hover:rotate-12 transition-transform duration-500`}>
                                <img className="w-full h-full object-contain brightness-0 invert" src={item.icon} alt={item.title} />
                            </div>
                            <p className="relative text-xl font-black text-slate-800 leading-tight uppercase tracking-tight">{item.title}</p>
                            
                            {/* Decorative element */}
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Why;

