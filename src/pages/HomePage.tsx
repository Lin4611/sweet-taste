import type { FC } from "react";
import CategoryCard from "../components/CategoryCard";
import banner from "../assets/img/home-banner.avif";
import today from "../assets/img/today.avif";
import popular from "../assets/img/popular.avif";
import new_product_pic from "../assets/img/new.avif";
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
        <section className="flex w-full">
          <img src="" alt="" />
        </section>
      </main>
    </>
  );
};
export default HomePage;
