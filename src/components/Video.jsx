import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { revealOnScroll } from "../utils/gsapUtils";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(".video-reveal", sectionRef.current);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-white py-20 md:py-32"
    >
      <div className="container-tight mb-12 md:mb-16 text-center video-reveal">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#00CCF8] font-black uppercase tracking-[0.4em] text-[10px] md:text-sm mb-6 block"
        >
          Process Video
        </motion.span>
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.8] text-[#153339]">
          Monster <span className="text-gradient">Performance.</span>
        </h2>
        <p className="text-slate-500 mt-6 text-lg md:text-xl font-medium max-w-2xl mx-auto px-4">
          Watch how we bring the deep-clean power of our monster trucks to your home.
        </p>
      </div>

      <motion.div
        style={{ scale, rotateX: rotate }}
        className="w-full max-w-[1200px] relative group px-4 md:px-12"
      >
        <div className="relative w-full aspect-video rounded-[2rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[16px] lg:border-[24px] border-[#153339] shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-slate-900">
          {!isPlaying ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(true)}
                className="relative z-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#00CCF8] flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,204,248,0.4)]"
              >
                <div className="absolute inset-0 rounded-full bg-[#00CCF8] animate-ping opacity-20"></div>
                <FaPlay className="text-xl md:text-3xl translate-x-1" />
              </motion.button>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-20 mt-6 text-white font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px]"
              >
                Experience the deep clean
              </motion.p>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="../assets/monster-carpet-high.mp4"
              title="Monster Steamer Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00CCF8]/10 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2 opacity-50">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00CCF8] animate-pulse"></div>
            <span className="text-white text-[8px] font-black uppercase tracking-widest">
              Live Performance
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Video;
