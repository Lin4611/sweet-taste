import React from "react";
import heart from "../assets/img/icon/favorite_border.png";
interface ProductCardProps {
  imgUrl: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgUrl, title, price }) => {
  return (
    <>
      <section className="w-full max-w-[300px] h-auto flex flex-col mx-auto relative">
        <figure className="h-[315px] w-full">
          <img src={imgUrl} alt="" className="h-auto w-full object-cover aspect-square" />
        </figure>
        <section className="flex w-full h-[56px] items-center justify-between">
          <p className="text-subtitle text-primary/100 font-light leading-5 flex justify-center items-center h-full w-[173px] border-x-1 border-soft">
            {title}
          </p>
          <p className="text-subtitle text-primary/100 font-semibold leading-6 w-[127px] h-full flex justify-center items-center border-r-1 border-soft">
            {price}
          </p>
        </section>
        <button
          type="button"
          className="w-full h-[65px] bg-soft/100 border-1 border-soft text-title text-primary leading-5 flex justify-center items-center"
        >
          加入購物車
        </button>
        <section className="flex justify-between -mt-[435px] px-5">
          <div className="vertical-text bg-primary/100 w-[36px] h-[107px] text-soft/100 leading-5 flex justify-center items-center">
            <p>本日精選</p>
          </div>
          <button
            type="button"
            className="w-[24px] h-[24px] mt-[19px]"
          >
            <img src={heart} alt="" className="w-full h-auto object-cover" />
          </button>
        </section>
      </section>
    </>
  );
};
export default ProductCard;
