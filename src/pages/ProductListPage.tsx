import { useMemo, useState, type FC } from "react";
import banner_pic from "../assets/img/banner.png";
import btnPrev from "../assets/img/icon/arrow_left.png";
import btnNext from "../assets/img/icon/arrow_right.png";
import ProductCard from "../components/ProductCard";
import { productList } from "../data/productList";
const mobileItems: number = 3;
const desktopItems: number = 6;
const ProductListPage: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPrePage, setItemsPrePage] = useState(
    window.matchMedia("(max-width:640px)").matches ? mobileItems : desktopItems
  );
  const totalPages = Math.ceil(productList.length / itemsPrePage);
  const pageProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPrePage;
    const end = start + itemsPrePage;
    return productList.slice(start, end);
  }, [productList, currentPage]);
  const goToPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const goToPages = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
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
              <section className="py-[30px] px-[30px] grid grid-cols-1 gap-5 lg:grid-cols-2 lg:p-0">
                {pageProducts.map((p, i) => (
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
                  onClick={goToPrev}
                  disabled={currentPage === 1}
                  className={`h-[60px] w-[60px] flex justify-center items-center border border-soft hover:bg-soft active:bg-soft ${
                    currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <img src={btnPrev} alt="" className="w-6 h-6 object-cover" />
                </button>
                {pageNumbers.map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => goToPages(n)}
                    className={`h-[60px] w-[60px] flex justify-center items-center border border-soft ${currentPage === n ? "bg-primary text-invert": ""}  hover:bg-primary hover:text-invert active:bg-primary active:text-invert`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className={`h-[60px] w-[60px] flex justify-center items-center border border-soft hover:bg-soft active:bg-soft ${
                    currentPage === totalPages
                      ? "opacity-40 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <img src={btnNext} alt="" className="w-6 h-6 object-cover" />
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
