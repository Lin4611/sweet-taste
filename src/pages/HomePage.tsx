import { useState, type FC } from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import banner from "../assets/img/home-banner.avif";
import today from "../assets/img/today.avif";
import popular from "../assets/img/popular.avif";
import new_product_pic from "../assets/img/new.avif";
import why_make_dessert_pic from "../assets/img/p-8.avif";
import why_make_dessert_title from "../assets/img/title-pic/mobile-title-1.svg";
import why_make_dessert_title_desk from "../assets/img/title-pic/desktop-title-1.png";
import why_eat_dessert_pic from "../assets/img/p-7.avif";
import why_eat_dessert_title from "../assets/img/title-pic/mobile-title-2.svg";
import why_eat_dessert_title_desk from "../assets/img/title-pic/desktop-title-2.png";
import want_to_eat_no_reason_title from "../assets/img/title-pic/mobile-title-3.svg";
import product_1 from "../assets/img/p-1.png";
import product_2 from "../assets/img/p-2.png";
import product_3 from "../assets/img/p-3.png";

const productList = [
  {
    imgUrl: `${product_1}`,
    title: "焦糖瑪卡龍",
    price: "NT$ 450",
  },
  {
    imgUrl: `${product_2}`,
    title: "焦糖瑪卡龍",
    price: "NT$ 450",
  },
  {
    imgUrl: `${product_3}`,
    title: "焦糖瑪卡龍",
    price: "NT$ 450",
  },
];
const HomePage: FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEnd = e.changedTouches[0].clientX;

    // 如果手指往左滑超過 50px（開始位置 - 結束位置 > 50）
    if (touchStart - touchEnd > 50) {
      // 切換到下一張，如果是最後一張就回到第一張
      // (current + 1) % products.length 是取餘數，確保不會超出範圍
      setCurrent((prev) => (prev + 1) % productList.length);
    }

    // 如果手指往右滑超過 50px（開始位置 - 結束位置 < -50）
    if (touchStart - touchEnd < -50) {
      // 切換到上一張，如果是第一張就跳到最後一張
      // (prev - 1 + products.length) 確保不會出現負數
      setCurrent(
        (prev) => (prev - 1 + productList.length) % productList.length
      );
    }
  };

  return (
    <>
      <main className="w-full mx-auto max-w-[1024px]">
        <section className="w-full mx-auto lg:px-[42px] lg:mb-20">
          <img
            src={banner}
            alt="banner"
            className="w-full h-auto object-cover lg:h-[496px]"
          />
          <section className="mx-auto w-full grid grid-cols-3 lg:px-[42px] lg:mt-[-89px]">
            <CategoryCard imgUrl={today} title="本日精選" />
            <CategoryCard
              imgUrl={popular}
              title="人氣推薦"
              border="border-x-[1px] border-white"
            />
            <CategoryCard imgUrl={new_product_pic} title="新品上市" />
          </section>
        </section>
        <section className="hidden lg:flex lg:flex-col lg:gap-[105px] lg:w-full">
          <section className="hidden lg:block lg:relative ">
            <section className="vertical-text flex flex-col w-full h-[420px] bg-soft/100 justify-end items-center ">
              <section className="max-h-[280px] text-muted overflow-hidden font-light flex flex-col whitespace-nowrap gap-5 ml-[557px]">
                <p>青山依舊在，幾度夕陽紅。慣看秋月春</p>
                <p>一壺濁酒喜相逢，浪花淘盡英雄。是非</p>
                <p>轉頭空，滾滾長江東逝水，白髮漁樵江</p>
                <p>古今多少事，都付笑談中。</p>
                <p className="w-4" />
                <p>是非成敗轉頭空，滾滾長江東逝水，白。</p>
                <p>樵江渚上，古今多少事，都付笑談中。</p>
              </section>
            </section>
            <div className="flex justify-between z-100 -mt-110 mx-[42px]">
              <img
                src={why_make_dessert_pic}
                alt=""
                className="h-[460px] w-auto aspect-square object-cover "
              />
              <img
                src={why_make_dessert_title_desk}
                alt=""
                className="w-[88px] h-[307px] object-cover"
              />
            </div>
          </section>
          <section className="hidden lg:block lg:relative ">
            <section className="vertical-text flex flex-col w-full h-[420px] bg-soft/100 justify-end items-center">
              <section className="max-h-[280px] text-muted overflow-hidden font-light flex flex-col whitespace-nowrap ml-[55.5px] gap-6 pr-10">
                <p>青山依舊在，幾度夕陽紅。慣看秋月春</p>
                <p>一壺濁酒喜相逢，浪花淘盡英雄。是非</p>
                <p>轉頭空，滾滾長江東逝水，白髮漁樵江</p>
                <p>古今多少事，都付笑談中。</p>
                <p className="w-4"></p>
                <p>是非成敗轉頭空，滾滾長江東逝水，白。</p>
                <p>樵江渚上，古今多少事，都付笑談中。</p>
              </section>
            </section>
            <div className="flex justify-end z-100 -mt-110 mx-[42px] gap-[42px]">
              <img
                src={why_eat_dessert_title_desk}
                alt=""
                className="w-[88px] h-[307px] object-cover"
              />
              <img
                src={why_eat_dessert_pic}
                alt=""
                className="h-[460px] w-auto aspect-square object-cover "
              />
            </div>
          </section>
        </section>
        <section className="block lg:hidden">
          <section className="flex flex-col w-full">
            <figure className="w-full h-[120px] px-[90px] flex items-center justify-center lg:w-[90px] lg:h-[308px] lg:px-0 lg:order-3 ">
              <img
                src={why_make_dessert_title}
                alt=""
                className="w-full h-auto object-cover"
              />
            </figure>
            <img
              src={why_make_dessert_pic}
              alt=""
              className="w-full h-[250px] object-cover lg:hidden"
            />
            <div className="flex flex-col p-[30px] bg-soft/100 leading-8 text-muted justify-between gap-8">
              <p>
                青山依舊在，幾度夕陽紅。慣看秋月春風。
                一壺濁酒喜相逢，浪花淘盡英雄。是非成敗
                轉頭空，滾滾長江東逝水，白髮漁樵江渚
                上，古今多少事，都付笑談中。
              </p>
              <p>
                是非成敗轉頭空，青山依舊在，幾度夕陽
                紅。白髮漁樵江渚上，古今多少事，都付笑 談中。
              </p>
            </div>
          </section>
          <section className="flex flex-col w-full">
            <figure className="w-full h-[120px] px-[90px] flex items-center justify-center">
              <img
                src={why_eat_dessert_title}
                alt=""
                className="w-full h-auto object-cover"
              />
            </figure>
            <img
              src={why_eat_dessert_pic}
              alt=""
              className="w-full h-[250px] object-cover"
            />
            <div className="flex flex-col p-[30px] bg-soft/100 leading-8 text-muted justify-between gap-8">
              <p>
                青山依舊在，幾度夕陽紅。慣看秋月春風。
                一壺濁酒喜相逢，浪花淘盡英雄。是非成敗
                轉頭空，滾滾長江東逝水，白髮漁樵江渚
                上，古今多少事，都付笑談中。
              </p>
              <p>
                是非成敗轉頭空，青山依舊在，幾度夕陽
                紅。白髮漁樵江渚上，古今多少事，都付笑 談中。
              </p>
            </div>
          </section>
        </section>
        <section className="w-full flex flex-col">
          <figure className="w-full h-[120px] px-[75px] flex items-center justify-center">
            <img
              src={want_to_eat_no_reason_title}
              alt=""
              className="w-full h-auto object-cover"
            />
          </figure>
          {productList.map((p, i) => (
            <ProductCard
              imgUrl={p.imgUrl}
              title={p.title}
              price={p.price}
              key={i}
            />
          ))}
        </section>
      </main>
    </>
  );
};
export default HomePage;
