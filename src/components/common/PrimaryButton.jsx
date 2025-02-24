

const PrimaryButton = ({text, className}) => {
  return (
    <div className={`bg-primaryColor text-base text-white font-medium border border-primaryColor duration-200 ease-in-out hover:bg-transparent hover:text-primaryColor cursor-pointer ${className}`}>
     {text}
    </div>
  );
};

export default PrimaryButton;