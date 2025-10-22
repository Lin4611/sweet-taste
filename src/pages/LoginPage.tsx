import type { FC } from "react";
import account_icon from "../assets/img/icon/client_icon.svg";
import facebook_logo from "../assets/img/ic-facebook.png";
import google_logo from "../assets/img/ic-google.png";
import yahoo_logo from "../assets/img/ic-yahoo.png";
import password_icon from "../assets/img/icon/password_icon.svg";
const LoginPage: FC = () => {
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px] lg:py-[75px]">
        {/* 手機板排版 */}
        <section className="flex justify-center items-center w-full gap-[30px] bg-primary/100 lg:hidden">
          <section className="w-full flex flex-col items-center">
            <h2 className="text-4xl text-invert leading-9 py-[30px] font-semibold">
              會員登入
            </h2>
            <section className="w-full bg-soft/100 py-[30px] px-[30px]">
              <div className="flex items-stretch w-full bg-invert/100 border border-soft overflow-hidden">
                <button
                  type="button"
                  className="group flex justify-center items-center flex-1 py-5 px-4 border-r border-soft active:bg-accent transition-all duration-200"
                >
                  <img
                    src={facebook_logo}
                    alt="facebook登入"
                    className="h-6 w-auto object-contain"
                  />
                </button>
                <button
                  type="button"
                  className="group flex justify-center items-center flex-1 py-5 px-4 border-r border-soft active:bg-accent transition-all duration-200"
                >
                  <img
                    src={google_logo}
                    alt="google登入"
                    className="h-6 w-auto object-contain"
                  />
                </button>
                <button
                  type="button"
                  className="group flex justify-center items-center flex-1 py-5 px-4 border-r border-soft active:bg-accent transition-all duration-200"
                >
                  <img
                    src={yahoo_logo}
                    alt="yahoo登入"
                    className="h-6 w-auto object-contain"
                  />
                </button>
              </div>
            </section>
            <section className="w-full flex flex-col gap-4 py-[30px] px-[30px]">
              <div className="relative w-full ">
                <img
                  src={account_icon}
                  alt="account"
                  className="z-20 absolute h-6 w-6 top-4 left-5"
                />
                <input
                  type="text"
                  placeholder="電子信箱／手機號碼"
                  className="w-full h-14 bg-soft/100 pl-16 placeholder:text-muted focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative w-full ">
                <img
                  src={password_icon}
                  alt="account"
                  className="z-20 absolute h-6 w-6 top-4 left-5"
                />
                <input
                  type="password"
                  placeholder="請輸入使用者密碼"
                  className="w-full h-14 bg-soft/100 pl-16 placeholder:text-muted focus:outline-none focus:ring-0"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-soft" />
                <span className="text-soft">記住我</span>
              </label>
            </section>
            <button
              type="button"
              className="w-full text-title font-semibold  text-primary bg-accent border border-accent p-4 active:bg-soft"
            >
              登入帳號
            </button>
          </section>
        </section>
        {/* 電腦排版 */}
        <section className="hidden lg:flex w-full justify-center px-[122px]">
          <section className="w-full bg-soft/100 flex flex-col items-center group hover:bg-primary hover:scale-105 transition-transform duration-200 ease-out">
            <h2 className="text-title text-muted leading-9 py-[40px] font-semibold group-hover:text-4xl group-hover:text-invert ">
              會員登入
            </h2>
            <section className="w-full flex flex-col gap-4 px-[30px] pb-[25px]">
              <div className="relative w-full ">
                <img
                  src={account_icon}
                  alt="account"
                  className="z-20 absolute h-6 w-6 top-4 left-5"
                />
                <input
                  type="text"
                  placeholder="電子信箱／手機號碼"
                  className="w-full h-14 bg-invert/100 pl-16 placeholder:text-muted focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative w-full ">
                <img
                  src={password_icon}
                  alt="account"
                  className="z-20 absolute h-6 w-6 top-4 left-5"
                />
                <input
                  type="password"
                  placeholder="請輸入使用者密碼"
                  className="w-full h-14 bg-invert/100 pl-16 placeholder:text-muted focus:outline-none focus:ring-0"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-soft" />
                <span className="text-primary group-hover:text-soft">記住我</span>
              </label>
            </section>
            <button
              type="button"
              className="w-full text-title font-semibold  text-primary bg-soft border border-soft p-4 group-hover:bg-accent group-hover:border-accent active:bg-soft"
            >
              登入帳號
            </button>
          </section>
          <section className="flex flex-col items-center w-full py-10 px-[30px] bg-soft/100 justify-between group hover:bg-primary hover:scale-105 transition-transform duration-200 ease-out">
            <h2 className="text-title text-muted leading-9 group-hover:text-3xl group-hover:font-semibold group-hover:text-soft">—— 連結社群帳號 ——</h2>
            <div className="w-full flex flex-col gap-4">
              <button
                type="button"
                className="group flex justify-center items-center flex-1 py-5 px-4 bg-invert hover:bg-accent"
              >
                <img
                  src={facebook_logo}
                  alt="facebook登入"
                  className="h-5 w-auto object-cover"
                />
              </button>
              <button
                type="button"
                className="group flex justify-center items-center flex-1 py-5 px-4 bg-invert hover:bg-accent"
              >
                <img
                  src={google_logo}
                  alt="google登入"
                  className="h-8 w-auto object-cover"
                />
              </button>
              <button
                type="button"
                className="group flex justify-center items-center flex-1 py-5 px-4 bg-invert hover:bg-accent"
              >
                <img
                  src={yahoo_logo}
                  alt="yahoo登入"
                  className="h-4 w-auto object-cover"
                />
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
export default LoginPage;
