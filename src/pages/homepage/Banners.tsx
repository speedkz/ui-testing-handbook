import BannerProduct from "./BannerProduct";
const rowHeight = 314;
const banners = [
  {
    bg: "https://preview.colorlib.com/theme/ashion/img/categories/category-1.jpg.webp",
    name: "woman's fashion",
    description:
      "Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.",
    className: "row-span-2 col-span-2",
    height: rowHeight * 2 + 12,
  },
  {
    bg: "https://preview.colorlib.com/theme/ashion/img/categories/category-2.jpg.webp",
    name: "Men's fashion",
    description: "358 items",
    height: rowHeight,
  },
  {
    bg: "https://preview.colorlib.com/theme/ashion/img/categories/category-3.jpg.webp",
    name: "Kid's fashion",
    description: "358 items",
    height: rowHeight,
  },
  {
    bg: "https://preview.colorlib.com/theme/ashion/img/categories/category-4.jpg.webp",
    name: "Cosmetics",
    description: "358 items",
    height: rowHeight,
  },
  {
    bg: "https://preview.colorlib.com/theme/ashion/img/categories/category-5.jpg.webp",
    name: "Accessories",
    description: "792 items",
    height: rowHeight,
  },
];

const Banners = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
      {banners.map((banner, i) => (
        <div key={i} className={banner.className}>
          <BannerProduct item={banner} height={banner.height} />
        </div>
      ))}
    </div>
  );
};

export default Banners;
