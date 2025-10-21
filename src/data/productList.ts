import p1 from "../assets/img/p-1.png";
import p2 from "../assets/img/p-2.png";
import p3 from "../assets/img/p-3.png";
import p4 from "../assets/img/p-4.png";
import p5 from "../assets/img/p-5.png";
import p6 from "../assets/img/p-6.png";
import p7 from "../assets/img/p-7.avif";
import p8 from "../assets/img/p-8.avif";
import p9 from "../assets/img/p-9.avif";

export interface Product {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
}

export const productList: Product[] = [
  { id: 1, imgUrl: p1, title: "焦糖瑪卡龍", price: "NT$ 450" },
  { id: 2, imgUrl: p2, title: "抹茶紅豆蛋糕", price: "NT$ 480" },
  { id: 3, imgUrl: p3, title: "藍莓生乳酪", price: "NT$ 420" },
  { id: 4, imgUrl: p4, title: "草莓塔", price: "NT$ 490" },
  { id: 5, imgUrl: p5, title: "提拉米蘇", price: "NT$ 500" },
  { id: 6, imgUrl: p6, title: "覆盆子慕斯", price: "NT$ 460" },
  { id: 7, imgUrl: p7, title: "香草布丁", price: "NT$ 350" },
  { id: 8, imgUrl: p8, title: "巧克力布朗尼", price: "NT$ 390" },
  { id: 9, imgUrl: p9, title: "檸檬塔", price: "NT$ 430" },
  { id: 10, imgUrl: p1, title: "焦糖瑪卡龍豪華版", price: "NT$ 480" },
  { id: 11, imgUrl: p2, title: "抹茶紅豆蛋糕捲", price: "NT$ 460" },
  { id: 12, imgUrl: p3, title: "藍莓乳酪杯", price: "NT$ 380" },
  { id: 13, imgUrl: p4, title: "草莓卡士達塔", price: "NT$ 520" },
  { id: 14, imgUrl: p5, title: "提拉米蘇經典版", price: "NT$ 530" },
  { id: 15, imgUrl: p6, title: "覆盆子慕斯切片", price: "NT$ 470" },
  { id: 16, imgUrl: p7, title: "香草布丁燒", price: "NT$ 360" },
  { id: 17, imgUrl: p8, title: "巧克力布朗尼重磅版", price: "NT$ 420" },
  { id: 18, imgUrl: p9, title: "檸檬塔迷你版", price: "NT$ 400" },
  { id: 19, imgUrl: p1, title: "焦糖瑪卡龍禮盒", price: "NT$ 520" },
  { id: 20, imgUrl: p2, title: "抹茶紅豆慕斯", price: "NT$ 490" },
];