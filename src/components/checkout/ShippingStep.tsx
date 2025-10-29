import arrow_up_icon from "../assets/img/icon/arrow_drop_up.svg";
import arrow_down_icon from "../assets/img/icon/arrow_drop_down.svg";
import type { FC } from "react";
type ShippingStepProps = {
  onNext: () => void; 
};

const ShippingStep:FC<ShippingStepProps> = ({onNext}) => {
  return (
    <section className="w-full flex flex-col bg-primary">
      <div className="w-full px-[30px] py-[30px]">
        <div className="w-full flex justify-between h-18 items-center mb-7">
          <h2 className="text-4xl text-soft font-semibold">運送</h2>
          <div
            className="relative flex w-[170px] items-center justify-between
                            before:absolute before:h-0.5 before:w-full before:left-0 
                            before:bg-muted before:content-['']
                "
          >
            <div
              className="z-10 flex relative h-5 w-5 border items-center justify-center border-soft bg-primary rounded-full
                        before:absolute before:w-3.5 before:h-3.5 before:bg-soft before:content-[''] before:rounded-full
                    "
            ></div>
            <div className="z-10 flex relative h-5 w-5 border items-center justify-center border-soft bg-primary rounded-full"></div>
            <div className="z-10 flex relative h-5 w-5 border items-center justify-center border-soft bg-primary rounded-full"></div>
          </div>
        </div>
        <section className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-[9px]">
            <div className="w-full flex flex-col gap-2">
              <p className="text-subtitle text-soft leading-5 font-semibold">
                姓氏
              </p>
              <input
                type="text"
                placeholder="王"
                className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-subtitle text-soft leading-5 font-semibold">
                名字
              </p>
              <input
                type="text"
                placeholder="小明"
                className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-subtitle text-soft leading-5 font-semibold">
              電話
            </p>
            <input
              type="text"
              placeholder="0912-345-678"
              className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-subtitle text-soft leading-5 font-semibold">
              地址
            </p>
            <div className="w-full flex gap-[9px]">
              <div className="w-full relative flex py-[17px] bg-soft text-muted">
                <select name="city" className="w-full pl-5 appearance-none ">
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
        </section>
      </div>
      <button
        type="button"
        className="text-title text-primary font-semibold bg-accent w-full py-[15px] hover:bg-soft"
        onClick={onNext}
      >
        下一步
      </button>
    </section>
  );
};
export default ShippingStep;
