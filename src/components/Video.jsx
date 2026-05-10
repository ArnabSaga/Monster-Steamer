import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealOnScroll } from '../utils/gsapUtils';

import videoBg from "../assets/monster-carpet-high.mp4";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealOnScroll(".video-reveal", sectionRef.current);
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleTogglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section ref={sectionRef} className='w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white py-32'>
            <div className='container-tight mb-16 text-center video-reveal'>
                <h2 className='text-5xl md:text-7xl font-black uppercase tracking-tighter'>
                    Our <span className='text-gradient'>Monster</span> Process
                </h2>
                <p className='text-slate-500 mt-6 text-xl font-medium max-w-2xl mx-auto'>
                    Watch how we bring the deep-clean power of our monster trucks to your home.
                </p>
            </div>

            <motion.div 
                style={{ scale, rotateX: rotate }}
                className='w-full max-w-6xl aspect-video relative group px-4 md:px-0'
            >
                <div className='absolute -inset-4 bg-gradient-to-r from-[#00CCF8]/20 to-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000'></div>
                
                <div className='relative w-full h-full rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200'>
                    <video 
                        ref={videoRef}
                        className='w-full h-full object-cover' 
                        src={videoBg} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    />
                    
                    <div className='absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500'></div>
                    
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleTogglePlay}
                            className='w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white shadow-2xl'
                        >
                            {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} className='ml-2' />}
                        </motion.button>
                    </div>

                    <div className='absolute bottom-8 left-8 right-8 flex items-center justify-between pointer-events-none'>
                        <div className='glass px-6 py-3 rounded-full border border-white/20 flex items-center gap-3'>
                            <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div>
                            <span className='text-white text-xs font-black uppercase tracking-widest'>Monster Vision</span>
                        </div>
                        
                        <div className='glass px-6 py-3 rounded-full border border-white/20'>
                            <span className='text-white text-xs font-black uppercase tracking-widest'>Live Clean</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Video;

