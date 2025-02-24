


const NotificationCard = ({item}) => {
  return (
    <div className={`py-[18px] px-4 custom-2xl:py-[14px] custom-xl:py-[14px] custom-lg:py-[12px] flex items-center gap-3 max-md:gap-2 rounded-[8px] relative max-md:p-3 ${item.status === 'read' ? 'bg-white' : 'bg-[rgba(178,0,0,0.05)]'}`}>
      <img className="min-w-[38px] h-[38px] w-[38px] max-md:w-[30px] max-md:min-w-[30px] max-md:h-[30px]" src={item?.avatar} alt="notificationProfile" />
      <div>
        <h4 className="text-base custom-2xl:text-sm custom-xl:text-sm custom-lg:text-sm font-semibold text-themeBlack max-md:text-sm">{item?.sender.length > 19 ? item?.sender.slice(0, 19) + "..." : item?.sender}</h4>
        <p className="text-sm custom-2xl:text-[13px] custom-xl:text-[13px] custom-lg:text-[13px] text-[#777] mt-[2px] w-[248px] max-md:w-full max-md:text-[13px]">
        {item?.message.length > 50 ? item?.message.slice(0, 50) + "..." : item?.message}
        </p>
      </div>
      <p className="absolute top-[15px] right-4 uppercase text-sm text-themeBlack font-medium custom-2xl:text-[13px] custom-xl:text-[13px] custom-lg:text-[13px] max-md:text-[12px]">{item?.time}</p>
    </div>
  );
};

export default NotificationCard;