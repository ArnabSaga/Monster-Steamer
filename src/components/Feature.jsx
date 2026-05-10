import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { revealOnScroll } from "../utils/gsapUtils";

import videoBg from "../assets/Hero/Video.gif";
import Bubble from "../assets/Bubble.png";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef(null);
    const imageContainerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // 3D Parallax Effects
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
    const springY = useSpring(yParallax, { stiffness: 100, damping: 30 });
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealOnScroll(".feature-reveal", sectionRef.current);

            // Counter animation for stats
            gsap.from(".stat-value", {
                textContent: 0,
                duration: 2,
                ease: "power3.out",
                snap: { textContent: 1 },
                stagger: 0.2,
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 85%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const stats = [
        { label: "Since", value: "2010", suffix: "", desc: "Providing the same level of quality service", color: "from-blue-500 to-cyan-400" },
        { label: "Operate", value: "3", suffix: "", desc: "Trucks for fast & reliable cleaning service", color: "from-indigo-500 to-blue-400" },
        { label: "Over", value: "8000", suffix: "+", desc: "Home & Businesses trust us for cleaning", color: "from-cyan-500 to-teal-400" },
        { label: "4.9 Stars", value: "1200", suffix: "+", desc: "Homeowners reviewed us on internet", color: "from-teal-500 to-emerald-400" }
    ];

    return (
        <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#00CCF8]/5 blur-[150px] rounded-full -z-10" />
            
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                <div className="w-full lg:w-1/2">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="inline-block px-5 py-2 rounded-full bg-[#00CCF8]/10 text-[#00CCF8] text-xs font-black uppercase tracking-[0.3em] mb-8"
                    >
                        Our Impact
                    </motion.div>
                    
                    <h2 className="feature-reveal text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-20">
                        Serving the <span className="text-gradient">Community</span> for Over a Decade
                    </h2>
                    
                    <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {stats.map((stat, i) => (
                            <div key={i} className="relative group feature-reveal">
                                <div className={`absolute -left-4 top-0 w-1 h-full bg-gradient-to-b ${stat.color} opacity-30 rounded-full group-hover:scale-y-110 transition-transform`}></div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">{stat.label}</p>
                                <h3 className="text-7xl md:text-8xl font-black text-slate-900 mb-4 tracking-tighter flex items-baseline">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="text-[#00CCF8] text-5xl ml-1">{stat.suffix}</span>
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed max-w-[220px]">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div 
                    ref={imageContainerRef}
                    style={{ y: springY, scale, rotateX }}
                    className="w-full lg:w-1/2 relative perspective-2000"
                >
                    <div className="relative rounded-[4rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.15)] aspect-[4/5] border border-slate-100 group">
                        <img src={videoBg} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Carpet Cleaning Video" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        <motion.div 
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute bottom-10 left-10 right-10 p-10 glass rounded-[3rem] border border-white/20 shadow-2xl backdrop-blur-3xl"
                        >
                            <div className="flex items-center gap-6">
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center shadow-xl group cursor-pointer"
                                >
                                    <div className="w-6 h-6 bg-[#00CCF8] rounded-sm"></div>
                                </motion.div>
                                <div>
                                    <p className="text-white text-3xl font-black tracking-tight">Watch Our Process</p>
                                    <p className="text-white/70 text-lg font-medium">Professional Equipment in Action</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    <motion.img 
                        animate={{ 
                            y: [0, -30, 0],
                            rotate: [0, 15, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-20 -right-20 w-56 opacity-50 pointer-events-none select-none blur-[2px]" 
                        src={Bubble} 
                        alt="Bubble" 
                    />
                    
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#00CCF8] to-blue-400 rounded-full blur-[120px] opacity-20 -z-10 animate-pulse"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Feature;

