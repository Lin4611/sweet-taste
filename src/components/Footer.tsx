import logo from "../assets/img/logo/logo-light.svg";
import mail_icon from "../assets/img/icon/mail-24px.png";
import subscribe_btn_icon from "../assets/img/icon/arrow_forward-24px.png"
const Footer = () => {
  return (
    <footer className="w-full mx-auto flex flex-col py-[34px] lg:max-w-[1024px]">
      <section className="w-full flex flex-col bg-primary h-[186px] py-[30px] items-center justify-around lg:flex-row lg:h-[116px]">
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
        <div className="flex w-full items-center h-14 relative px-[30px] lg:w-[380px] lg:p-0">
          <img src={mail_icon} alt="" className="z-100 w-6 h-6 object-cover absolute left-[50px] lg:left-5" />
          <input type="email" className="bg-soft h-full w-[251px] focus:outline-none focus:ring-0 pl-16 lg:w-[316px]" />
          <button type="button" className="px-5 py-4 bg-soft hover:bg-accent active:bg-accent">
            <img src={subscribe_btn_icon} alt="" className="h-6 w-6" />
          </button>
        </div>
      </section>
      <section className="w-full"></section>
    </footer>
  );
};
export default Footer;
