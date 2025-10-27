import credit_icon from "../assets/img/icon/credit_card_icon.svg";
import p1 from "../assets/img/p-1.png";
import p2 from "../assets/img/p-2.png";
import p3 from "../assets/img/p-3.png";
const ProductList = [
  {
    id: 1,
    imgUrl: p1,
    name: "焦糖瑪卡龍",
    count: 2,
    price: 450,
  },
  {
    id: 2,
    imgUrl: p2,
    name: "焦糖鬆餅",
    count: 3,
    price: 320,
  },
  {
    id: 3,
    imgUrl: p3,
    name: "布朗尼",
    count: 5,
    price: 150,
  },
];
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
const CheckoutPaymentPage:FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px] lg:px-[122px] lg:pb-[65px] lg:pt-5">
        <section className="w-full flex gap-5">
          {/* 左半邊 */}
          <section className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-[29px] px-[30px] py-[30px] bg-primary">
              <div className="flex justify-between items-center w-full pt-[15px] pb-[30px]">
                <h2 className="text-4xl text-soft font-semibold leading-5">
                  付款
                </h2>
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
                    <select
                      name="mouth"
                      className="w-full py-[17px] bg-soft text-muted pl-5"
                    >
                      <option value="" disabled hidden>
                        月
                      </option>
                      <option value="1月">1月</option>
                      <option value="2月">2月</option>
                      <option value="3月">3月</option>
                      <option value="4月">4月</option>
                      <option value="5月">5月</option>
                    </select>
                    <select
                      name="year"
                      className="w-full py-[17px] bg-soft text-muted pl-5"
                    >
                      <option value="" disabled hidden>
                        年
                      </option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </select>
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
              className="w-full h-[65px] text-title font-semibold text-primary bg-accent flex items-center justify-center active:bg-soft hover:bg-soft"
              onClick={()=>navigate("/checkout/invoice")}
            >
              下一步
            </button>
          </section>
          {/* 右半邊 */}
          <section className="hidden lg:flex lg:max-w-[300px] lg:w-full">
            <section className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col items-center gap-4 border border-soft pb-4">
                <h2 className="text-title text-muted font-semibold leading-5 bg-soft/100 h-[65px] w-full flex justify-center items-center">
                  訂單摘要
                </h2>
                <div className="w-full flex flex-col px-5 gap-4">
                  <section className="w-full flex flex-col gap-2">
                    <div className="w-full flex justify-between text-muted font-light leading-5">
                      <p>小計</p>
                      <p>NT$ 2,700</p>
                    </div>
                    <div className="w-full flex justify-between text-muted font-light leading-5">
                      <p>運費</p>
                      <p>NT$ 300</p>
                    </div>
                  </section>
                  <div className="w-full flex justify-between text-subtitle text-muted font-semibold leading-5">
                    <h3>總計</h3>
                    <p>NT$3,000</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-4 border border-soft pb-4">
                <h2 className="text-title text-muted font-semibold leading-5 bg-soft/100 h-[65px] w-full flex justify-center items-center">
                  購物清單
                </h2>
                {ProductList.map((p) => (
                  <div
                    className="w-full flex flex-col px-[19px] gap-4"
                    key={p.id}
                  >
                    <section className="flex items-center w-full gap-5">
                      <img
                        src={p.imgUrl}
                        alt={p.name}
                        className="w-30 h-20 object-cover"
                      />
                      <div className="flex flex-col gap-[2px] leading-5 text-muted w-[122px]">
                        <p className="font-light">{`${p.name}（${p.count}）`}</p>
                        <p className="text-subtitle font-semibold">
                          NT$ {p.price * p.count}
                        </p>
                      </div>
                    </section>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};
export default CheckoutPaymentPage;
