import React, { useEffect, useRef, useState } from 'react';
import { FaPlayCircle,FaPauseCircle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import PosterImg from "../../assets/images/poster.png";
import { IoIosShareAlt } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import postVideo from '../../assets/videos/video1.mp4'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const PostCard = ({type}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isActionDropdownOpen, setisActionDropdownOpen] = useState(false)
    const videoRef = useRef(null); 
    const actionDropdownRef = useRef()
    const actionDropdownButtonRef = useRef()

    const togglePlayPause = () => {
        if(videoRef.current){
            if(isPlaying){
                videoRef.current.pause();
            }else{
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    const handleActionDropdown = () => {
        setisActionDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                actionDropdownRef.current &&
                !actionDropdownRef.current.contains(event.target) &&
                actionDropdownButtonRef.current &&
                !actionDropdownButtonRef.current.contains(event.target)
            ) {
                setisActionDropdownOpen(false);
            }
        };

        if (isActionDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActionDropdownOpen])
    
  return (
    <div className='py-5 px-6 custom-2xl:p-5 custom-xl:p-4 bg-white rounded-[8px] post-card mb-7 custom-2xl:mb-4 custom-xl:mb-4 custom-lg:mb-4 max-md:mb-5 custom-sm:!p-4 custom-xs:!p-4'>
        {/* Profile Section */} 
        <div className='flex items-start justify-between'>
            <div className='flex items-start gap-4 custom-2xl:gap-3 custom-xl:gap-3'>
                <img className='h-10 w-10 min-w-10 rounded-full object-cover' src={PosterImg} alt="poster-img" />
                <div>
                    <h3 className='text-[20px] custom-2xl:text-[17px] custom-xl:text-[17px] custom-sm:text-[17px] custom-xs:text-[17px] font-semibold text-themeBlack'>Design team move.</h3>
                    <p className='mt-1 custom-2xl:mt-[2px] custom-xl:mt-[2px] custom-sm:mt-[2px] custom-xs:mt-[2px] text-sm text-themeBlack font-semibold'>Sania Amal <span className='text-[#767676] text-[12px]'>(Individual)</span></p>
                    <p className='mt-2 custom-2xl:mt-1 custom-xl:mt-1 custom-sm:mt-1 custom-xs:mt-1 text-sm text-themeBlack'>3 days ago</p>
                </div>
            </div>
            {/* action  */}
            <div className='relative'>
                <p className='cursor-pointer' onClick={handleActionDropdown} ref={actionDropdownButtonRef}><HiOutlineDotsHorizontal /></p>
                {/* action dropdown  */}
                <ul className={`absolute right-0 w-[160px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.14)] py-2 rounded-[8px] duration-200 ease-in-out ${isActionDropdownOpen === true ? 'opacity-100 visible top-4' : 'opacity-0 invisible top-5'}`} ref={actionDropdownRef}>
                    <li>
                        <Link className='px-4 text-sm block py-1 duration-200 ease-in-out hover:text-primaryColor' to={'/'}>Report post</Link>
                    </li>
                    <li>
                        <Link className='px-4 text-sm block py-1 duration-200 ease-in-out hover:text-primaryColor' to={'/'}>Leave Movement</Link>
                    </li>
                </ul>
            </div>
        </div>
      
      {/* Post Title */}
      <h2 className="mt-4 font-semibold text-lg text-gray-900 custom-2xl:text-base custom-xl:text-base custom-2xl:font-medium custom-xl:font-medium custom-sm:text-base custom-xs:text-sm custom-sm:font-medium custom-xs:font-medium">
        Public Speaking Practice Workshop for All Level People from February
      </h2>
      {/* Media Section */}
      <div className='relative mt-4 media'>
        <video className='w-full h-[392px] custom-2xl:h-[300px] custom-xl:h-[300px] custom-sm:h-[300px] custom-xs:h-[250px] rounded-[10px] object-cover' ref={videoRef} controls={isPlaying} >
            <source src={postVideo} />
        </video>
        <button className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[40px] text-sidebarIconColor duration-100 ease-in-out ${isPlaying ? 'opacity-0' : 'opacity-100'}`} onClick={togglePlayPause}>
        {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
        </button>
      </div>
      {/* engagement options  */}
      <div className='flex items-center justify-between mt-4'>
        {/* views  */}
        <Link to={'/post/1'} className='flex items-center gap-2 cursor-pointer engagement-option'>
            <p className='text-[20px] custom-xs:text-base'>
                <IoEyeOutline />
            </p>
            <p className='text-sm text-themeBlack'>
                5k <span className='custom-xs:hidden'>views</span>
            </p>
        </Link>
        <div className='flex items-center gap-9 custom-xs:gap-6'>
            {/* share  */}
            <div className='flex items-center gap-2 cursor-pointer engagement-option'>
                <p className='text-[20px] custom-xs:text-base'>
                <IoIosShareAlt />
                </p>
                <p className='text-sm text-themeBlack'>
                    155
                </p>
            </div>
            {/* comment  */}
            <Link to={'/post/1'} className='flex items-center gap-2 cursor-pointer engagement-option'>
                <p className='text-[20px] custom-xs:text-base'>
                <FaRegComment />
                </p>
                <p className='text-sm text-themeBlack'>
                    225
                </p>
            </Link>
            {/* donate button  */}
            <Link to={'/donation'} className='inline-block'>
                <PrimaryButton text="Donate" className="px-5 py-[10px] custom-2xl:py-2 custom-2xl:px-4 custom-2xl:text-sm custom-xl:py-2 custom-xl:px-4 custom-xl:text-sm rounded-[8px] max-md:text-sm max-md:py-2 custom-xs:!px-3" />
            </Link>
        </div>
      </div>
      {/* Description */}
      <p className="mt-3 text-base custom-2xl:text-[15px] custom-xl:text-[15px] text-themeBlack font-medium custom-sm:text-sm custom-xs:text-sm">
        The Public Speaking Practice Workshop starting in February sounds like a great opportunity for people at all skill levels to refine their...{" "}
        {
            type !== 'full' && (<Link className="text-blue-500 cursor-pointer text-[15px] custom-sm:text-sm custom-xs:text-sm">See more</Link>)
        }
      </p>
    </div>
  );
};

export default PostCard;