import React from "react";

interface CategoryCardProps {
  imgUrl: string;
  title: string;
  border?: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  imgUrl,
  title,
  border,
}) => {
  return (
    <section
      className={`group h-[180px] overflow-hidden relative ${border} lg:h-[256px]`}
    >
      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
      <div className='absolute inset-0 bg-primary/80 backdrop-blur-[5px] group-hover:bg-accent/80 group-active:bg-accent/80'></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className='font-light text-subtitle text-invert vertical-text leading-[24px] tracking-[0.24rem] group-hover:text-primary group-active:text-primary lg:tracking-[0.3rem]'
        >
          {title}
        </p>
      </div>
    </section>
  );
};
export default CategoryCard;
