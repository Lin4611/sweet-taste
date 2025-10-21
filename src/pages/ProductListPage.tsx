import { type FC } from "react";
import banner_pic from "../assets/img/banner.png";
import p1 from "../assets/img/p-1.png";
import p2 from "../assets/img/p-2.png";
import p3 from "../assets/img/p-3.png";
import p4 from "../assets/img/p-4.png";
import p5 from "../assets/img/p-5.png";
import p6 from "../assets/img/p-6.png";
// import p7 from "../assets/img/p-7.avif";
// import p8 from "../assets/img/p-8.avif";
// import p9 from "../assets/img/p-9.avif";
import btn_prev from "../assets/img/icon/arrow_left.png";
import btn_next from "../assets/img/icon/arrow_right.png";
import ProductCard from "../components/ProductCard";
const productList = [
  {
    imgUrl: p1,
    title: "焦糖瑪卡龍",
    price: "NT$ 450",
  },
  {
    imgUrl: p2,
    title: "抹茶紅豆蛋糕",
    price: "NT$ 480",
  },
  {
    imgUrl: p3,
    title: "藍莓生乳酪",
    price: "NT$ 420",
  },
  {
    imgUrl: p4,
    title: "草莓塔",
    price: "NT$ 490",
  },
  {
    imgUrl: p5,
    title: "提拉米蘇",
    price: "NT$ 500",
  },
  {
    imgUrl: p6,
    title: "覆盆子慕斯",
    price: "NT$ 460",
  },
  //   {
  //     imgUrl: p7,
  //     title: "香草布丁",
  //     price: "NT$ 350",
  //   },
  //   {
  //     imgUrl: p8,
  //     title: "巧克力布朗尼",
  //     price: "NT$ 390",
  //   },
  //   {
  //     imgUrl: p9,
  //     title: "檸檬塔",
  //     price: "NT$ 430",
  //   },
];
const ProductListPage: FC = () => {
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px]">
        <figure className="w-full  h-auto lg:px-[42px] lg:h-auto">
          <img
            src={banner_pic}
            alt="banner"
            className="w-full h-[277px] object-cover lg:h-auto"
          />
        </figure>
        <section className="flex flex-col w-full py-[30px] lg:px-[42px] lg:py-15">
          <section className="flex flex-col justify-between lg:flex-row lg:gap-5">
            <ul className="flex flex-col items-center w-full text-primary text-title font-semibold leading-10 text-center lg:w-[300px]">
              <p className="bg-primary text-invert py-3 w-full">甜點類別</p>
              <li className="py-3 bg-white border border-soft w-full hover:bg-soft/100 active:bg-soft/100">
                所有甜點（48）
              </li>
              <li className="py-3 bg-white border border-soft w-full hover:bg-soft/100 active:bg-soft/100">
                本日精選（10）
              </li>
              <li className="py-3 bg-white border border-soft w-full hover:bg-soft/100 active:bg-soft/100">
                人氣推薦（26）
              </li>
              <li className="py-3 bg-white border border-soft w-full hover:bg-soft/100 active:bg-soft/100">
                新品上市（12）
              </li>
            </ul>
            <div className="flex flex-col gap-[30px] items-center">
              <section className=" px-[30px] grid grid-cols-1 gap-5 lg:grid-cols-2 lg:p-0">
                {productList.map((p, i) => (
                  <ProductCard
                    key={i}
                    imgUrl={p.imgUrl}
                    title={p.title}
                    price={p.price}
                  />
                ))}
              </section>
              <section className="flex justify-center col-span-full text-subtitle font-light text-primary self-end">
                <button
                  type="button"
                  className="h-[60px] w-[60px] flex justify-center items-center border border-soft hover:bg-soft active:bg-soft"
                >
                  <img src={btn_prev} alt="" className="w-6 h-6 object-cover" />
                </button>
                <button
                  type="button"
                  className="h-[60px] w-[60px] flex justify-center items-center border border-soft  hover:bg-primary hover:text-invert active:bg-primary active:text-invert"
                >
                  1
                </button>
                <button
                  type="button"
                  className="h-[60px] w-[60px] flex justify-center items-center border border-soft hover:bg-primary hover:text-invert active:bg-primary active:text-invert"
                >
                  2
                </button>
                <button
                  type="button"
                  className="h-[60px] w-[60px] flex justify-center items-center border border-soft hover:bg-primary hover:text-invert active:bg-primary active:text-invert"
                >
                  3
                </button>
                <button
                  type="button"
                  className="h-[60px] w-[60px] flex justify-center items-center border border-soft hover:bg-soft active:bg-soft"
                >
                  <img src={btn_next} alt="" className="w-6 h-6 object-cover" />
                </button>
              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
export default ProductListPage;
