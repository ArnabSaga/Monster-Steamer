import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Standard text/element reveal on scroll
 */
export const revealOnScroll = (selector, container, options = {}) => {
  return gsap.from(selector, {
    y: options.y || 100,
    opacity: 0,
    duration: options.duration || 1.2,
    stagger: options.stagger || 0.2,
    ease: options.ease || 'power4.out',
    scrollTrigger: {
      trigger: container || selector,
      start: options.start || 'top 85%',
      toggleActions: options.toggleActions || 'play reverse play reverse',
      ...options.scrollTrigger
    },
    ...options
  });
};

/**
 * Premium vehicle entry animation (45-degree angle)
 */
export const vehicleEntry = (element, container, options = {}) => {
  return gsap.fromTo(element, 
    { 
        x: options.startX || 1000, 
        y: options.startY || -600, 
        opacity: 0,
        rotate: options.startRotate || -35,
        scale: options.startScale || 0.4
    }, 
    { 
        x: 0, 
        y: 0, 
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: options.duration || 2.2, 
        ease: options.ease || 'power4.out',
        scrollTrigger: {
            trigger: container || element,
            start: options.start || 'top 80%',
            toggleActions: options.toggleActions || 'play reverse play reverse',
            ...options.scrollTrigger
        },
        ...options
    }
  );
};
