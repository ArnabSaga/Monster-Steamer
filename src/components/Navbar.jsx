import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaBars, FaChevronDown, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo-Dark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  const navHeight = useTransform(scrollY, [0, 50], [110, 85]);
  const navPadding = useTransform(scrollY, [0, 50], ["2.5rem", "1.2rem"]);
  const navShadow = useTransform(scrollY, [0, 50], ["none", "0 20px 60px rgba(0,0,0,0.08)"]);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      dropdown: [
        "Carpet Cleaning",
        "Upholstery Cleaning",
        "Tile & Grout",
        "Commercial",
        "Water Damage",
      ],
    },
    { name: "Expertise", href: "#" },
    { name: "Subscription", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        style={{
          height: navHeight,
          paddingTop: navPadding,
          paddingBottom: navPadding,
          boxShadow: navShadow,
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 flex items-center ${
          scrolled ? "bg-white/95 backdrop-blur-2xl border-b border-slate-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-between items-center relative">
          {/* Brand */}
          <Link to="/" className="relative z-[60] group">
            <motion.img
              whileHover={{ scale: 1.05, rotate: -2 }}
              src={logo}
              alt="Monster Steamer"
              className={`h-10 md:h-12 transition-all duration-500 ${!scrolled && location.pathname === "/" ? "" : ""}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group px-5 py-2"
                onMouseEnter={() => {
                  setHoveredLink(link.name);
                  if (link.dropdown) setActiveDropdown(link.name);
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                  setActiveDropdown(null);
                }}
              >
                <Link
                  to={link.href}
                  className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 py-2 flex items-center gap-2 ${
                    hoveredLink && hoveredLink !== link.name
                      ? "opacity-30 blur-[1px]"
                      : "opacity-100"
                  } text-slate-800`}
                >
                  {link.name}
                  {link.dropdown && (
                    <FaChevronDown className="text-[9px] transition-transform duration-500 group-hover:rotate-180" />
                  )}

                  {/* Link Indicator */}
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#00CCF8] rounded-full group-hover:w-full transition-all duration-500" />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6"
                    >
                      <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-slate-100 min-w-[280px]">
                        <div className="flex flex-col gap-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item}
                              to="#"
                              className="flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-[#00CCF8] hover:text-white transition-all duration-300 group/item"
                            >
                              <span className="text-[11px] font-black uppercase tracking-widest">
                                {item}
                              </span>
                              <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-6 relative z-[60]">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="tel:6192019480"
              className="hidden sm:flex items-center gap-4 bg-[#00CCF8] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-2xl shadow-[#00CCF8]/40 border border-white/20 transition-all"
            >
              <div className="text-right hidden xl:block">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-60 leading-none mb-1 text-white">
                  Emergency Call
                </p>
                <p className="text-sm font-black tracking-tighter leading-none text-white">
                  (619) 201-9480
                </p>
              </div>
              <FaPhoneAlt className="text-base md:text-lg text-white" />
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                scrolled || isOpen
                  ? "bg-[#00CCF8] text-white border-[#00CCF8] shadow-xl shadow-[#00CCF8]/30"
                  : "bg-slate-800/5 text-slate-800 backdrop-blur-md border-slate-200"
              }`}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#001D24] lg:hidden overflow-hidden"
          >
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00CCF8]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00CCF8]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full p-8">
              {/* Overlay Header */}
              <div className="flex justify-between items-center pt-4 mb-12">
                <img src={logo} alt="Monster Steamer" className="h-10 filter brightness-0 invert opacity-80" />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-14 h-14 rounded-2xl bg-[#00CCF8] text-white flex items-center justify-center text-xl shadow-lg shadow-[#00CCF8]/20"
                >
                  <FaTimes />
                </button>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter hover:text-[#00CCF8] transition-all flex items-center gap-4 sm:gap-6 group"
                    >
                      <span className="text-[#00CCF8]/20 group-hover:text-[#00CCF8] transition-colors">
                        /
                      </span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6 sm:gap-8">
                <a href="tel:6192019480" className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-[#00CCF8]/10 flex items-center justify-center text-[#00CCF8] border border-[#00CCF8]/20">
                    <FaPhoneAlt className="text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">
                      Get a Quote
                    </p>
                    <p className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                      (619) 201-9480
                    </p>
                  </div>
                </a>

                <button className="w-full bg-[#00CCF8] text-white py-6 sm:py-8 rounded-2xl sm:rounded-[2.5rem] text-xl sm:text-2xl font-black uppercase tracking-widest shadow-[0_20px_50px_rgba(0,204,248,0.4)]">
                  Book Online Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
