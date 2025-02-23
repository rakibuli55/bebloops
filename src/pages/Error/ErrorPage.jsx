import errorImage from "../../assets/images/404.svg";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center flex-col">
      <img className="w-[600px] h-[600px] mx-auto" src={errorImage} alt="" />
      <div>
        <h1 className="text-[24px] font-semibold">Opps page not found!</h1>
      </div>
    </section>
  );
};

export default ErrorPage;
