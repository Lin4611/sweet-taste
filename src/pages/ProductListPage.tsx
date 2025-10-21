import { type FC } from "react";
import banner_pic from "../assets/img/banner.png";
const ProductListPage: FC = () => {
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px]">
        <figure className="w-full  h-auto lg:px-[42px] lg:h-auto">
            <img src={banner_pic} alt="banner" className="w-full h-[277px] object-cover lg:h-auto" />
        </figure>
        <section className="flex flex-col w-full lg:px-[42px] lg:py-15">
            <section className="flex justify-between">
                <ul className="flex flex-col items-center w-full text-primary text-title font-semibold leading-10 text-center lg:w-[300px]">
                    <p className="bg-primary text-invert py-3 w-full">甜點類別</p>
                    <li className="py-3 bg-white border border-soft w-full hover:bg-soft/100 active:bg-soft/100">所有甜點（48）</li>
                    <li className="py-3 bg-white border border-soft w-full hover:bg-soft/100 active:bg-soft/100">本日精選（10）</li>
                    <li className="py-3 bg-white border border-soft w-full hover:bg-soft/100 active:bg-soft/100">人氣推薦（26）</li>
                    <li className="py-3 bg-white border border-soft w-full hover:bg-soft/100 active:bg-soft/100">新品上市（12）</li>
                </ul>
            </section>
        </section>

      </main>
    </>
  );
};
export default ProductListPage
