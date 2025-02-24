import AdsImg from '../assets/images/ads.png';

const AdsSidebar = () => {
  return (
    <div className='fixed top-0 right-0 w-[320px] custom-2xl:w-[225px] custom-xl:w-[225px] custom-lg:w-[225px] min-h-screen overflow-y-auto pt-[108px] custom-lg:pt-[100px] pr-[60px] custom-2xl:pr-[20px] custom-xl:pr-[20px] custom-lg:pr-[20px]'>
      <div className='mt-[30px] custom-2xl:mt-0 custom-xl:mt-0 custom-lg:mt-0'>
        <img className='w-full h-[500px] custom-2xl:h-[350px] custom-xl:h-[350px] custom-lg:h-[350px]' src={AdsImg} alt="AdsImg" />
      </div>
    </div>
  );
};

export default AdsSidebar;