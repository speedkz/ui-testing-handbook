import Star from "components/icons/Star";
import MaximizeIcon from "components/icons/Maximize";
import HeartIcon from "components/icons/Heart";
import ShoppingBagIcon from "components/icons/ShoppingBag";

const colors = require("tailwindcss/colors");

const CircleIcon = ({ children, className = "" }) => {
  return (
    <div
      className={
        "relative -bottom-16 group-hover:bottom-4 transition-all ease-in-out duration-500 bg-white p-2 rounded-full " +
        className
      }
    >
      {children}
    </div>
  );
};

const Rating = ({ star }) => {
  const MAX_RATE = 5;
  const rates = [...Array(MAX_RATE).keys()];
  return (
    <div className="flex gap-1">
      {rates.map((rate, i) =>
        rate <= star ? (
          <Star key={i} fill={colors.yellow[300]} stroke={colors.yellow[300]} />
        ) : (
          <Star key={i} stroke={colors.yellow[300]} />
        )
      )}
    </div>
  );
};
const ProductItem = ({ item }) => {
  const { image, name, star, price } = item;
  return (
    <div className="group flex flex-col items-center">
      <div className="relative overflow-hidden">
        <img src={image} alt="" className="group-hover:opacity-75" />
        <div className="absolute bottom-4 w-full flex gap-4 justify-center">
          <CircleIcon className="delay-75">
            <MaximizeIcon />
          </CircleIcon>
          <CircleIcon className="delay-100">
            <HeartIcon />
          </CircleIcon>
          <CircleIcon className="delay-150">
            <ShoppingBagIcon />
          </CircleIcon>
        </div>
      </div>
      <div className="text-sm text-center">
        <p>{name}</p>
        <Rating star={star} />
        <p className="font-semibold mt-2">$ {price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
