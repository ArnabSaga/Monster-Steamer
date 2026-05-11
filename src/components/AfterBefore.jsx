import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { revealOnScroll } from "../utils/gsapUtils";

import After1 from "../assets/Before&After/After1.jpg";
import After2 from "../assets/Before&After/After2.jpg";
import Before1 from "../assets/Before&After/Before1.jpg";
import Before2 from "../assets/Before&After/Before2.jpg";

gsap.registerPlugin(ScrollTrigger);

const ComparisonSlider = ({ before, after, label }) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(50);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - left) / width) * 100;
    mouseX.set(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((e.touches[0].clientX - left) / width) * 100;
    mouseX.set(Math.min(Math.max(position, 0), 100));
  };

  const clipPath = useTransform(smoothX, (value) => `inset(0 ${100 - value}% 0 0)`);

  return (
    <div className="group relative">
      <p className="text-[11px] sm:text-xs font-black text-[#00CCF8] uppercase tracking-[0.3em] mb-4 md:mb-6 ml-2 md:ml-4 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-[#00CCF8]/30"></span>
        {label}
      </p>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative aspect-video rounded-[1.5rem] md:rounded-[3rem] overflow-hidden cursor-ew-resize border border-slate-200 shadow-2xl"
      >
        {/* After Image (Background) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 px-4 md:px-6 py-1.5 md:py-2 bg-[#00CCF8]/90 backdrop-blur-md rounded-full text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest z-10 shadow-lg">
          After
        </div>

        {/* Before Image (Foreground with Clip) */}
        <motion.div style={{ clipPath }} className="absolute inset-0 z-10">
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 px-4 md:px-6 py-1.5 md:py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-lg">
            Before
          </div>
        </motion.div>

        {/* Slider Handle */}
        <motion.div
          style={{ left: useTransform(smoothX, (v) => `${v}%`) }}
          className="absolute inset-y-0 w-1 bg-white z-20 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-[#00CCF8]">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-[#00CCF8] rounded-full"></div>
              <div className="w-1 h-3 bg-[#00CCF8] rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Instructions Overlay (Show on hover) */}
        <div className="absolute inset-0 bg-[#00CCF8]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
          <div className="glass px-8 py-4 rounded-2xl border border-white/40 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-white font-black uppercase tracking-widest text-xs">
              Slide to compare
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ComparisonSlider.propTypes = {
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const AfterBefore = () => {
  const sectionRef = useRef(null);
  const comparisons = [
    { before: Before1, after: After1, label: "Residential Deep Clean" },
    { before: Before2, after: After2, label: "Commercial Restoration" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(".ab-reveal", sectionRef.current);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding w-full bg-slate-50 relative overflow-hidden"
    >
      <div className="container-tight">
        <div className="text-center mb-20 md:mb-32 ab-reveal">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-2 rounded-full bg-[#00CCF8]/10 text-[#00CCF8] text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-8"
          >
            Real Results
          </motion.div>

          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-12">
            <span className="block">The Monster</span>
            <span className="text-gradient">Difference</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-12 md:mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                className="btn-primary block sm:inline-block px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-black shadow-2xl shadow-[#00CCF8]/30"
                to="#"
              >
                See Our Pricing
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                className="block sm:inline-block px-8 sm:px-12 py-4 sm:py-5 border-4 border-slate-200 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm text-slate-600 hover:bg-slate-100 transition-colors"
                to="#"
              >
                Full Portfolio
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 ab-reveal">
          {comparisons.map((item, i) => (
            <ComparisonSlider key={i} {...item} />
          ))}
        </div>

        {/* Decorative Scroll Indicator */}
        <div className="flex flex-col items-center mt-32 gap-6 opacity-30 ab-reveal">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
            Interactive Gallery
          </p>
          <div className="w-1 h-20 bg-gradient-to-b from-[#00CCF8] to-transparent rounded-full relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 80, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterBefore;
