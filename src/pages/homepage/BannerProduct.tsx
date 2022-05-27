const BannerProduct = ({ item, height }) => {
  const { alt, bg, name, description } = item;
  return (
    <div className={`flex items-center relative pl-8`} style={{ height }}>
      <div className="max-w-[50%]">
        <p className="font-bold text-xl 2xl:text-2xl capitalize mb-2">{name}</p>
        <p className="mb-4 text-gray-500">{description}</p>
        <p className="text-md uppercase font-semibold">Shop now</p>
      </div>
      <img
        src={bg}
        alt={alt}
        className="w-full h-full absolute top-0 right-0 -z-10"
      />
    </div>
  );
};

export default BannerProduct;
