import {
  earbud1,
  earbud2,
  earbud3,
  earbud4,
  earbud5,
  earbud6,
  earbud7,
  earbud8,
  earbud9,
  earbud10,
  earbud11,
  earbud12,
  earbud13,
  earbud14,
  earbud15,
  onear1,
  onear2,
  onear3,
  onear4,
  onear5,
  onear6,
  onear7,
  onear8,
  onear9,
  onear10,
  onear11,
  onear12,
  onear13,
  onear14,
  onear15,
  speaker1,
  speaker2,
  speaker3,
  speaker4,
  speaker5,
} from "../assets/images/headphonesImgs";

const productData = [
  {
    id: 1,
    img: earbud1,
    title: "Wireless Earbuds Pro",
    price: 2500,
    category: "earbud",
    description: "Premium wireless earbuds with advanced features.",
    type: "headphones",
  },
  {
    id: 2,
    img: earbud2,
    title: "Noise-Canceling Earbuds",
    price: 3000,
    category: "earbud",
    description:
      "Experience crystal-clear sound with active noise-canceling technology.",
    type: "headphones",
  },
  {
    id: 3,
    img: earbud3,
    title: "Sporty Wireless Earphones",
    price: 1500,
    category: "earbud",
    description:
      "Designed for sports enthusiasts with sweat-resistant features.",
    type: "headphones",
  },
  {
    id: 4,
    img: earbud4,
    title: "True Wireless Earbuds",
    price: 2000,
    category: "earbud",
    description:
      "Compact and lightweight true wireless earbuds for everyday use.",
    type: "headphones",
  },
  {
    id: 5,
    img: earbud5,
    title: "Bass-Boosted In-Ear Headphones",
    price: 1800,
    category: "earbud",
    description:
      "Enjoy deep bass and immersive audio with these in-ear headphones.",
    type: "headphones",
  },
  {
    id: 6,
    img: earbud6,
    title: "Wireless Earbuds with Touch Controls",
    price: 1200,
    category: "earbud",
    description:
      "Touch-sensitive controls for easy playback and calls on the go.",
    type: "headphones",
  },
  {
    id: 7,
    img: earbud7,
    title: "Sleek Metal Finish Earphones",
    price: 1400,
    category: "earbud",
    description: "Elegantly designed earphones with a durable metal finish.",
    type: "headphones",
  },
  {
    id: 8,
    img: earbud8,
    title: "Gaming Earbuds with Mic",
    price: 1800,
    category: "earbud",
    description:
      "Immerse yourself in gaming audio with these earbuds featuring a built-in microphone.",
    type: "headphones",
  },
  {
    id: 9,
    img: earbud9,
    title: "Dual Driver Hybrid Earphones",
    price: 2500,
    category: "earbud",
    description:
      "Experience a rich audio spectrum with dual-driver hybrid technology.",
    type: "headphones",
  },
  {
    id: 10,
    img: earbud10,
    title: "Wireless Earbuds for Fitness",
    price: 1300,
    category: "earbud",
    description:
      "Designed to stay in place during workouts, these earbuds are perfect for fitness enthusiasts.",
    type: "headphones",
  },
  {
    id: 11,
    img: earbud11,
    title: "Premium Wood-encased Earphones",
    price: 3800,
    category: "earbud",
    description:
      "Eco-friendly earphones with a premium wood finish for a unique look and feel.",
    type: "headphones",
  },
  {
    id: 12,
    img: earbud12,
    title: "Wireless Earbuds with Active EQ",
    price: 3200,
    category: "earbud",
    description:
      "Customize your audio experience with built-in active EQ technology.",
    type: "headphones",
  },
  {
    id: 13,
    img: earbud13,
    title: "Budget-Friendly Earbuds",
    price: 1100,
    category: "earbud",
    description: "Affordable yet reliable earbuds with clear sound quality.",
    type: "headphones",
  },
  {
    id: 14,
    img: earbud14,
    title: "In-Ear Monitors for Stage Performances",
    price: 4200,
    category: "earbud",
    description:
      "Designed for musicians and stage performers, these in-ear monitors deliver exceptional clarity.",
    type: "headphones",
  },
  {
    id: 15,
    img: earbud15,
    title: "High-Fidelity In-Ear Monitors",
    price: 4500,
    category: "earbud",
    description:
      "Professional-grade in-ear monitors for audiophiles and musicians.",
    type: "headphones",
  },
  {
    id: 16,
    img: onear1,
    title: "Premium On-Ear Headphones",
    price: 2999,
    category: "onear",
    description:
      "Experience high-quality sound and comfort with these premium on-ear headphones.",
    type: "headphones",
  },
  {
    id: 17,
    img: onear2,
    title: "Wireless Noise-Canceling On-Ear Headphones",
    price: 3999,
    category: "onear",
    description:
      "Enjoy wireless freedom and immersive sound with active noise-canceling technology.",
    type: "headphones",
  },
  {
    id: 18,
    img: onear3,
    title: "Foldable On-Ear Headphones for Travel",
    price: 2599,
    category: "onear",
    description:
      "Compact and foldable design makes these on-ear headphones perfect for travel.",
    type: "headphones",
  },
  {
    id: 19,
    img: onear4,
    title: "Bass-Enhanced On-Ear Headphones",
    price: 1799,
    category: "onear",
    description:
      "Immerse yourself in deep bass and rich audio with these on-ear headphones.",
    type: "headphones",
  },
  {
    id: 20,
    img: onear5,
    title: "Fashionable On-Ear Headphones",
    price: 1499,
    category: "onear",
    description:
      "Combine style and audio quality with these fashionable on-ear headphones.",
    type: "headphones",
  },
  {
    id: 21,
    img: onear6,
    title: "Sports On-Ear Headphones",
    price: 2199,
    category: "onear",
    description:
      "Designed for active individuals, these on-ear headphones stay in place during workouts.",
    type: "headphones",
  },
  {
    id: 22,
    img: onear7,
    title: "Wireless On-Ear Headphones with Touch Controls",
    price: 3299,
    category: "onear",
    description:
      "Control your music and calls effortlessly with touch-sensitive controls on these wireless on-ear headphones.",
    type: "headphones",
  },
  {
    id: 23,
    img: onear8,
    title: "Retro-Style On-Ear Headphones",
    price: 2699,
    category: "onear",
    description:
      "Experience a nostalgic vibe with these retro-style on-ear headphones while enjoying modern audio technology.",
    type: "headphones",
  },
  {
    id: 24,
    img: onear9,
    title: "Gaming On-Ear Headphones with Mic",
    price: 3499,
    category: "onear",
    description:
      "Immerse yourself in gaming audio and communicate clearly with the built-in microphone on these on-ear headphones.",
    type: "headphones",
  },
  {
    id: 25,
    img: onear10,
    title: "Luxury Leather On-Ear Headphones",
    price: 4999,
    category: "onear",
    description:
      "Indulge in luxury and comfort with these leather-covered on-ear headphones that deliver premium audio quality.",
    type: "headphones",
  },
  {
    id: 26,
    img: onear11,
    title: "Wireless On-Ear Headphones for Work",
    price: 3799,
    category: "onear",
    description:
      "Stay focused during work with these wireless on-ear headphones designed for productivity.",
    type: "headphones",
  },
  {
    id: 27,
    img: onear12,
    title: "Active Noise-Canceling On-Ear Headphones",
    price: 4499,
    category: "onear",
    description:
      "Block out external noise and enjoy pure audio bliss with these active noise-canceling on-ear headphones.",
    type: "headphones",
  },
  {
    id: 28,
    img: onear13,
    title: "Ergonomic On-Ear Headphones",
    price: 2899,
    category: "onear",
    description:
      "Designed for comfort, these ergonomic on-ear headphones provide a snug fit for extended listening sessions.",
    type: "headphones",
  },
  {
    id: 29,
    img: onear14,
    title: "DJ-Style On-Ear Headphones",
    price: 3999,
    category: "onear",
    description:
      "Experience the beats like a DJ with these stylish on-ear headphones designed for music enthusiasts.",
    type: "headphones",
  },
  {
    id: 30,
    img: onear15,
    title: "High-Fidelity On-Ear Monitors",
    price: 4699,
    category: "onear",
    description:
      "For audiophiles seeking top-notch audio quality, these high-fidelity on-ear monitors deliver an exceptional listening experience.",
    type: "headphones",
  },
  {
    id: 31,
    img: speaker1,
    title: "Portable Bluetooth Speaker",
    price: 1499,
    category: "speaker",
    description:
      "Take your music anywhere with this compact and portable Bluetooth speaker.",
    type: "headphones",
  },
  {
    id: 32,
    img: speaker2,
    title: "Wireless Smart Speaker",
    price: 2999,
    category: "speaker",
    description:
      "Enjoy hands-free control and smart features with this wireless smart speaker compatible with virtual assistants.",
    type: "headphones",
  },
  {
    id: 33,
    img: speaker3,
    title: "High-Power Bookshelf Speakers",
    price: 3999,
    category: "speaker",
    description:
      "Transform your room with powerful audio using these high-power bookshelf speakers.",
    type: "headphones",
  },
  {
    id: 34,
    img: speaker4,
    title: "Waterproof Outdoor Speaker",
    price: 2499,
    category: "speaker",
    description:
      "Perfect for outdoor gatherings, this waterproof speaker can withstand the elements while delivering great sound.",
    type: "headphones",
  },
  {
    id: 35,
    img: speaker5,
    title: "Home Theater Soundbar System",
    price: 4499,
    category: "speaker",
    description:
      "Upgrade your home entertainment experience with this immersive home theater soundbar system.",
    type: "headphones",
  },
  {
    id: 1,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    id: 2,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    reviews: "(123 reviews)",
    price: 6000,
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  {
    id: 3,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",
    reviews: "(123 reviews)",
    price: 7000,
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    id: 4,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Adidas Running Shoe",
    reviews: "(123 reviews)",
    price: 4000,
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    id: 5,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",
    reviews: "(123 reviews)",
    price: 8000,
    company: "Vans",
    color: "green",
    category: "flats",
  },
  {
    id: 6,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Adidas",
    color: "black",
    category: "flats",
  },
  {
    id: 7,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",
    reviews: "(123 reviews)",
    price: 6000,
    company: "Vans",
    color: "white",
    category: "flats",
  },
  {
    id: 8,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",
    reviews: "(123 reviews)",
    price: 7000,
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    id: 9,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",
    reviews: "(123 reviews)",
    price: 8000,
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },
  {
    id: 10,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",
    reviews: "(123 reviews)",
    price: 9000,
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    id: 11,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    reviews: "(123 reviews)",
    price: 9000,
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    id: 12,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    reviews: "(123 reviews)",
    price: 9000,
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    id: 13,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    reviews: "(123 reviews)",
    price: 9000,
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    id: 14,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    reviews: "(123 reviews)",
    price: 9000,
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    id: 15,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    id: 16,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Vans",
    color: "red",
    category: "flats",
  },
  {
    id: 17,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Vans",
    color: "white",
    category: "sandals",
  },
  {
    id: 18,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Vans",
    color: "blue",
    category: "sandals",
  },
  {
    id: 19,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Nike",
    color: "black",
    category: "sandals",
  },
  {
    id: 20,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Vans",
    color: "black",
    category: "heels",
  },
  {
    id: 21,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Puma",
    color: "black",
    category: "heels",
  },
  {
    id: 22,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Nike",
    color: "red",
    category: "heels",
  },
  {
    id: 23,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    reviews: "(123 reviews)",
    price: 6000,
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  {
    id: 24,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    reviews: "(123 reviews)",
    price: 6000,
    company: "Nike",
    color: "black",
    category: "heels",
  },
  {
    id: 25,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    id: 26,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    reviews: "(123 reviews)",
    price: 6000,
    company: "Adidas",
    color: "white",
    category: "heels",
  },
  {
    id: 27,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    reviews: "(123 reviews)",
    price: 5000,
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    id: 28,
    type: "shoes",
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    reviews: "(123 reviews)",
    price: 6000,
    company: "Adidas",
    color: "black",
    category: "flats",
  },
];

export default productData;
