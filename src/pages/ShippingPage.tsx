import p1 from "../assets/img/p-1.png";
import p2 from "../assets/img/p-2.png";
import p3 from "../assets/img/p-3.png";

const shippingProductList = [
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
const ShippingPage = () => {
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px] lg:px-[122px] lg:pb-[65px] lg:pt-5">
        <section className="w-full flex gap-5">
          {/* 左半邊 */}
          <section className="w-full flex flex-col bg-primary">
            <div className="w-full px-[30px] py-[30px]">
              <div className="w-full flex justify-between h-18 items-center mb-7">
                <h2 className="text-4xl text-soft font-semibold">運送</h2>
                <ul
                  className="relative flex w-[155px]  items-center justify-between 
             before:absolute before:inset-y-1/2 before:left-0 before:h-0.5 before:w-full 
             before:-translate-y-1/2 before:bg-muted before:content-['']"
                >
                  <li
                    className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-soft bg-primary
               before:absolute before:h-2.5 before:w-2.5 before:rounded-full before:bg-soft before:content-['']"
                  ></li>

                  <li className="z-10 h-4 w-4 rounded-full border border-muted bg-primary"></li>

                  <li className="z-10 h-4 w-4 rounded-full border border-muted bg-primary"></li>
                </ul>
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
                    <select
                      name="city"
                      className="w-full py-[17px] bg-soft text-muted pl-5"
                    >
                      <option value="高雄市">高雄市</option>
                      <option value="台南市">台南市</option>
                      <option value="嘉義市">嘉義市</option>
                      <option value="屏東市">屏東市</option>
                      <option value="雲林市">雲林市</option>
                    </select>
                    <select
                      name="dist"
                      className="w-full py-[17px] bg-soft text-muted pl-5"
                    >
                      <option value="新興區">新興區</option>
                      <option value="三民區">三民區</option>
                      <option value="小港區">小港區</option>
                      <option value="前鎮區">前鎮區</option>
                      <option value="鼓山區">鼓山區</option>
                    </select>
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
                {shippingProductList.map((p) => (
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
export default ShippingPage;
