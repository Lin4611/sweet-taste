import { useRef, type FC } from "react";
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
import want_to_eat_no_reason_title_desktop from "../assets/img/title-pic/desktop-title-3.svg";
import { productList } from "../data/productList";
import arrow_left from "../assets/img/icon/arrow_left.png";
import arrow_right from "../assets/img/icon/arrow_right.png";
import { useNavigate } from "react-router-dom";
const HomePage: FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const todayList = productList.filter(e=>e.series==="today");
  //切不同的商品列表
  const scrollPage = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * el.clientWidth,
      behavior: "smooth",
    });
  };

  //按下的是哪個系列
  const goSeries = (s: "all" | "today" | "popular" | "new") => {
    navigate(`/products`,{state:{series:s}});
  };

  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px]">
        <section className="w-full mx-auto lg:px-[42px] lg:mb-5">
          <img
            src={banner}
            alt="banner"
            className="w-full h-auto object-cover lg:h-[496px]"
          />
          <section className="mx-auto w-full grid grid-cols-3 lg:px-[42px] lg:mt-[-89px]">
            <button type="button" onClick={() => goSeries("today")} className="block h-[180px] lg:h-[256px]">
              <CategoryCard imgUrl={today} title="本日精選" />
            </button>
            <button type="button" onClick={() => goSeries("popular")} className="block h-[180px] lg:h-[256px]">
              <CategoryCard
                imgUrl={popular}
                title="人氣推薦"
                border="border-x-[1px] border-white"
              />
            </button>
            <button type="button" onClick={() => goSeries("new")} className="block h-[180px] lg:h-[256px]">
              <CategoryCard imgUrl={new_product_pic} title="新品上市" />
            </button>
          </section>
        </section>
        {/* 電腦排版 */}
        <section className="pb-[30px] lg:py-15">
          <section className="hidden lg:flex lg:flex-col lg:gap-[105px] lg:w-full lg:mb-20">
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
              <div className="flex justify-between z-[50] -mt-110 mx-[42px]">
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
              <div className="flex justify-end z-[50] -mt-110 mx-[42px] gap-[42px]">
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
          {/* 手機排版 */}
          <section className="block lg:hidden">
            <section className="flex flex-col w-full">
              <figure className="w-full h-[120px] px-[90px] flex items-center justify-center lg:w-[90px] lg:h-[308px] lg:px-0 ">
                <img
                  src={why_make_dessert_title}
                  alt=""
                  className="w-[196px] h-[60px] object-cover"
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
                  className="w-[196px] h-[60px] object-cover"
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
          <section className="w-full flex flex-col items-center">
            <figure className="w-full h-[120px] px-[75px] flex items-center justify-center lg:h-[377px] lg:mb-20">
              <img
                src={want_to_eat_no_reason_title}
                alt=""
                className="w-[226px] h-[60px] object-cover block lg:hidden"
              />
              <img
                src={want_to_eat_no_reason_title_desktop}
                alt=""
                className="hidden lg:block w-[89px] h-[377px]"
              />
            </figure>
            <section className="relative w-full mx-auto max-w-[315px] md:max-w-[650px] lg:max-w-[1024px] lg:px-[42px]">
              <button
                type="button"
                className="hidden z-10 absolute bg-soft/100 rounded-full w-10 h-10 lg:flex items-center justify-center top-1/2 left-0 hover:bg-accent"
                onClick={() => scrollPage(-1)}
              >
                <img
                  src={arrow_left}
                  alt="left"
                  className="w-8 h-8 object-cover"
                />
              </button>
              <div
                className="
                  flex gap-4 overflow-x-auto scroll-smooth
                  snap-x snap-mandatory
                  [-ms-overflow-style:none] [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
                ref={scrollerRef}
              >
                {todayList.map((p) => (
                  <div
                    key={p.id}
                    className="snap-start shrink-0 basis-full md:basis-1/2 lg:basis-[300px]"
                  >
                    <ProductCard
                      imgUrl={p.imgUrl}
                      title={p.title}
                      price={p.price}
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="hidden z-10 absolute bg-soft/100 rounded-full w-10 h-10 lg:flex items-center justify-center top-1/2 right-0 hover:bg-accent"
                onClick={() => scrollPage(1)}
              >
                <img
                  src={arrow_right}
                  alt="right"
                  className="w-8 h-8 object-cover"
                />
              </button>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};
export default HomePage;
