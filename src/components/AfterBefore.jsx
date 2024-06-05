import { MdArrowOutward } from 'react-icons/md';
import Before1 from "../assets/Before&After/Before1.jpg";
import Before2 from "../assets/Before&After/Before2.jpg";
import After1 from "../assets/Before&After/After1.jpg";
import After2 from "../assets/Before&After/After2.jpg";
import { Link } from 'react-router-dom';

const AfterBefore = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='flex flex-col items-center pt-28 px-4 md:px-0'>
                <h1 className='text-[#153339] text-4xl md:text-6xl uppercase font-bold pb-8 md:pb-12'>Before & After</h1>
                <div className='flex flex-col md:flex-row gap-5'>
                    <Link className='flex gap-2 text-[#153339] items-center' to="#">
                        See Our Pricing<MdArrowOutward />
                    </Link>
                    <Link className='flex gap-2 text-[#153339] items-center' to="#">
                        See Our Pricing<MdArrowOutward />
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center mt-16 px-6 gap-4'>
                    <div className='flex flex-col md:flex-row items-center gap-0.5'>
                        <div className='relative'>
                            <img className='rounded-md w-full md:w-auto' src={Before1} alt="Before" />
                            <p className='px-1 py-1.5 bg-[#5B757DB2] text-xs text-white rounded-lg absolute bottom-2 left-2'>Before</p>
                        </div>
                        <div className='h-1 md:h-56 w-full md:w-1 bg-[#00CCF8]'></div>
                        <div className='relative'>
                            <img className='rounded-md w-full md:w-auto' src={After1} alt="After" />
                            <p className='px-1 py-1.5 bg-[#5B757DB2] text-xs text-white rounded-lg absolute bottom-2 left-2'>After</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-0.5'>
                        <div className='relative'>
                            <img className='rounded-md w-full md:w-auto' src={Before2} alt="Before" />
                            <p className='px-1 py-1.5 bg-[#5B757DB2] text-xs text-white rounded-lg absolute bottom-2 left-2'>Before</p>
                        </div>
                        <div className='h-1 md:h-56 w-full md:w-1 bg-[#00CCF8]'></div>
                        <div className='relative'>
                            <img className='rounded-md w-full md:w-auto' src={After2} alt="After" />
                            <p className='px-1 py-1.5 bg-[#5B757DB2] text-xs text-white rounded-lg absolute bottom-2 left-2'>After</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-20 gap-4'>
                    <div className='h-0.5 w-24 md:w-48 bg-[#153339]'></div>
                    <div className='h-0.5 w-24 md:w-48 bg-[#00CCF8]'></div>
                    <div className='h-0.5 w-24 md:w-48 bg-[#153339]'></div>
                </div>
            </div>
        </div>
    );
}

export default AfterBefore;
