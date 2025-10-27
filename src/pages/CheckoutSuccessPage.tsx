import { Link } from "react-router-dom";
import banner from "../assets/img/success-bg-pic.avif";
import success_title from "../assets/img/title-pic/checkout-success-title.png";
const CheckoutSuccessPage = () => {
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px] lg:px-[42px] lg:mb-15">
        <div className="flex flex-col lg:gap-[50px]">
          <section
            className="w-full bg-center bg-cover h-[518px] flex items-center justify-center flex-col gap-[30px]"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="relative flex items-center justify-between w-[190px] before:content-[''] before:absolute before:h-0.5 before:bg-primary before:w-full before:top-1/2 before:left-0 before:-translate-y-1/2 before:z-0">
              <div className="relative z-10 w-5 h-5 rounded-full bg-primary flex items-center justify-center after:content-[''] after:block after:w-2 after:h-3.5 after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45 after:-translate-y-0.5"></div>
              <div className="relative z-10 w-5 h-5 rounded-full bg-primary flex items-center justify-center after:content-[''] after:block after:w-2 after:h-3.5 after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45 after:-translate-y-0.5"></div>
              <div className="relative z-10 w-5 h-5 rounded-full bg-primary flex items-center justify-center after:content-[''] after:block after:w-2 after:h-3.5 after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45 after:-translate-y-0.5"></div>
            </div>
            <img
              src={success_title}
              alt="success-title"
              className="w-[190px] h-auto object-cover"
            />
            <Link to="/products">
              <button
                type="button"
                className="hidden lg:block w-[300px] h-[65px] text-title text-primary font-semibold bg-accent active:bg-soft hover:bg-soft"
              >
                繼續逛逛
              </button>
            </Link>
          </section>
          <Link to="/products">
            <button
              type="button"
              className="lg:hidden block w-full h-[65px] text-title text-primary font-semibold bg-accent active:bg-soft hover:bg-soft"
            >
              繼續逛逛
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};
export default CheckoutSuccessPage;
