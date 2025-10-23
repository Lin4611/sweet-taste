
interface CartItemCardProps {
  imgUrl: string;
  name: string;
  price:number;
  count:number;
}


const CartItemCard: React.FC<CartItemCardProps> = ({
    imgUrl,
    name,
    price,
    count
}) => {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex justify-between pb-2 border-b border-soft">
        <img src={imgUrl} alt={name} className="w-[157px] h-[106px] object-cover" />
        <div className="flex flex-col justify-between">
          <h4 className="text-subtitle text-primary font-light leading-5">
            {name}
          </h4>
          <p className="text-primary">NT$ {price}</p>
          <div className="flex text-primary text-center font-light">
            <button
              type="button"
              className="py-[13px] px-[19px] border border-soft"
            >
              -
            </button>
            <button
              type="button"
              className="py-[13px] px-[19px] border border-soft"
            >
              {count}
            </button>
            <button
              type="button"
              className="py-[13px] px-[19px] border border-soft"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <section className="w-full flex justify-end items-center border-b border-soft py-2">
        <p className="text-subtitle text-primary font-semibold leading-5 ">
          {price*count}
        </p>
      </section>
    </section>
  );
};

export default CartItemCard;
