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
  series?: "today" | "popular" | "new";
}

export const productList: Product[] = [
  // ====== 本日精選 (today) ======
  { id: 1, imgUrl: p1, title: "焦糖瑪卡龍", price: "NT$ 450", series: "today" },
  { id: 2, imgUrl: p2, title: "抹茶蛋糕", price: "NT$ 480", series: "today" },
  { id: 3, imgUrl: p3, title: "藍莓乳酪", price: "NT$ 420", series: "today" },
  { id: 4, imgUrl: p4, title: "草莓塔", price: "NT$ 490", series: "today" },
  { id: 5, imgUrl: p5, title: "提拉米蘇", price: "NT$ 500", series: "today" },
  { id: 6, imgUrl: p6, title: "覆盆子派", price: "NT$ 460", series: "today" },
  { id: 7, imgUrl: p7, title: "香草布丁", price: "NT$ 350", series: "today" },
  { id: 8, imgUrl: p8, title: "巧克布朗", price: "NT$ 390", series: "today" },
  { id: 9, imgUrl: p9, title: "檸檬塔", price: "NT$ 430", series: "today" },
  { id: 10, imgUrl: p1, title: "焦糖蛋糕", price: "NT$ 460", series: "today" },
  { id: 11, imgUrl: p2, title: "紅豆慕斯", price: "NT$ 470", series: "today" },
  { id: 12, imgUrl: p3, title: "藍莓塔", price: "NT$ 410", series: "today" },
  { id: 13, imgUrl: p4, title: "草莓慕斯", price: "NT$ 520", series: "today" },
  { id: 14, imgUrl: p5, title: "經典米蘇", price: "NT$ 530", series: "today" },
  { id: 15, imgUrl: p6, title: "覆盆奶酪", price: "NT$ 470", series: "today" },
  { id: 16, imgUrl: p7, title: "焦糖布丁", price: "NT$ 360", series: "today" },
  { id: 17, imgUrl: p8, title: "重磅布朗", price: "NT$ 420", series: "today" },
  { id: 18, imgUrl: p9, title: "檸檬奶霜", price: "NT$ 400", series: "today" },
  { id: 19, imgUrl: p1, title: "瑪卡龍盒", price: "NT$ 520", series: "today" },
  { id: 20, imgUrl: p2, title: "抹茶千層", price: "NT$ 490", series: "today" },

  // ====== 人氣推薦 (popular) ======
  { id: 21, imgUrl: p3, title: "藍莓蛋糕", price: "NT$ 460", series: "popular" },
  { id: 22, imgUrl: p4, title: "草莓起司", price: "NT$ 480", series: "popular" },
  { id: 23, imgUrl: p5, title: "提拉杯", price: "NT$ 390", series: "popular" },
  { id: 24, imgUrl: p6, title: "覆盆蛋糕", price: "NT$ 420", series: "popular" },
  { id: 25, imgUrl: p7, title: "香草塔", price: "NT$ 340", series: "popular" },
  { id: 26, imgUrl: p8, title: "布朗堅果", price: "NT$ 450", series: "popular" },
  { id: 27, imgUrl: p9, title: "檸檬禮盒", price: "NT$ 500", series: "popular" },
  { id: 28, imgUrl: p1, title: "焦糖小塔", price: "NT$ 480", series: "popular" },
  { id: 29, imgUrl: p2, title: "抹茶塔", price: "NT$ 550", series: "popular" },
  { id: 30, imgUrl: p3, title: "藍莓捲", price: "NT$ 460", series: "popular" },
  { id: 31, imgUrl: p4, title: "草莓捲", price: "NT$ 560", series: "popular" },
  { id: 32, imgUrl: p5, title: "濃厚米蘇", price: "NT$ 540", series: "popular" },
  { id: 33, imgUrl: p6, title: "覆盆切片", price: "NT$ 490", series: "popular" },
  { id: 34, imgUrl: p7, title: "香草盒", price: "NT$ 380", series: "popular" },
  { id: 35, imgUrl: p8, title: "布朗杯", price: "NT$ 360", series: "popular" },
  { id: 36, imgUrl: p9, title: "檸檬派", price: "NT$ 520", series: "popular" },
  { id: 37, imgUrl: p1, title: "瑪卡冰淇", price: "NT$ 480", series: "popular" },
  { id: 38, imgUrl: p2, title: "抹茶塔盒", price: "NT$ 450", series: "popular" },
  { id: 39, imgUrl: p3, title: "藍莓派", price: "NT$ 440", series: "popular" },
  { id: 40, imgUrl: p4, title: "草莓蛋糕", price: "NT$ 530", series: "popular" },

  // ====== 新品上市 (new) ======
  { id: 41, imgUrl: p5, title: "米蘇盒", price: "NT$ 470", series: "new" },
  { id: 42, imgUrl: p6, title: "覆盆塔", price: "NT$ 490", series: "new" },
  { id: 43, imgUrl: p7, title: "香草蛋糕", price: "NT$ 410", series: "new" },
  { id: 44, imgUrl: p8, title: "布朗焦糖", price: "NT$ 450", series: "new" },
  { id: 45, imgUrl: p9, title: "檸檬水果", price: "NT$ 480", series: "new" },
  { id: 46, imgUrl: p1, title: "焦糖塔", price: "NT$ 420", series: "new" },
  { id: 47, imgUrl: p2, title: "抹茶布丁", price: "NT$ 460", series: "new" },
  { id: 48, imgUrl: p3, title: "藍莓酥", price: "NT$ 400", series: "new" },
  { id: 49, imgUrl: p4, title: "草莓盒", price: "NT$ 490", series: "new" },
  { id: 50, imgUrl: p5, title: "米蘇雙層", price: "NT$ 550", series: "new" },
];
