import { useState } from 'react';
import { AfterBefore, Feature, FeedBack, Footer, Hero, Navbar, Off, Serivces, Video, Why } from '../components';
import { gsap } from "gsap";

const Home = () => {
    const [animateVideoBg, setAnimateVideoBg] = useState(null);

    const triggerAnimation = (videoElement) => {
        const animateVideoBg = (targetElement) => {
            const videoBounds = videoElement.getBoundingClientRect();
            const targetBounds = targetElement.getBoundingClientRect();
            const tl = gsap.timeline();

            tl.fromTo(videoElement, {
                x: videoBounds.left,
                y: videoBounds.top,
                width: videoBounds.width,
                height: videoBounds.height
            }, {
                x: targetBounds.left,
                y: targetBounds.top,
                width: targetBounds.width,
                height: targetBounds.height,
                duration: 1,
                ease: "power3.inOut"
            });

            tl.to(videoElement, {
                autoAlpha: 0,
                duration: 0.5,
                onComplete: () => {
                    videoElement.style.display = "none";
                }
            });
        };

        setAnimateVideoBg(() => animateVideoBg);
    };

    return (
        <div>
            <Navbar />
            <Hero triggerAnimation={triggerAnimation} />
            <Feature animateVideoBg={animateVideoBg} />
            <Serivces />
            <Why />
            <Video />
            <FeedBack />
            <AfterBefore />
            <Off />
            <Footer />
        </div>
    );
};

export default Home;
