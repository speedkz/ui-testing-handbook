import { Link } from "react-router-dom";
import SearchIcon from "components/icons/Search";
import HeartIcon from "components/icons/Heart";
import ShoppingBagIcon from "components/icons/ShoppingBag";

const items = [
  { text: "home", to: "" },
  { text: "women's", to: "" },
  { text: "men's", to: "" },
  { text: "shop", to: "" },
  { text: "pages", to: "" },
  { text: "blog", to: "" },
  { text: "contact", to: "" },
];

const Navbar = () => {
  return (
    <div className="px-20 py-6 flex items-center shadow">
      <p className="font-extrabold text-3xl">Ashion</p>
      <div className="flex gap-10 justify-center grow">
        {items.map((item, i) => (
          <Link key={i} className="uppercase" to={item.to}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex">
        <span className="text-md text-gray-500 mr-6">Login/ Register</span>
        <div className="flex gap-3">
          <SearchIcon />
          <HeartIcon />
          <ShoppingBagIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
