import React, { useState } from "react";
import heart from "../assets/img/icon/favorite_border.png";
import heart_fill from "../assets/img/icon/heart-fill.svg";
interface ProductCardProps {
  imgUrl: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgUrl, title, price }) => {
  const [addlike, setAddLike] = useState(false);
  const hadnleClick = () => setAddLike(!addlike);
  return (
    <>
      <section className="w-[315px] h-[436px] flex flex-col mx-auto relative lg:w-[300px]">
        <figure className="h-[315px] w-full">
          <img
            src={imgUrl}
            alt=""
            className="h-[315px] w-full object-cover aspect-square"
          />
        </figure>
        <section className="flex h-[56px] items-center justify-between">
          <p className="text-subtitle text-primary/100 font-light leading-5 flex justify-center items-center h-full w-[173px] border-x-1 border-soft">
            {title}
          </p>
          <p className="text-subtitle text-primary/100 font-semibold leading-6 w-[127px] h-full flex justify-center items-center border-r-1 border-soft">
            {price}
          </p>
        </section>
        <button
          type="button"
          className="w-full h-[65px] bg-soft/100 border-1 border-soft text-title text-primary leading-5 flex justify-center items-center 
          active:bg-primary/100 active:text-invert hover:bg-primary/100 hover:text-invert" 
        >
          加入購物車
        </button>
        <section className="flex justify-between -mt-[435px] px-5">
          <div className="vertical-text bg-primary/100 w-[36px] h-[107px] text-soft/100 leading-5 flex justify-center items-center tracking-[0.25rem]">
            <p>本日精選</p>
          </div>
          <button
            type="button"
            className="w-[24px] h-[24px] mt-[19px] hover:shadow-lg shadow-primary rounded-2xl transition-shadow duration-300 scale-105"
            onClick={hadnleClick}
          >
            <img
              src={addlike ? heart_fill : heart}
              alt=""
              className="w-full h-auto object-cover"
            />
          </button>
        </section>
      </section>
    </>
  );
};
export default ProductCard;
