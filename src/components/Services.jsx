import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { MdArrowOutward, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { revealOnScroll } from "../utils/gsapUtils";

import AirDuctCleaning from "../assets/Quality-Service/AirDuct.jpg";
import CarpetCleaningService from "../assets/Quality-Service/CarpetCleaningService.jpg";
import PetOdorRemoval from "../assets/Quality-Service/PetOdorRemoval.jpg";
import TileGroutCleaningService from "../assets/Quality-Service/TileGroutCleaningService.jpg";
import UpholsteryCleaningService from "../assets/Quality-Service/UpholsteryCleaningService.jpg";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX_scroll = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const springRotateX = useSpring(rotateX_scroll, { stiffness: 100, damping: 30 });

  const images = [
    {
      src: CarpetCleaningService,
      title: "Carpet Cleaning",
      description: "Say Goodbye To Stains & Odors",
    },
    {
      src: UpholsteryCleaningService,
      title: "Upholstery Cleaning",
      description: "Like New When We Finish",
    },
    {
      src: TileGroutCleaningService,
      title: "Tile & Grout Cleaning",
      description: "Make Your Floors Shine Again",
    },
    { src: PetOdorRemoval, title: "Pet Odor Removal", description: "No More Bad Pet Odors" },
    {
      src: AirDuctCleaning,
      title: "Air Duct Cleaning",
      description: "Breathe Clean Air You Deserve",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(".gsap-reveal", containerRef.current, {
        stagger: 0.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#153339] section-padding text-white overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-start md:items-end mb-16 md:mb-24 relative z-10">
        <div className="text-5xl sm:text-7xl md:text-9xl font-black uppercase leading-[0.9] md:leading-[0.8] tracking-tighter">
          <h2 className="gsap-reveal overflow-hidden">
            <span className="block">Quality</span>
          </h2>
          <h2 className="gsap-reveal text-[#00CCF8] overflow-hidden">
            <span className="block">Services</span>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-slate-400 text-lg md:text-xl mb-8 md:mb-10 gsap-reveal">
            Monster Steamer is the most trusted and professional cleaning service provider in the
            San Diego area.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-8 gsap-reveal">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-3 text-[#00CCF8] text-base md:text-lg font-bold hover:text-white transition-all group"
            >
              See Our Pricing{" "}
              <MdArrowOutward className="text-xl md:text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-3 text-[#00CCF8] text-base md:text-lg font-bold hover:text-white transition-all group"
            >
              Call Us (619) 201-9480{" "}
              <MdArrowOutward className="text-xl md:text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        style={{ rotateX: springRotateX }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="relative bg-[#002932] rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5 perspective-2000"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#00CCF8]/10 blur-[120px] rounded-full -z-10" />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-[#00CCF8]/40">
              Expertise
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
              >
                <h3 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-none">
                  {images[index].title}
                </h3>
                <p className="text-lg md:text-2xl text-slate-400 mb-8 md:mb-12 font-medium leading-relaxed">
                  {images[index].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 md:gap-6 mb-8 lg:mb-0">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#00CCF8",
                  color: "#fff",
                  borderColor: "#00CCF8",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-slate-700 flex items-center justify-center transition-colors duration-300"
                onClick={prevImage}
              >
                <MdKeyboardArrowLeft className="text-3xl md:text-5xl" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#00CCF8",
                  color: "#fff",
                  borderColor: "#00CCF8",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-slate-700 flex items-center justify-center transition-colors duration-300"
                onClick={nextImage}
              >
                <MdKeyboardArrowRight className="text-3xl md:text-5xl" />
              </motion.button>
            </div>
          </div>

          <div className="flex-1 w-full relative h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15, z: -100 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotateY: 15, z: 100 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                  src={images[index].src}
                  alt={images[index].title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8 md:p-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-[#00CCF8]">
                      {images[index].title}
                    </div>
                    <div className="w-12 md:w-20 h-1 bg-[#00CCF8] mt-4 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
