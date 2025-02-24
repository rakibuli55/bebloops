import errorImage from "../../assets/images/404.svg";

const ErrorPage = () => {
  return (
    <section className="min-h-screen custom-xs:min-h-full custom-xs:py-[100px] custom-sm:min-h-full custom-sm:py-[100px] flex items-center justify-center flex-col">
      <img className="w-[600px] h-[600px] custom-xs:h-[280px]  custom-sm:h-[280px] custom-xs:w-full mx-auto" src={errorImage} alt="" />
      <div>
        <h1 className="text-[24px] font-semibold custom-xs:text-[19px] custom-sm:text-[20px]">Opps page not found!</h1>
      </div>
    </section>
  );
};

export default ErrorPage;
