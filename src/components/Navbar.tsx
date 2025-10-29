import { useState, type FC } from "react";
import logo from "../assets/img/logo/logo-all-dark.svg";
import cart from "../assets/img/icon/shopping_cart.png";
import logo_phone from "../assets/img/logo/logotype-sm-dark.svg";
import menu_icon from "../assets/img/icon/dehaze-24px.png";
import { Link } from "react-router-dom";
const Navbar: FC = () => {
  const [navbarShow, setNavbarShow] = useState<boolean>(false);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setNavbarShow(!navbarShow);
  };
  return (
    <header className="w-full mx-auto sticky top-0 z-[100] bg-white py-[36px] md:max-w-[768px] lg:py-[30px] lg:max-w-[1024px]">
      <nav className="mx-auto flex items-center justify-between w-full px-[33px] lg:max-w-[940px] md:max-w-[768px]">
        <button
          type="button"
          onClick={handleClick}
          className="justify-self-start active:bg-accent/30 rounded-2xl lg:hidden md:hidden"
        >
          <img src={menu_icon} alt="menu" />
        </button>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="hidden md:block lg:block h-[40px] w-auto object-cover"
          />
          <img
            src={logo_phone}
            alt="logo"
            className="block h-[18px] w-auto object-cover md:hidden lg:hidden "
          />
        </Link>

        <div className=" items-center justify-between md:flex md:max-w-[246px] lg:flex lg:max-w-[320px] lg:w-full md:w-full">
          <div className="hidden md:flex md:max-w-[166px] lg:max-w-[215px] lg:flex w-full items-center justify-between">
            <Link
              to="/"
              className="text-primary font-semibold hover:text-xl hover:shadow-2xl hover:shadow-primary"
            >
              首頁
            </Link>

            <Link
              to="/products"
              className="text-primary font-semibold hover:text-xl hover:shadow-2xl hover:shadow-primary"
            >
              甜點
            </Link>
            <Link
              to="/login"
              className="text-primary font-semibold hover:text-xl hover:shadow-2xl hover:shadow-primary"
            >
              登入
            </Link>
          </div>
          <Link to="/cart">
            <img
              src={cart}
              alt=""
              className="h-[24px] w-auto object-cover aspect-square hover:h-[30px] hover:shadow-lg hover:shadow-accent hover:rounded-2xl active:h-[30px]"
            />
          </Link>
        </div>
      </nav>
      <div
        className={`lg:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          navbarShow ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col w-full items-center py-6 gap-4">
          <Link
            to="/"
            className="text-title text-primary font-semibold active:bg-accent/30 active:rounded-2xl"
            onClick={() => {
              setNavbarShow(false);
            }}
          >
            首頁
          </Link>
          <Link
            to="/products"
            className="text-title text-primary font-semibold active:bg-accent/30 active:rounded-2xl"
            onClick={() => {
              setNavbarShow(false);
            }}
          >
            甜點
          </Link>
          <Link
            to="/login"
            className="text-title text-primary font-semibold active:bg-accent/30 active:rounded-2xl"
            onClick={() => {
              setNavbarShow(false);
            }}
          >
            登入
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
