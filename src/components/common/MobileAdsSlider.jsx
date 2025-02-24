import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import mobileBanner from "../../assets/images/mobile-ad-banner.png";
const addContent = [
  {
    id: 1,
    image: mobileBanner,
  },
  {
    id: 2,
    image: mobileBanner,
  },
  {
    id: 3,
    image: mobileBanner,
  },
  {
    id: 4,
    image: mobileBanner,
  },
  {
    id: 5,
    image: mobileBanner,
  },
];

const MobileAdsSlider = () => {
  return (
    <div className="mb-6">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween="16"
        className="mySwiper"
      >
        {addContent.map((item) => (
          <SwiperSlide key={item?.id}>
            <img className="w-full custom-xs:!h-[130px] custom-sm:!h-[130px] max-md:h-[230px] object-cover rounded-[22px] custom-xs:rounded-[10px]" src={item?.image} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileAdsSlider;
