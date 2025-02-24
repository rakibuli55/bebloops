import React, { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';
import CreatePost from '../components/common/CreatePost';
import MyMovement from '../components/homepage/MyMovement';
import JoinedMovement from "../components/homepage/JoinedMovement"
import MobileAdsSlider from '@/components/common/MobileAdsSlider';

const HomePage = () => {
  const [isMobileActive, setMobileActive] = useState(window.innerWidth < 991);

  useEffect(() => {
    const handleResize = () => {
      setMobileActive(window.innerWidth < 991)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  
  return (
    <div className='flex items-start flex-wrap'>
      <div className='w-[60%] custom-xl:w-full custom-lg:w-full max-md:w-full h-[calc(100vh-114px)] custom-2xl:h-[calc(100vh-91px)] custom-xl:h-[calc(100vh-91px)] custom-lg:h-[calc(100vh-91px)] overflow-y-auto post-area pt-6 custom-2xl:pt-4 custom-xl:pt-4 custom-lg:pt-2 max-md:h-full custom-xs:pt-[10px]'>
        <div className='mb-8 custom-2xl:mb-4 custom-xl:mb-4 custom-lg:mb-4 max-md:mb-5'>
         <CreatePost />
        </div>
        {
          isMobileActive && (
            <MobileAdsSlider />
          )
        }
        <PostCard />
        <PostCard />
      </div>
      <div className='w-[40%] h-[calc(100vh-114px)] custom-2xl:h-[calc(100vh-91px)] custom-xl:hidden max-md:hidden custom-lg:hidden overflow-y-auto pl-6 custom-2xl:pl-4 pb-8 custom-2xl:pb-4  movement-area pt-6 custom-2xl:pt-4'>
        <MyMovement />
        <div className='mt-6'>
          <JoinedMovement />
        </div>
      </div>
    </div>
  );
};

export default HomePage;