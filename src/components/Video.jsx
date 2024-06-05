import { useState, useRef } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { IoStopCircleOutline } from "react-icons/io5";

import videoBg from "../assets/monster-carpet-high.mp4";

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const handlePause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='w-full h-screen flex items-center justify-center relative'>
            <div className='w-4/5 h-4/5 relative'>
                <video 
                    ref={videoRef}
                    className='w-full mt-20 md:mt-0 h-full object-fill rounded-xl' 
                    src={videoBg} 
                    autoPlay 
                    loop 
                    muted 
                />
                <button 
                    className='absolute bottom-5 right-5 bg-[#00CCF8] text-white p-4 rounded-full flex items-center justify-center'
                    onClick={handlePause}
                >
                    {isPlaying ? <FaPlayCircle size={40} /> :  <IoStopCircleOutline size={40} />}
                </button>
            </div>
        </div>
    );
}

export default Video;
