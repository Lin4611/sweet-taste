import { useState } from "react";

const CheckoutInvoicePage = () => {
  const [invoiceWay, setInvoiceWay] = useState<"mail" | "electronic">(
    "electronic"
  );
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px]">
        <section className="w-full flex flex-col bg-primary ">
          <div className="w-full flex flex-col gap-[30px] px-[30px] py-[30px]">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl text-soft font-semibold leading-5">
                發票
              </h2>
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
            className="w-full h-[65px] text-title font-semibold text-primary bg-accent flex items-center justify-center active:bg-soft hover:bg-soft"
          >
            確認結帳
          </button>
        </section>
      </main>
    </>
  );
};
export default CheckoutInvoicePage;
