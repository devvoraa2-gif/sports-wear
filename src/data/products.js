// FILE: src/data/products.js

// 1) استيراد صورك من assets/products (عدّلي الأسماء حسب ملفاتك)
import velocityRunnerImg from "../assets/img5.jpeg";
import aeroTeeMenImg     from "../assets/img6.jpeg";
import streetCourtImg    from "../assets/img7.jpeg";
import juniorSprintImg   from "../assets/img8.jpeg";
import flexShortsImg     from "../assets/img9.jpeg";


const products = [
  {
    id: 1,
    slug: "velocity-runner",
    name: "Velocity Runner",
    category: "sneakers",
    price: 1499,
    img: velocityRunnerImg,
    badge: "جديد",
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء جري خفيف ببطانة مريحة ونعل مقاوم للانزلاق."
  },
  {
    id: 2,
    slug: "aero-tee-men",
    name: "Aero Tee — رجالي",
    category: "men",
    price: 599,
    img: aeroTeeMenImg,
    badge: "رائج",
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت رياضي بخامة قابلة للتنفس ومناسبة للتمرين اليومي."
  },
  {
    id: 3,
    slug: "street-court-sneaker",
    name: "Street Court Sneaker",
    category: "sneakers",
    price: 1299,
    img: streetCourtImg,
    sizes: ["40", "41", "42", "43", "44"],
    description: "ستايل شارع مع ثبات عالي أثناء الحركة."
  },
  {
    id: 4,
    slug: "junior-sprint-tee",
    name: "Junior Sprint Tee",
    category: "kids",
    price: 399,
    img: juniorSprintImg,
    badge: "أطفال",
    sizes: ["6-8", "8-10", "10-12"],
    description: "قماش ناعم للأطفال وحركة مرنة طول اليوم."
  },
  {
    id: 5,
    slug: "flex-shorts-men",
    name: "Flex Shorts — رجالي",
    category: "men",
    price: 799,
    img: flexShortsImg,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت خفيف بجيوب عملية وتمدد مريح."
  }
];

export default products;
