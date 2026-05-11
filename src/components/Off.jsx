import { useEffect, useRef } from 'react';
import van from "../assets/van.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { revealOnScroll, vehicleEntry } from "../utils/gsapUtils";

gsap.registerPlugin(ScrollTrigger);

const Off = () => {
    const vanRef = useRef(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Advanced Parallax
    const vanParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const vanRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const vanScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
    
    // Smooth springs for 3D feel
    const springVanY = useSpring(vanParallax, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Use refactored vehicleEntry utility
            vehicleEntry(vanRef.current, containerRef.current);

            // Use refactored reveal utility
            revealOnScroll(".off-reveal", containerRef.current, {
                stagger: 0.1,
                y: 80
            });

            // Floating background bubbles
            gsap.to(".bubble", {
                y: "random(-100, 100)",
                x: "random(-50, 50)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.2
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className='relative w-full min-h-screen section-padding flex flex-col md:flex-row items-center overflow-hidden bg-white'>
            {/* Immersive Background */}
            <div className="bubble absolute top-1/4 right-1/4 w-64 h-64 bg-[#00CCF8]/5 blur-[80px] rounded-full" />
            <div className="bubble absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#00A3C7]/5 blur-[100px] rounded-full" />
            
            <div className='w-full lg:w-[45%] flex flex-col items-start justify-center relative z-10 px-6 md:px-12'>
                <div className="overflow-hidden mb-4">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="off-reveal block text-sm font-black uppercase tracking-[0.5em] text-[#00CCF8]"
                    >
                        Limited Time Offer
                    </motion.span>
                </div>
                
                <h2 className='text-4xl sm:text-6xl md:text-9xl text-[#153339] font-black leading-[0.9] md:leading-[0.8] tracking-tighter uppercase mb-8 md:mb-12'>
                    <div className="overflow-hidden">
                        <span className="off-reveal block">Book Online</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="off-reveal block text-[#00CCF8] italic decoration-4 sm:decoration-8 underline-offset-[10px] sm:underline-offset-[20px]">
                            & Get 10% Off.
                        </span>
                    </div>
                </h2>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: false }}
                    className="relative w-full sm:w-auto"
                >
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 30px 60px rgba(0,204,248,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className='btn-primary w-full sm:w-auto px-10 sm:px-16 py-6 sm:py-8 text-xl sm:text-2xl font-black uppercase tracking-widest'
                    >
                        Claim Your Discount
                    </motion.button>
                </motion.div>
            </div>

            <div className='w-full lg:w-[55%] flex justify-center items-center mt-24 lg:mt-0 relative'>
                <motion.div 
                    style={{ 
                        y: springVanY,
                        rotateY: vanRotate,
                        scale: vanScale,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative perspective-2000 w-full flex justify-center"
                >
                    {/* Shadow & Glow */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-black/10 blur-3xl rounded-full scale-y-50" />
                    <div className="absolute inset-0 bg-[#00CCF8]/10 blur-[150px] rounded-full -z-10" />
                    
                    <motion.img 
                        ref={vanRef} 
                        initial={{ rotateY: -20 }}
                        whileHover={{ rotateY: 0, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="w-full max-w-5xl h-auto object-contain relative z-10 filter drop-shadow-[0_40px_60px_rgba(0,0,0,0.2)] cursor-pointer" 
                        src={van} 
                        alt="Monster Steamer Van" 
                    />
                    
                    {/* Floating elements for 3D depth */}
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 glass px-6 py-3 rounded-2xl border border-white/20 shadow-xl z-20"
                    >
                        <p className="text-[#00CCF8] font-black text-xl">PRO CLEAN</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Off;


