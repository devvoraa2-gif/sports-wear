// FILE: src/data/categories.js
import catSneakers from "../assets/img1.jpeg";
import catMen from "../assets/img2.jpeg";
import catKids from "../assets/img3.jpeg";

const categories = [
  {
    id: "sneakers",
    title: "أحذية رياضية",
    desc: "أداء وأناقة",
    img: catSneakers,
  },
  { id: "men", title: "رجالي", desc: "تيشيرتات وشورتات وبدل", img: catMen },
  { id: "kids", title: "أطفال", desc: "ملابس مريحة للصغار", img: catKids },
];

export default categories;
