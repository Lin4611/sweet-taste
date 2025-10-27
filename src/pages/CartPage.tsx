import { useNavigate } from "react-router-dom";
import p1 from "../assets/img/p-1.png";
import p2 from "../assets/img/p-2.png";
import p3 from "../assets/img/p-3.png";
import CartItemCard from "../components/CartItemCard";
const CartList = [
  {
    id: 1,
    imgUrl: p1,
    name: "焦糖瑪卡龍",
    price: 450,
    count: 1,
  },
  {
    id: 2,
    imgUrl: p2,
    name: "焦糖1瑪卡龍",
    price: 450,
    count: 3,
  },
  {
    id: 3,
    imgUrl: p3,
    name: "焦糖2瑪卡龍",
    price: 450,
    count: 2,
  },
];
const CartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px] lg:px-[42px] lg:pt-15">
        <section className="w-full flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:max-w-[620px] ">
            <h2 className="text-title text-primary leading-5 font-semibold bg-soft/100 w-full  flex items-center justify-center py-6">
              您的購物車
            </h2>
            <section className="w-full flex flex-col py-[30px] px-[30px] gap-[30px] lg:px-0">
              {CartList.map((item) => (
                <CartItemCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  count={item.count}
                />
              ))}
            </section>
          </div>

          <section className="w-full flex flex-col lg:max-w-[300px] lg:bg-primary">
            <div className="w-full flex flex-col items-center px-[30px] gap-4 pb-4 lg:px-4">
              <h2 className="text-title text-primary leading-5 bg-soft lg:bg-transparent w-full flex justify-center items-center py-5 px-[109px] lg:px-0 lg:text-soft lg:border-b border-soft">
                訂單摘要
              </h2>
              <section className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between text-primary font-light leading-5 lg:text-soft">
                  <p>小計</p>
                  <p>NT$2,700</p>
                </div>
                <div className="w-full flex justify-between text-primary font-light leading-5 lg:text-soft">
                  <p>運費</p>
                  <p>NT$300</p>
                </div>
              </section>
              <div className="w-full flex justify-between text-subtitle text-primary font-semibold leading-5 lg:text-soft">
                <h3>總計</h3>
                <p>NT$3,000</p>
              </div>
            </div>

            <button
              type="button"
              className="text-title text-primary font-semibold flex justify-center items-center bg-accent py-4 active:bg-soft hover:bg-soft"
              onClick={() => navigate("/checkout/shipping")}
            >
              結帳
            </button>
          </section>
        </section>
      </main>
    </>
  );
};
export default CartPage;
