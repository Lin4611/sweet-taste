import logo from "../assets/img/logo/logo-light.svg";
import mail_icon from "../assets/img/icon/mail-24px.png";
import subscribe_btn_icon from "../assets/img/icon/arrow_forward-24px.png";
import logo_title from "../assets/img/logo/logotype-sm-dark.svg";
import facebook_icon from "../assets/img/icon/ic-facebook.svg";
import line_icon from "../assets/img/icon/ic-line@.svg";
import today_is_goodday_title from "../assets/img/title-pic/footer-title.png";
import type { FC } from "react";
const Footer:FC = () => {
  return (
    <footer className="w-full mx-auto flex flex-col lg:max-w-[1024px]">
      <section className="w-full flex flex-col bg-primary h-[186px] py-[30px] items-center justify-center gap-[33px] lg:flex-row lg:h-[116px] lg:gap-31">
        <div className="flex w-[276px] items-center justify-between">
          <img
            src={logo}
            alt=""
            className="w-[40px] h-[40px] object-cover aspect-square"
          />
          <h3 className="text-title text-soft leading-[29px] font-Neue">
            訂閱你我的甜蜜郵件
          </h3>
        </div>
        <div className="flex w-[315px] items-center h-14 relative lg:w-[380px] lg:p-0">
          <img
            src={mail_icon}
            alt=""
            className="z-100 w-6 h-6 object-cover absolute left-[20px] lg:left-5"
          />
          <input
            type="email"
            className="bg-soft h-full w-[251px] focus:outline-none focus:ring-0 pl-16 lg:w-[316px]"
          />
          <button
            type="button"
            className="w-16 h-14 flex items-center justify-center bg-soft hover:bg-accent active:bg-accent"
          >
            <img src={subscribe_btn_icon} alt="" className="h-6 w-6" />
          </button>
        </div>
      </section>
      <section className="w-full block bg-soft/100  pt-[39px] px-[30px] pb-[30px] lg:px-[122px] lg:flex lg:justify-between">
        <div className="flex flex-col gap-[30px]">
          <img
            src={logo_title}
            alt="logo"
            className="w-[171px] h-[27px] object-cover m-0 lg:mb-[86px]"
          />
          <section className="flex flex-col w-[227px] text-primary leading-6">
            <p>07-1234-5678 sweetaste@email.com </p>
            <p> 800 高雄市新興區幸福路 520 號</p>
          </section>
          <section className="flex w-[72px] gap-2 mb-[23px] lg:m-0">
            <img
              src={line_icon}
              alt="line"
              className="w-8 h-8 object-cover aspect-square"
            />
            <img
              src={facebook_icon}
              alt="Facebook"
              className="w-8 h-8 object-cover aspect-square"
            />
          </section>
        </div>
        <section className="flex flex-col justify-between">
          <img
            src={today_is_goodday_title}
            alt=""
            className="hidden lg:block w-[59px] h-[219px] self-end "
          />
          <p className="text-primary leading-[19px] font-Times">
            © 2018 Sweetaste* All Rights Reserved
          </p>
        </section>
      </section>
    </footer>
  );
};
export default Footer;
