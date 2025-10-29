import { useState, type FC } from "react";
import arrow_up_icon from "/src/assets/img/icon/arrow_drop_up.svg";
import arrow_down_icon from "/src/assets/img/icon/arrow_drop_down.svg";
import { useNavigate } from "react-router-dom";

const InvoiceStep: FC = () => {
  const [invoiceWay, setInvoiceWay] = useState<"mail" | "electronic">(
    "electronic"
  );
  const navigate = useNavigate();
  return (
    <>
      <section className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-[30px] px-[30px] py-[30px] bg-primary">
          <div className="flex items-center justify-between py-[30px]">
            <h2 className="text-4xl text-soft font-semibold leading-5">發票</h2>
            <div
              className="relative flex w-[170px] items-center justify-between
                            before:absolute before:h-[1px] before:w-full before:left-0 
                            before:bg-muted before:content-['']
                "
            >
              <div className="relative z-10 w-5 h-5 rounded-full bg-soft flex items-center justify-center after:content-[''] after:block after:w-2 after:h-3.5 after:border-primary after:border-r-[2px] after:border-b-[2px] after:rotate-45 after:-translate-y-0.5"></div>
              <div className="relative z-10 w-5 h-5 rounded-full bg-soft flex items-center justify-center after:content-[''] after:block after:w-2 after:h-3.5 after:border-primary after:border-r-[2px] after:border-b-[2px] after:rotate-45 after:-translate-y-0.5"></div>
              <div
                className="z-10 flex relative h-5 w-5 border items-center justify-center border-soft bg-primary rounded-full
                        before:absolute before:w-3.5 before:h-3.5 before:bg-soft before:content-[''] before:rounded-full
                    "
              ></div>
            </div>
          </div>
          <div className="w-full flex h-[56px] border border-soft">
            <button
              type="button"
              className={`w-full flex items-center justify-center text-subtitle font-semibold ${
                invoiceWay === "electronic"
                  ? "bg-soft text-primary"
                  : "bg-primary text-soft"
              }`}
              onClick={() => setInvoiceWay("electronic")}
            >
              電子發票
            </button>
            <button
              type="button"
              className={`w-full flex items-center justify-center text-subtitle font-semibold ${
                invoiceWay === "mail"
                  ? "bg-soft text-primary"
                  : "bg-primary text-soft"
              }`}
              onClick={() => setInvoiceWay("mail")}
            >
              郵寄發票
            </button>
          </div>
          {invoiceWay === "electronic" ? (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                <p className="text-subtitle text-soft leading-5 font-semibold">
                  電子郵件信箱
                </p>
                <input
                  type="mail"
                  placeholder="example@email.com"
                  className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-subtitle text-soft leading-5 font-semibold">
                  統一編號（選填）
                </p>
                <input
                  type="text"
                  placeholder="12345678"
                  className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                <div className="flex w-full justify-between items-center">
                  <p className="text-subtitle text-soft leading-5 font-semibold">
                    地址
                  </p>
                  <label className="hidden md:flex lg:flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-soft" />
                    <span className="text-soft">同運送地址</span>
                  </label>
                </div>
                <div className="w-full flex gap-[9px]">
                  <div className="w-full relative flex py-[17px] bg-soft text-muted">
                    <select
                      name="city"
                      className="w-full pl-5 appearance-none "
                    >
                      <option value="高雄市">高雄市</option>
                      <option value="台南市">台南市</option>
                      <option value="嘉義市">嘉義市</option>
                      <option value="屏東市">屏東市</option>
                      <option value="雲林市">雲林市</option>
                    </select>
                    <div className="flex flex-col justify-center items-center absolute right-5 top-3">
                      <img
                        src={arrow_up_icon}
                        alt="up"
                        className="w-6 h-6 object-cover"
                      />
                      <img
                        src={arrow_down_icon}
                        alt="down"
                        className="w-6 h-6 object-cover -mt-4"
                      />
                    </div>
                  </div>
                  <div className="w-full relative flex py-[17px] bg-soft text-muted">
                    <select name="dist" className="w-full pl-5 appearance-none">
                      <option value="新興區">新興區</option>
                      <option value="三民區">三民區</option>
                      <option value="小港區">小港區</option>
                      <option value="前鎮區">前鎮區</option>
                      <option value="鼓山區">鼓山區</option>
                    </select>
                    <div className="flex flex-col justify-center items-center absolute right-5 top-3">
                      <img
                        src={arrow_up_icon}
                        alt="up"
                        className="w-6 h-6 object-cover"
                      />
                      <img
                        src={arrow_down_icon}
                        alt="down"
                        className="w-6 h-6 object-cover -mt-4"
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
                  placeholder="幸福路 520 號"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-subtitle text-soft leading-5 font-semibold">
                  統一編號（選填）
                </p>
                <input
                  type="text"
                  placeholder="12345678"
                  className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          className="w-full h-[65px] text-title font-semibold text-primary bg-accent flex items-center justify-center transition-all duration-200 ease-out hover:bg-accent hover:shadow-primary hover:shadow-lg active:bg-soft"
          onClick={() => navigate("/success")}
        >
          確認結帳
        </button>
      </section>
    </>
  );
};
export default InvoiceStep;
