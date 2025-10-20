import React from "react";

interface CategoryCardProps {
  imgUrl: string;
  title: string;
  bgColor?: string;
  textColor?: string;
  textWeight?: string;
  border?: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  imgUrl,
  title,
  bgColor,
  textColor,
  textWeight = "font-semibold",
  border,
}) => {
  return (
    <section
      className={`max-h-[180px] overflow-hidden relative ${border} lg:max-h-[256px]`}
    >
      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
      <div className={`absolute inset-0 ${bgColor} backdrop-blur-[5px]`}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className={`${textWeight} text-subtitle ${textColor} vertical-text leading-24 tracking-[0.24rem] lg:tracking-[0.3rem]`}
        >
          {title}
        </p>
      </div>
    </section>
  );
};
export default CategoryCard;
