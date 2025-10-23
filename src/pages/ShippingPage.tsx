const ShippingPage = () => {
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px]">
        <section className="w-full flex justify-between">
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
                      className="w-full bg-soft pl-5 placeholder-muted text-primary py-[17px] focus:outdivne-none"
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
        </section>
      </main>
    </>
  );
};
export default ShippingPage;
