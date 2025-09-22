// FILE: src/data/products.js

// 1) استيراد صورك من assets/products (عدّلي الأسماء حسب ملفاتك)
import velocityRunnerImg from "../assets/img5.jpeg";
import aeroTeeMenImg     from "../assets/img6.jpeg";
import streetCourtImg    from "../assets/img7.jpeg";
import juniorSprintImg   from "../assets/img8.jpeg";
import flexShortsImg     from "../assets/img9.jpeg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import img28 from "../assets/img28.jpg";
import img29 from "../assets/img29.jpg";
import img30 from "../assets/img30.jpg";
import img31 from "../assets/img31.jpg";
import img32 from "../assets/img32.jpg";
import img33 from "../assets/img33.jpg";
import img34 from "../assets/img34.jpg";
import img35 from "../assets/img35.jpg";
import img36 from "../assets/img36.jpg";
import img38 from "../assets/img38.jpg";
import img39 from "../assets/img39.jpg";
import img40 from "../assets/img40.jpg";
import img41 from "../assets/img41.jpg";
import img42 from "../assets/img42.jpg";
import img43 from "../assets/img43.jpg";
import img44 from "../assets/img44.jpg";
import img45 from "../assets/img45.jpg";
import img46 from "../assets/img46.jpg";
import img47 from "../assets/img47.jpg";
import img48 from "../assets/img48.jpg";
import img49 from "../assets/img49.jpg";
import img50 from "../assets/img50.jpg";
import img51 from "../assets/img51.jpg";
import img52 from "../assets/img52.jpg";
import img53 from "../assets/img53.jpg";
import img54 from "../assets/img54.jpg";
import img55 from "../assets/img55.jpg";
import img56 from "../assets/img56.jpg";
import img57 from "../assets/img57.jpg";
import img58 from "../assets/img58.jpg";
import img59 from "../assets/img59.jpg";
import img60 from "../assets/img60.jpg";
import img61 from "../assets/img61.jpg";
import img62 from "../assets/img62.jpg";


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
  },
  {
    id: 16,
    slug: "product-16",
    name: "Sneaker Pro 16",
    category: "sneakers",
    price: 1499,
    img: img16,
    badge: "جديد",
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء رياضي أنيق وخفيف."
  },
  {
    id: 17,
    slug: "product-17",
    name: "Aero Tee 17",
    category: "men",
    price: 599,
    img: img17,
    badge: "رائج",
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت مريح بخامة قطنية."
  },
  {
    id: 18,
    slug: "product-18",
    name: "Street Sneaker 18",
    category: "sneakers",
    price: 1299,
    img: img18,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء عصري مناسب للشارع."
  },
  {
    id: 19,
    slug: "product-19",
    name: "Junior Tee 19",
    category: "kids",
    price: 399,
    img: img19,
    badge: "أطفال",
    sizes: ["6-8", "8-10", "10-12"],
    description: "قميص خفيف للأطفال."
  },
  {
    id: 20,
    slug: "product-20",
    name: "Flex Shorts 20",
    category: "men",
    price: 799,
    img: img20,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت عملي وخفيف."
  },
  {
    id: 21,
    slug: "product-21",
    name: "Sneaker Pro 21",
    category: "sneakers",
    price: 1599,
    img: img21,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء رياضي متين مع دعم إضافي للكعب."
  },
  {
    id: 22,
    slug: "product-22",
    name: "Aero Tee 22",
    category: "men",
    price: 649,
    img: img22,
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت رياضي بخامة مريحة للتمارين."
  },
  {
    id: 23,
    slug: "product-23",
    name: "Street Sneaker 23",
    category: "sneakers",
    price: 1349,
    img: img23,
    sizes: ["40", "41", "42", "43", "44"],
    description: "ستايل شبابي مع وسادة مريحة."
  },
  {
    id: 24,
    slug: "product-24",
    name: "Junior Tee 24",
    category: "kids",
    price: 429,
    img: img24,
    sizes: ["6-8", "8-10", "10-12"],
    description: "ملابس مريحة للأطفال."
  },
  {
    id: 25,
    slug: "product-25",
    name: "Flex Shorts 25",
    category: "men",
    price: 829,
    img: img25,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت رياضي بخامة مرنة."
  },
  {
    id: 26,
    slug: "product-26",
    name: "Sneaker Pro 26",
    category: "sneakers",
    price: 1699,
    img: img26,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء بخامة مقاومة للماء."
  },
  {
    id: 27,
    slug: "product-27",
    name: "Aero Tee 27",
    category: "men",
    price: 699,
    img: img27,
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت خفيف مناسب للصيف."
  },
  {
    id: 28,
    slug: "product-28",
    name: "Street Sneaker 28",
    category: "sneakers",
    price: 1399,
    img: img28,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء مريح للحياة اليومية."
  },
  {
    id: 29,
    slug: "product-29",
    name: "Junior Tee 29",
    category: "kids",
    price: 449,
    img: img29,
    sizes: ["6-8", "8-10", "10-12"],
    description: "تيشيرت أطفال بألوان زاهية."
  },
  {
    id: 30,
    slug: "product-30",
    name: "Flex Shorts 30",
    category: "men",
    price: 849,
    img: img30,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت عملي مع جيوب جانبية."
  },
  {
    id: 31,
    slug: "product-31",
    name: "Sneaker Pro 31",
    category: "sneakers",
    price: 1749,
    img: img31,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء رياضي عصري مع تهوية مثالية."
  },
  {
    id: 32,
    slug: "product-32",
    name: "Aero Tee 32",
    category: "men",
    price: 719,
    img: img32,
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت كلاسيك بخامة ناعمة."
  },
  {
    id: 33,
    slug: "product-33",
    name: "Street Sneaker 33",
    category: "sneakers",
    price: 1449,
    img: img33,
    sizes: ["40", "41", "42", "43", "44"],
    description: "تصميم مميز مع وسادة هوائية."
  },
  {
    id: 34,
    slug: "product-34",
    name: "Junior Tee 34",
    category: "kids",
    price: 469,
    img: img34,
    sizes: ["6-8", "8-10", "10-12"],
    description: "قميص عملي للأطفال للحركة اليومية."
  },
  {
    id: 35,
    slug: "product-35",
    name: "Flex Shorts 35",
    category: "men",
    price: 869,
    img: img35,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت رياضي بخامة مطاطية للراحة."
  },
  {
    id: 36,
    slug: "product-36",
    name: "Sneaker Pro 36",
    category: "sneakers",
    price: 1799,
    img: img36,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء بخامات عالية الجودة."
  },
  {
    id: 38,
    slug: "product-38",
    name: "Street Sneaker 38",
    category: "sneakers",
    price: 1499,
    img: img38,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء مريح مع تصميم عصري."
  },
  {
    id: 39,
    slug: "product-39",
    name: "Junior Tee 39",
    category: "kids",
    price: 489,
    img: img39,
    sizes: ["6-8", "8-10", "10-12"],
    description: "ملابس أطفال بألوان زاهية."
  },
  {
    id: 40,
    slug: "product-40",
    name: "Flex Shorts 40",
    category: "men",
    price: 889,
    img: img40,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت مناسب للجيم والرياضة."
  },
  {
    id: 41,
    slug: "product-41",
    name: "Sneaker Pro 41",
    category: "sneakers",
    price: 1849,
    img: img41,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء خفيف الوزن بوسادة ناعمة."
  },
  {
    id: 42,
    slug: "product-42",
    name: "Aero Tee 42",
    category: "men",
    price: 759,
    img: img42,
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت بخامة رياضية عالية الجودة."
  },
  {
    id: 43,
    slug: "product-43",
    name: "Street Sneaker 43",
    category: "sneakers",
    price: 1549,
    img: img43,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء عملي للحركة اليومية."
  },
  {
    id: 44,
    slug: "product-44",
    name: "Junior Tee 44",
    category: "kids",
    price: 509,
    img: img44,
    sizes: ["6-8", "8-10", "10-12"],
    description: "قميص أطفال خفيف ومريح."
  },
  {
    id: 45,
    slug: "product-45",
    name: "Flex Shorts 45",
    category: "men",
    price: 909,
    img: img45,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت بخامة قطنية مرنة."
  },
  {
    id: 46,
    slug: "product-46",
    name: "Sneaker Pro 46",
    category: "sneakers",
    price: 1899,
    img: img46,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء رياضي متين ومناسب للجري."
  },
  {
    id: 47,
    slug: "product-47",
    name: "Aero Tee 47",
    category: "men",
    price: 779,
    img: img47,
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت كلاسيكي للرجال."
  },
  {
    id: 48,
    slug: "product-48",
    name: "Street Sneaker 48",
    category: "sneakers",
    price: 1599,
    img: img48,
    sizes: ["40", "41", "42", "43", "44"],
    description: "ستايل عصري للشباب."
  },
  {
    id: 49,
    slug: "product-49",
    name: "Junior Tee 49",
    category: "kids",
    price: 529,
    img: img49,
    sizes: ["6-8", "8-10", "10-12"],
    description: "تيشيرت أطفال مميز ومريح."
  },
  {
    id: 50,
    slug: "product-50",
    name: "Flex Shorts 50",
    category: "men",
    price: 929,
    img: img50,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت عملي للحركة اليومية."
  },
  {
    id: 51,
    slug: "product-51",
    name: "Sneaker Pro 51",
    category: "sneakers",
    price: 1949,
    img: img51,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء بجودة عالية ومريح."
  },
  {
    id: 52,
    slug: "product-52",
    name: "Aero Tee 52",
    category: "men",
    price: 799,
    img: img52,
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت عصري بتصميم أنيق."
  },
  {
    id: 53,
    slug: "product-53",
    name: "Street Sneaker 53",
    category: "sneakers",
    price: 1649,
    img: img53,
    sizes: ["40", "41", "42", "43", "44"],
    description: "تصميم عصري ومريح للقدم."
  },
  {
    id: 54,
    slug: "product-54",
    name: "Junior Tee 54",
    category: "kids",
    price: 549,
    img: img54,
    sizes: ["6-8", "8-10", "10-12"],
    description: "قميص أطفال عملي."
  },
  {
    id: 55,
    slug: "product-55",
    name: "Flex Shorts 55",
    category: "men",
    price: 949,
    img: img55,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت مريح بخامة ممتازة."
  },
  {
    id: 56,
    slug: "product-56",
    name: "Sneaker Pro 56",
    category: "sneakers",
    price: 1999,
    img: img56,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء بخامة جلدية ممتازة."
  },
  {
    id: 57,
    slug: "product-57",
    name: "Aero Tee 57",
    category: "men",
    price: 819,
    img: img57,
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت بخامة قطنية مريحة."
  },
  {
    id: 58,
    slug: "product-58",
    name: "Street Sneaker 58",
    category: "sneakers",
    price: 1699,
    img: img58,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء رياضي بخفة وراحة."
  },
  {
    id: 59,
    slug: "product-59",
    name: "Junior Tee 59",
    category: "kids",
    price: 569,
    img: img59,
    sizes: ["6-8", "8-10", "10-12"],
    description: "ملابس أطفال يومية."
  },
  {
    id: 60,
    slug: "product-60",
    name: "Flex Shorts 60",
    category: "men",
    price: 969,
    img: img60,
    sizes: ["S", "M", "L", "XL"],
    description: "شورت أنيق وعصري."
  },
  {
    id: 61,
    slug: "product-61",
    name: "Sneaker Pro 61",
    category: "sneakers",
    price: 2049,
    img: img61,
    sizes: ["40", "41", "42", "43", "44"],
    description: "حذاء رياضي متطور بأحدث الخامات."
  },
  {
    id: 62,
    slug: "product-62",
    name: "Aero Tee 62",
    category: "men",
    price: 839,
    img: img62,
    sizes: ["S", "M", "L", "XL"],
    description: "تيشيرت رجالي أنيق بخامة عالية الجودة."
  }
];

export default products;
