import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoWhite from "../assets/Logo-light.png";
import sanDiego from "../assets/Service-Area/San-Diego.jpg";

import { CiLocationOn } from "react-icons/ci";
import { FaChevronRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";

import footer from "../assets/Footer/Homeadvisor-approved.png";
import footerIcon from "../assets/Monster/Frame40.png";

import gsap from "gsap";
import { Link } from "react-router-dom";
import { Star } from "./icon";

const Footer = () => {
  const [hoveredArea, setHoveredArea] = useState(null);
  const footerRef = useRef(null);

  const areas = [
    "San Diego",
    "Oceanside",
    "Escondido",
    "Del Mar",
    "Miramar",
    "Rancho Bernardo",
    "Carlsbad",
    "El Cajon",
    "Fallbrook",
    "Miramesa",
    "National City",
    "Vista",
    "Bonsall",
    "Encinitas",
    "La Jolla",
    "Ramona",
    "Chula Vista",
  ];

  const footerLinks = {
    about: ["Area We Serve", "Subscription", "Career", "Deals", "Blog"],
    services: [
      "Carpet Cleaning",
      "Upholstery Cleaning",
      "Tile & Grout",
      "Commercial",
      "Water Damage",
    ],
  };

  useEffect(() => {
    if (hoveredArea) {
      gsap.to("#sanDiegoImage", { opacity: 0.3, scale: 1.1, duration: 0.8, ease: "power2.out" });
    } else {
      gsap.to("#sanDiegoImage", { opacity: 0, scale: 1, duration: 0.8, ease: "power2.out" });
    }
  }, [hoveredArea]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative mt-32 md:mt-60" ref={footerRef}>
      {/* Area We Serve Section - Modernized 3D Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-7xl z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false }}
          className="relative rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#00CCF8] to-[#0099BA] p-8 md:p-16 overflow-hidden shadow-[0_30px_100px_rgba(0,204,248,0.4)] perspective-2000"
        >
          <div
            id="sanDiegoImage"
            className="absolute inset-0 opacity-0 pointer-events-none transition-all duration-700"
          >
            <img src={sanDiego} alt="San Diego" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#00CCF8]/60 to-[#001D24]/80"></div>
          </div>

          <div className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-white/30"
            >
              Locations
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-black uppercase tracking-tighter mb-12 leading-[0.9]">
              Areas We <span className="text-white/40">Serve</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
              {areas.map((area, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    color: "#00CCF8",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md text-white font-black uppercase text-[9px] md:text-[10px] tracking-widest transition-colors border border-white/20 flex items-center gap-2"
                  onMouseEnter={() => setHoveredArea(area)}
                  onMouseLeave={() => setHoveredArea(null)}
                >
                  {area}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/20 rounded-full blur-[80px]"></div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <footer className="w-full bg-[#001D24] pt-48 md:pt-64 lg:pt-80 pb-12 md:pb-16 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-24">
            {/* Brand Column */}
            <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.img
                variants={itemVariants}
                className="w-40 md:w-48 mb-8 md:mb-10"
                src={logoWhite}
                alt="Monster Steamer Logo"
              />
              <motion.p
                variants={itemVariants}
                className="text-slate-400 font-medium leading-relaxed mb-10 text-sm md:text-base lg:text-lg lg:pr-8 tracking-wide max-w-md lg:max-w-none"
              >
                San Diego&apos;s most trusted premium cleaning service since 2010. We use
                state-of-the-art equipment and eco-friendly solutions to ensure your home is safer,
                cleaner, and healthier.
              </motion.p>
              <motion.div variants={itemVariants} className="flex gap-4">
                {[
                  { icon: FaFacebook, link: "#" },
                  { icon: FaInstagram, link: "#" },
                ].map((item, i) => (
                  <motion.a
                    href={item.link}
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#00CCF8] border border-white/10 hover:border-[#00CCF8]/50 hover:bg-[#00CCF8]/10 transition-all duration-300"
                  >
                    <item.icon className="text-lg md:text-xl" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <motion.div variants={itemVariants} className="text-center sm:text-left">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-6 md:mb-8 flex items-center justify-center sm:justify-start gap-3">
                  <span className="hidden sm:block w-8 h-px bg-[#00CCF8]"></span>
                  Explore
                </h4>
                <ul className="space-y-4">
                  {footerLinks.about.map((link) => (
                    <li key={link}>
                      <Link
                        to="#"
                        className="text-slate-400 hover:text-[#00CCF8] font-bold transition-all flex items-center justify-center sm:justify-start gap-2 group"
                      >
                        <FaChevronRight className="text-[10px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all hidden sm:block" />
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center sm:text-left">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-6 md:mb-8 flex items-center justify-center sm:justify-start gap-3">
                  <span className="hidden sm:block w-8 h-px bg-[#00CCF8]"></span>
                  Services
                </h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link}>
                      <Link
                        to="#"
                        className="text-slate-400 hover:text-[#00CCF8] font-bold transition-all flex items-center justify-center sm:justify-start gap-2 group"
                      >
                        <FaChevronRight className="text-[10px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all hidden sm:block" />
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center sm:text-left">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-6 md:mb-8 flex items-center justify-center sm:justify-start gap-3">
                  <span className="hidden sm:block w-8 h-px bg-[#00CCF8]"></span>
                  Contact Us
                </h4>
                <div className="space-y-6">
                  <a href="tel:6192019480" className="flex items-center justify-center sm:justify-start gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#00CCF8] group-hover:bg-[#00CCF8] group-hover:text-white border border-white/10 group-hover:border-[#00CCF8] transition-all duration-500">
                      <IoIosCall className="text-lg md:text-xl" />
                    </div>
                    <div className="text-left">
                      <p className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-0.5">
                        Call Now
                      </p>
                      <span className="text-white font-bold tracking-tight text-base md:text-lg group-hover:text-[#00CCF8] transition-colors">
                        (619) 201-9480
                      </span>
                    </div>
                  </a>
                  <a
                    href="mailto:info@monstersteamer.net"
                    className="flex items-center justify-center sm:justify-start gap-4 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#00CCF8] group-hover:bg-[#00CCF8] group-hover:text-white border border-white/10 group-hover:border-[#00CCF8] transition-all duration-500">
                      <IoIosMail className="text-lg md:text-xl" />
                    </div>
                    <div className="text-left">
                      <p className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-0.5">
                        Email Us
                      </p>
                      <span className="text-white font-bold tracking-tight group-hover:text-[#00CCF8] transition-colors text-sm md:text-base">
                        info@monstersteamer.net
                      </span>
                    </div>
                  </a>
                  <div className="flex items-center justify-center sm:justify-start gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#00CCF8] border border-white/10 group-hover:border-[#00CCF8]/50 transition-all duration-500">
                      <CiLocationOn className="text-lg md:text-xl" />
                    </div>
                    <div className="text-left">
                      <p className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-0.5">
                        Visit Us
                      </p>
                      <span className="text-white font-bold tracking-tight text-sm md:text-base">San Diego, CA.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar - Refined Alignment */}
          <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Trust Badges */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-8">
                <img
                  className="h-8 md:h-10 brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  src={footer}
                  alt="Homeadvisor"
                />
                <img
                  className="h-6 md:h-8 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  src={footerIcon}
                  alt="Cards"
                />
              </div>

              <div className="w-px h-8 bg-white/10 hidden md:block"></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl flex items-center gap-4 border border-white/10 shadow-2xl group cursor-default"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#00CCF8]" />
                  ))}
                </div>
                <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">
                  1200+ Trusted Reviews
                </span>
              </motion.div>
            </div>

            {/* Copyright Info */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                © 2024 <span className="text-[#00CCF8]">Monster Steamer</span> Carpet Cleaning
              </p>
              <p className="text-slate-500 text-[9px] font-medium uppercase tracking-[0.3em]">
                Built with Precision by{" "}
                <span className="text-white/60 text-xs">Jeremy Ellsworth Designs LLC</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual Accent */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-[#00CCF8]/5 to-transparent blur-[120px] pointer-events-none"></div>
      </footer>
    </div>
  );
};

export default Footer;
