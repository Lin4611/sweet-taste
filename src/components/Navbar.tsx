import type { FC } from "react";
import logo from "../assets/img/logo/logo-all-dark.svg";
import cart from "../assets/img/icon/shopping_cart.png";
import logo_phone from "../assets/img/logo/logotype-sm-dark.svg";
import menu_icon from "../assets/img/icon/dehaze-24px.png";
const Navbar: FC = () => {
  return (
    <header className="w-full mx-auto sticky top-0 z-[100] bg-white py-[30px] lg:py-[30px] lg:sticky">
      <nav className="mx-auto flex items-center justify-between w-full px-[33px] lg:max-w-[92%]">
        <img src={menu_icon} alt="menu" className="blcok lg:hidden" />
        <img
          src={logo}
          alt="logo"
          className="hidden lg:block h-[40px] w-auto object-cover"
        />
        <img
          src={logo_phone}
          alt="logo"
          className="block h-[18px] w-auto object-cover lg:hidden"
        />
        <div
          className="items-center justify-between
                                    lg:flex lg:max-w-[34%] lg:w-full"
        >
          <div className="hidden lg:max-w-[70%] lg:flex w-full items-center justify-between">
            <span className="text-primary font-semibold">首頁</span>
            <span className="text-primary font-semibold">甜點</span>
            <span className="text-primary font-semibold">登入</span>
          </div>
          <img
            src={cart}
            alt=""
            className="h-[24px] w-auto object-cover aspect-square"
          />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
