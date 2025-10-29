import p1 from "../assets/img/p-1.png";
import p2 from "../assets/img/p-2.png";
import p3 from "../assets/img/p-3.png";
const shippingProductList = [
  {
    id: 1,
    imgUrl: p1,
    name: "焦糖瑪卡龍",
    count: 2,
    price: 450,
  },
  {
    id: 2,
    imgUrl: p2,
    name: "焦糖鬆餅",
    count: 3,
    price: 320,
  },
  {
    id: 3,
    imgUrl: p3,
    name: "布朗尼",
    count: 5,
    price: 150,
  },
];

const OrderSummaryCard = () => {
  return (
    <section className="hidden md:flex md:w-full md:max-w-[300px] lg:flex lg:max-w-[300px] lg:w-full">
      <section className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col items-center gap-4 border border-soft pb-4">
          <h2 className="text-title text-muted font-semibold leading-5 bg-soft/100 h-[65px] w-full flex justify-center items-center">
            訂單摘要
          </h2>
          <div className="w-full flex flex-col px-5 gap-4">
            <section className="w-full flex flex-col gap-2">
              <div className="w-full flex justify-between text-muted font-light leading-5">
                <p>小計</p>
                <p>NT$ 2,700</p>
              </div>
              <div className="w-full flex justify-between text-muted font-light leading-5">
                <p>運費</p>
                <p>NT$ 300</p>
              </div>
            </section>
            <div className="w-full flex justify-between text-subtitle text-muted font-semibold leading-5">
              <h3>總計</h3>
              <p>NT$3,000</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 border border-soft pb-4">
          <h2 className="text-title text-muted font-semibold leading-5 bg-soft/100 h-[65px] w-full flex justify-center items-center">
            購物清單
          </h2>
          {shippingProductList.map((p) => (
            <div className="w-full flex flex-col px-[19px] gap-4" key={p.id}>
              <section className="flex items-center w-full gap-5">
                <img
                  src={p.imgUrl}
                  alt={p.name}
                  className="w-30 h-20 object-cover"
                />
                <div className="flex flex-col gap-[2px] leading-5 text-muted w-[122px]">
                  <p className="font-light">{`${p.name}（${p.count}）`}</p>
                  <p className="text-subtitle font-semibold">
                    NT$ {p.price * p.count}
                  </p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
export default OrderSummaryCard
