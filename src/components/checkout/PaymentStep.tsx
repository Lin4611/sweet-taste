import type { FC } from "react";
import arrow_up_icon from "/src/assets/img/icon/arrow_drop_up.svg";
import arrow_down_icon from "/src/assets/img/icon/arrow_drop_down.svg";
import credit_icon from "/src/assets/img/icon/credit_card_icon.svg";
type PaymentStepProps = {
  onNext: () => void;
};
const PaymentStep: FC<PaymentStepProps> = ({ onNext }) => {
  return (
    <>
      <section className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-[29px] px-[30px] py-[30px] bg-primary">
          <div className="flex justify-between items-center w-full pt-[15px] pb-[30px]">
            <h2 className="text-4xl text-soft font-semibold leading-5">付款</h2>
            <div
              className="relative flex w-[170px] items-center justify-between
                            before:absolute before:h-[1px] before:w-full before:left-0 
                            before:bg-muted before:content-['']
                "
            >
              <div className="relative z-10 w-5 h-5 rounded-full bg-soft flex items-center justify-center after:content-[''] after:block after:w-2 after:h-3.5 after:border-primary after:border-r-[2px] after:border-b-[2px] after:rotate-45 after:-translate-y-0.5"></div>
              <div
                className="z-10 flex relative h-5 w-5 border items-center justify-center border-soft bg-primary rounded-full
                        before:absolute before:w-3.5 before:h-3.5 before:bg-soft before:content-[''] before:rounded-full
                    "
              ></div>
              <div className="z-10 flex relative h-5 w-5 border items-center justify-center border-muted bg-primary rounded-full"></div>
            </div>
          </div>
          <section className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                <p className="text-subtitle text-soft leading-5 font-semibold">
                  信用卡卡號
                </p>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="9012-3456-7890-1234"
                    className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
                  />
                  <img
                    src={credit_icon}
                    alt="credit card"
                    className="z-10 absolute w-6 h-4 object-cover top-5 right-[22px]"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-subtitle text-soft leading-5 font-semibold">
                  持卡人姓名
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="王"
                    className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="小明"
                    className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-subtitle text-soft leading-5 font-semibold">
                有效期限
              </p>
              <div className="w-full flex gap-[9px]">
                <div className="w-full relative flex py-[17px] bg-soft text-muted">
                  <select name="mouth" className="w-full pl-5 appearance-none">
                    <option value="" selected disabled>
                      月
                    </option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option value={i + 1} key={i + 1}>{`${i + 1}月`}</option>
                    ))}
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
                  <select name="year" className="w-full pl-5 appearance-none">
                    <option value="" selected disabled>
                      年
                    </option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
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
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-subtitle text-soft leading-5 font-semibold">
                背面末三碼
              </p>
              <input
                type="text"
                placeholder="123"
                className="w-[153px] bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
              />
            </div>
          </section>
        </div>
        <button
          type="button"
          className="w-full h-[65px] text-title font-semibold text-primary bg-accent flex items-center justify-center transition-all duration-200 ease-out hover:bg-accent hover:shadow-primary hover:shadow-lg active:bg-soft"
          onClick={onNext}
        >
          下一步
        </button>
      </section>
    </>
  );
};
export default PaymentStep;
