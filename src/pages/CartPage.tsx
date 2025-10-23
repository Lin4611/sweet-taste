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
  return (
    <>
      <main className="w-full mx-auto lg:max-w-[1024px]">
        <section className="w-full flex flex-col items-center">
          <h2 className="text-title text-primary leading-5 font-semibold bg-soft/100 w-full  flex items-center justify-center py-6">
            您的購物車
          </h2>
          <section className="w-full flex flex-col py-[30px] px-[30px] gap-[30px]">
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
        </section>
      </main>
    </>
  );
};
export default CartPage;
