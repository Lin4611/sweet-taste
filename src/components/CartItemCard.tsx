import delete_icon from "../assets/img/icon/delete_icon.svg";
interface CartItemCardProps {
  imgUrl: string;
  name: string;
  price: number;
  count: number;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  imgUrl,
  name,
  price,
  count,
}) => {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <div className="w-full flex justify-between pb-2 border-b border-soft lg:justify-around lg:pb-4">
        <img
          src={imgUrl}
          alt={name}
          className="w-[157px] h-[106px] object-cover lg:w-[110px] lg:h-[110px] lg:aspect-square"
        />
        <div className="flex flex-col justify-between lg:flex-row lg:items-center lg:justify-around lg:w-full">
          <div className="flex flex-col">
            <h4 className="text-subtitle text-primary font-light leading-5">
              {name}
            </h4>
            <p className="text-primary">NT$ {price}</p>
          </div>

          <div className="flex text-primary text-center font-light">
            <button type="button" className="w-12 h-12 border border-soft">
              -
            </button>
            <button type="button" className="w-12 h-12 border border-soft">
              {count}
            </button>
            <button type="button" className="w-12 h-12 border border-soft">
              +
            </button>
          </div>
        </div>
      </div>
      <section className="w-full flex justify-end items-center border-b border-soft py-2 lg:justify-around">
        <p className="text-subtitle text-primary font-semibold leading-5 ">
          NT${price * count}
        </p>
        <img src={delete_icon} alt="" className="hidden lg:block w-6 h-6 " />
      </section>
    </section>
  );
};

export default CartItemCard;
