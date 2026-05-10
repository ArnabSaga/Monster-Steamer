import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import videoBg from "../assets/Hero/Video.gif";
import CallUsToday from "../assets/Hero/CallUsToday.png";
import CallIcon from "../assets/Hero/CallIcon.png";

const Hero = ({ triggerAnimation }) => {
    const videoBgRef = useRef(null);
    const containerRef = useRef(null);
    
    // Parallax & Scroll Effects
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const rotateX_scroll = useTransform(scrollYProgress, [0, 1], [0, 10]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    // 3D Tilt Effect for Video Preview
    const x = useMotionValue(0);
    const y_tilt = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y_tilt);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y_tilt.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y_tilt.set(0);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text Stagger Reveal
            gsap.from(".hero-title-word", {
                y: 150,
                opacity: 0,
                rotateX: -45,
                duration: 1.5,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.5
            });

            // Subtext & CTA Reveal
            gsap.from(".hero-sub", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 1.2,
                ease: "power3.out"
            });

            // Background Blob Animation
            gsap.to(".bg-blob", {
                x: "random(-50, 50)",
                y: "random(-50, 50)",
                scale: "random(0.8, 1.2)",
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative pt-40 pb-24 overflow-hidden min-h-screen flex items-center justify-center bg-white">
            {/* Background elements */}
            <div className="bg-blob absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#00CCF8]/5 blur-[120px] rounded-full" />
            <div className="bg-blob absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#00A3C7]/5 blur-[120px] rounded-full" />
            <div className="bg-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50/50 blur-[150px] rounded-full -z-10" />

            <motion.div 
                style={{ y, rotateX: rotateX_scroll, opacity }}
                className="section-padding flex flex-col items-center text-center relative z-10 perspective-2000"
            >
                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    <motion.div 
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="hero-image-wrap group relative"
                    >
                        <div
                            className="w-72 h-44 md:w-[450px] md:h-64 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] cursor-pointer border-8 border-white backdrop-blur-sm relative z-10"
                            ref={videoBgRef}
                            onClick={() => triggerAnimation(videoBgRef.current)}
                        >
                            <img src={videoBg} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="Carpet Cleaning" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 flex items-center justify-center">
                                 <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-2xl flex items-center justify-center text-white border border-white/40 shadow-2xl"
                                 >
                                    <svg className="w-10 h-10 fill-current translate-x-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                 </motion.div>
                            </div>
                        </div>
                        {/* Shadow element for 3D effect */}
                        <div className="absolute inset-4 bg-black/10 blur-3xl -z-10 translate-z-[-50px]" />
                    </motion.div>

                    <div className="flex flex-col items-start text-left">
                        <div className="overflow-hidden">
                            <h1 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.7] flex gap-4">
                                <span className="hero-title-word text-gradient">Carpet</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 mb-20">
                    <div className="overflow-hidden">
                        <h1 className="hero-title-word text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.7]">
                            <span className="text-[#153339]">Cleaning</span> <span className="text-gradient">In</span>
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-title-word text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.7] text-[#153339]">
                            SAN DIEGO.
                        </h1>
                    </div>
                </div>

                <div className="hero-sub max-w-4xl text-slate-500 text-2xl md:text-3xl leading-relaxed mb-20 font-medium px-4">
                    <p>Elevate your space with <span className="text-[#153339] font-black italic">Monster</span> performance. We bring professional-grade hygiene to <span className="text-[#00CCF8] font-black underline decoration-4 underline-offset-8">residential</span> & commercial spaces across San Diego.</p>
                </div>

                <div className="hero-sub flex flex-col md:flex-row items-center gap-16">
                    <motion.button 
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary px-16 py-8 text-2xl font-black uppercase tracking-widest shadow-[0_20px_60px_rgba(0,204,248,0.4)]"
                    >
                        Book Your Cleaning
                    </motion.button>
                    
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-8 group cursor-pointer bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 shadow-sm"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="w-24 h-24"
                            >
                                <img className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-500" src={CallUsToday} alt="call" />
                            </motion.div>
                            <img className="absolute inset-0 w-10 h-10 m-auto drop-shadow-2xl animate-pulse" src={CallIcon} alt="call icon" />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-black text-[#00CCF8] uppercase tracking-[0.4em] mb-1">Expert Support</p>
                            <p className="text-3xl font-black text-[#153339] tracking-tighter group-hover:text-[#00CCF8] transition-colors leading-none">(619) 201-9480</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

Hero.propTypes = {
    triggerAnimation: PropTypes.func.isRequired,
};

export default Hero;


