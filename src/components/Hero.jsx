import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import videoBg from "../assets/Hero/Video.gif";
import CallUsToday from "../assets/Hero/CallUsToday.png";
import CallIcon from "../assets/Hero/CallIcon.png";
import { FaPlay } from "react-icons/fa";

const Hero = ({ triggerAnimation }) => {
    const containerRef = useRef(null);
    const videoBgRef = useRef(null);

    // Parallax & Scroll Effects
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityScroll = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // 3D Tilt Effect for Video Preview
    const x = useMotionValue(0);
    const y_tilt = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y_tilt);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
        <section ref={containerRef} className="relative w-full min-h-screen pt-32 md:pt-40 lg:pt-48 pb-20 overflow-hidden bg-white">
            {/* Background elements */}
            <div className="bg-blob absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00CCF8]/5 blur-[80px] md:blur-[120px] rounded-full" />
            <div className="bg-blob absolute bottom-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00A3C7]/5 blur-[80px] md:blur-[120px] rounded-full" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <motion.div
                    style={{ y: yParallax, opacity: opacityScroll }}
                    className="flex flex-col items-center text-center perspective-2000"
                >
                    {/* Main Title Section */}
                    <div className="flex flex-col items-center mb-8 md:mb-20">
                        <h1 className="flex flex-col items-center">
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-4 md:mb-6">
                                <motion.div
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                                    className="group relative"
                                >
                                    <div
                                        className="w-48 h-32 sm:w-64 sm:h-40 md:w-[400px] md:h-56 lg:w-[450px] lg:h-64 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer border-4 md:border-8 border-white backdrop-blur-sm relative z-10"
                                        ref={videoBgRef}
                                        onClick={() => triggerAnimation(videoBgRef.current)}
                                    >
                                        <img src={videoBg} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="Carpet Cleaning" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 flex items-center justify-center">
                                             <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-2xl flex items-center justify-center text-white border border-white/40 shadow-2xl"
                                             >
                                                <FaPlay className="text-xl md:text-3xl translate-x-1" />
                                             </motion.div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-4 bg-black/10 blur-3xl -z-10 translate-z-[-50px]" />
                                </motion.div>

                                <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.7] text-[#153339]">
                                    <span className="text-gradient">Carpet</span>
                                </span>
                            </div>

                            <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.7] mb-4 md:mb-6">
                                <span className="text-[#153339]">Cleaning</span> <span className="text-gradient">In</span>
                            </span>

                            <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.7] text-[#153339]">
                                SAN DIEGO.
                            </span>
                        </h1>
                    </div>

                    {/* Subtext */}
                    <div className="max-w-4xl text-slate-500 text-lg md:text-2xl lg:text-3xl leading-relaxed mb-16 md:mb-24 font-medium px-4">
                        <p>Elevate your space with <span className="text-[#153339] font-black italic">Monster</span> performance. We bring professional-grade hygiene to <span className="text-[#00CCF8] font-black underline decoration-4 underline-offset-8">residential</span> & commercial spaces across San Diego.</p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary w-full md:w-auto px-10 md:px-16 py-6 md:py-8 text-xl md:text-2xl font-black uppercase tracking-widest shadow-[0_20px_60px_rgba(0,204,248,0.4)]"
                        >
                            Book Your Cleaning
                        </motion.button>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-6 md:gap-8 group cursor-pointer bg-slate-50 p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm w-full md:w-auto"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="w-16 h-16 md:w-24 md:h-24"
                                >
                                    <img className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-500" src={CallUsToday} alt="call" />
                                </motion.div>
                                <img className="absolute inset-0 w-8 h-8 md:w-10 md:h-10 m-auto drop-shadow-2xl animate-pulse" src={CallIcon} alt="call icon" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] md:text-xs font-black text-[#00CCF8] uppercase tracking-[0.4em] mb-1">Expert Support</p>
                                <p className="text-xl md:text-3xl font-black text-[#153339] tracking-tighter group-hover:text-[#00CCF8] transition-colors leading-none">(619) 201-9480</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Ribbon */}
                    <div className="w-full mt-24 md:mt-32 lg:mt-40 border-y border-slate-100 py-8 overflow-hidden whitespace-nowrap">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex gap-12 md:gap-20"
                        >
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="flex items-center gap-12 md:gap-20">
                                    <span className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-slate-100 hover:text-[#00CCF8]/20 transition-colors cursor-default">Deep Clean</span>
                                    <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#00CCF8]/20"></div>
                                    <span className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-slate-100 hover:text-[#00CCF8]/20 transition-colors cursor-default">Restore</span>
                                    <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#00CCF8]/20"></div>
                                    <span className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-slate-100 hover:text-[#00CCF8]/20 transition-colors cursor-default">Sanitize</span>
                                    <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#00CCF8]/20"></div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    triggerAnimation: PropTypes.func.isRequired,
};

export default Hero;
