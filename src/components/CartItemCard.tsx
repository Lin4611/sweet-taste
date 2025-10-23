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
    <section className="w-full flex flex-col items-center lg:flex-row lg:border-b lg:border-soft">
      <div className="w-full flex justify-between pb-2 border-b border-soft lg:justify-normal lg:pb-4 lg:gap-[39px] lg:border-0">
        <img
          src={imgUrl}
          alt={name}
          className="w-[157px] h-[106px] object-cover lg:w-[110px] lg:h-[110px] lg:aspect-square"
        />
        <div className="w-full flex flex-col max-w-36 justify-between lg:flex-row lg:items-center lg:justify-between lg:max-w-[290px]">
          <div className="flex flex-col lg:w-full">
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
      <section className="w-full flex items-center justify-between border-b border-soft py-2 lg:justify-end lg:gap-4 lg:max-w-[145px] lg:border-0 lg:p-0">
        <label className="text-subtitle text-primary font-semibold leading-5 flex justify-center items-center">
          <span>NT${price * count}</span>
        </label>
        <img src={delete_icon} alt="" className="w-6 h-6 lg:block hidden" />
      </section>
    </section>
  );
};

export default CartItemCard;
