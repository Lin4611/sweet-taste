import { useEffect, useMemo, useState, type FC } from "react";
import banner_pic from "../assets/img/product_banner.avif";
import banner_title from "../assets/img/title-pic/desktop-title-3.svg";
import btnPrev from "../assets/img/icon/arrow_left.png";
import btnNext from "../assets/img/icon/arrow_right.png";
import ProductCard from "../components/ProductCard";
import { productList } from "../data/productList";
import { getVisiblePages } from "../utils/pagination";
import { useLocation } from "react-router-dom";
const mobileItems: number = 3;
const desktopItems: number = 6;

const ProductListPage: FC = () => {
  //目前顯示的頁數
  const [currentPage, setCurrentPage] = useState<number>(1);
  //一頁顯示幾個
  const [itemsPrePage, setItemsPrePage] = useState(
    window.matchMedia("(max-width:640px)").matches ? mobileItems : desktopItems
  );

  const location = useLocation();
  //設定一開始的類別資料
  const state = location.state as {
    series?: "all" | "today" | "popular" | "new";
  } | null;
  //商品的資料
  const [productCategoryList, setProductCategoryList] = useState(productList);
  //目前顯示的分類
  const [category, setCategory] = useState<"all" | "today" | "new" | "popular">(
    "all"
  );
  //計算總共的頁數
  const totalPages = Math.ceil(productCategoryList.length / itemsPrePage);
  
  //計算目前頁面顯示的商品，目前頁數或是商品的資料改變或裝置的尺寸改變就更新顯示商品。
  const pageProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPrePage;
    const end = start + itemsPrePage;
    return productCategoryList.slice(start, end);
  }, [productCategoryList, currentPage, itemsPrePage]);
  //去前一頁的函式最前面的頁面是第一頁
  const goToPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  //去下一頁的函式最後一頁是計算出來的總頁數
  const goToNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  //可視的頁數，目前頁面和最後一頁交給函式計算下方的切換頁面按鈕。
  const visiblePages = getVisiblePages(currentPage, totalPages);
  
  //去往目標頁數
  const goToPages = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  
  //判斷按下的標籤是哪個分類
  const handleCategory = (c: "all" | "today" | "new" | "popular") => {
    setCurrentPage(1);
    setCategory(c);
    setProductCategoryList(
      c === "all" ? productList : productList.filter((e) => e.series === c)
    );
  };
  //當從首頁切過來時有沒有帶值，若有的話就依照該分類給商品。
  useEffect(() => {
    if (state?.series) {
      setCategory(state.series);
      setProductCategoryList(
        state.series === "all"
          ? productList
          : productList.filter((p) => p.series === state.series)
      );
    } else {
      setCategory("all");
      setProductCategoryList(productList);
    }
  }, [state]);
  // RWD 監聽
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:640px)");
    const handleResize = (e: MediaQueryListEvent) => {
      setItemsPrePage(e.matches ? mobileItems : desktopItems);
      setCurrentPage(1);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px] lg:px-[42px]">
        <figure className="relative w-full h-auto lg:h-auto">
          <img
            src={banner_pic}
            alt="banner"
            className="w-full h-[277px] object-cover lg:h-auto"
          />
          <img
            src={banner_title}
            alt="title"
            className="z-10 absolute h-[219px] top-[30px] right-[30px] lg:h-[328px] lg:right-10"
          />
        </figure>
        <section className="flex flex-col w-full py-[30px]  lg:py-15">
          <section className="flex flex-col justify-between lg:flex-row lg:gap-5">
            <ul className="flex flex-col items-center w-full text-primary text-title font-semibold leading-10 text-center lg:w-[300px]">
              <p className="bg-primary text-invert py-3 w-full">甜點類別</p>
              <li
                className={`py-3 w-full border border-soft ${
                  category === "all" ? "bg-soft/100" : "bg-none"
                } hover:bg-soft/100 active:bg-soft/100`}
                onClick={() => handleCategory("all")}
              >
                所有甜點（{productList.length}）
              </li>
              <li
                className={`py-3 w-full border border-soft ${
                  category === "today" ? "bg-soft/100" : "bg-none"
                } hover:bg-soft/100 active:bg-soft/100`}
                onClick={() => handleCategory("today")}
              >
                本日精選
                {`（${productList.filter((e) => e.series == "today").length}）`}
              </li>
              <li
                className={`py-3 w-full border border-soft ${
                  category === "popular" ? "bg-soft/100" : "bg-none"
                } hover:bg-soft/100 active:bg-soft/100`}
                onClick={() => handleCategory("popular")}
              >
                人氣推薦
                {`（${
                  productList.filter((e) => e.series == "popular").length
                }）`}
              </li>
              <li
                className={`py-3 w-full border border-soft ${
                  category === "new" ? "bg-soft/100" : "bg-none"
                } hover:bg-soft/100 active:bg-soft/100`}
                onClick={() => handleCategory("new")}
              >
                新品上市
                {`（${productList.filter((e) => e.series == "new").length}）`}
              </li>
            </ul>

            <div className="flex flex-col gap-[30px] items-center">
              <section className="py-[30px] px-[30px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 lg:p-0">
                {pageProducts.map((p, i) => (
                  <ProductCard
                    key={i}
                    imgUrl={p.imgUrl}
                    title={p.title}
                    price={p.price}
                  />
                ))}
              </section>
              <section className="flex justify-center col-span-full text-subtitle font-light text-primary lg:self-end">
                <button
                  type="button"
                  onClick={goToPrev}
                  disabled={currentPage === 1}
                  className={`w-[40px] h-[40px] flex justify-center items-center border border-soft lg:h-[60px] lg:w-[60px] hover:bg-soft active:bg-soft ${
                    currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <img src={btnPrev} alt="" className="w-6 h-6 object-cover" />
                </button>
                {visiblePages.map((n, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => typeof n === "number" && goToPages(n)}
                    disabled={n === "..."}
                    className={`w-[40px] h-[40px] flex justify-center items-center lg:h-[60px] lg:w-[60px] border border-soft ${
                      currentPage === n ? "bg-primary text-invert" : ""
                    } hover:bg-primary hover:text-invert active:bg-primary active:text-invert disabled:cursor-default disabled:opacity-50`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className={`w-[40px] h-[40px] flex justify-center items-center lg:h-[60px] lg:w-[60px] border border-soft hover:bg-soft active:bg-soft ${
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
