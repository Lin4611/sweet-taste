import type { FC } from "react";
import CategoryCard from "../components/CategoryCard";
import banner from "../assets/img/home-banner.avif";
import today from "../assets/img/today.avif";
import popular from "../assets/img/popular.avif";
import new_product_pic from "../assets/img/new.avif";
import why_make_dessert_pic from "../assets/img/p-8.avif";
import why_make_dessert_title from "../assets/img/title-pic/mobile-title-4.svg";
import why_eat_dessert_pic from "../assets/img/p-7.avif"
import why_eat_dessert_title from "../assets/img/title-pic/mobile-title-3.svg"
const HomePage: FC = () => {
  return (
    <>
      <main className="w-full mx-auto lg:px-[42px]">
        <img
          src={banner}
          alt="banner"
          className="w-full h-auto object-cover lg:h-[496px]"
        />
        <section className="mx-auto w-full grid grid-cols-3 lg:px-[42px] lg:mt-[-89px]">
          <CategoryCard
            imgUrl={today}
            title="本日精選"
            bgColor="bg-accent/80"
            textColor="text-primary"
          />
          <CategoryCard
            imgUrl={popular}
            title="人氣推薦"
            bgColor="bg-primary/80"
            textColor="text-invert"
            textWeight="font-light"
            border="border-x-[1px] border-white"
          />
          <CategoryCard
            imgUrl={new_product_pic}
            title="新品上市"
            bgColor="bg-primary/80"
            textColor="text-invert"
            textWeight="font-light"
          />
        </section>
        <section className="flex flex-col w-full">
          <figure className="w-full h-[120px] px-[90px] flex items-center justify-center">
            <img
              src={why_make_dessert_title}
              alt=""
              className="w-full h-auto object-cover"
            />
          </figure>
          <img
            src={why_make_dessert_pic}
            alt=""
            className="w-full h-[250px] object-cover"
          />
          <div className="flex flex-col p-[30px] bg-soft/100 leading-8 text-muted justify-between gap-8">
            <p>
              青山依舊在，幾度夕陽紅。慣看秋月春風。
              一壺濁酒喜相逢，浪花淘盡英雄。是非成敗
              轉頭空，滾滾長江東逝水，白髮漁樵江渚 上，古今多少事，都付笑談中。
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
              轉頭空，滾滾長江東逝水，白髮漁樵江渚 上，古今多少事，都付笑談中。
            </p>
            <p>
              是非成敗轉頭空，青山依舊在，幾度夕陽
              紅。白髮漁樵江渚上，古今多少事，都付笑 談中。
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
export default HomePage;
