import { type FC } from "react";
import banner_pic from "../assets/img/banner.png";
const ProductListPage: FC = () => {
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px]">
        <figure className="w-full  h-auto lg:px-[42px] lg:h-auto">
            <img src={banner_pic} alt="banner" className="w-full h-[277px] object-cover lg:h-auto" />
        </figure>
        
      </main>
    </>
  );
};
export default ProductListPage
