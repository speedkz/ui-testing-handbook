import ProductItem from "./ProductItem";

const products = require("static/product.json");
const categories = [
  { text: "All" },
  { text: "Women's" },
  { text: "Men's" },
  { text: "Kid's" },
  { text: "Accessories" },
  { text: "Cosmetics" },
];
const NewProduct = () => {
  return (
    <div className="w-fit mx-auto py-16">
      <div className="flex justify-between mb-8">
        <p className="uppercase font-bold text-2xl">new product</p>
        <div className="flex gap-8">
          {categories.map((category, i) => (
            <div className="text-md text-gray-500" key={i}>
              {category.text}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product, i) => (
          <ProductItem key={i} item={product} />
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
