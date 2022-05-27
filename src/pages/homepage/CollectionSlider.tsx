const CarouselItem = () => {
  return (
    <div className="snap-center flex flex-col justify-center text-center min-w-full">
      <p className="text-lg uppercase text-red-500 mb-4">
        The Chloe Collection
      </p>
      <p className="text-5xl font-extrabold">The Project Jacket</p>
    </div>
  );
};

const CarouselControl = () => {
  const items = [...Array(4).keys()];
  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <div className="h-4 w-4 rounded-full bg-rose-500"></div>
      ))}
    </div>
  );
};

const CollectionSlider = () => {
  const items = [...Array(4).keys()];
  return (
    <div className="relative flex justify-center items-center h-[500px]">
      <div className="snap-x snap-mandatory flex overflow-x-hidden w-[600px] h-full cursor-grab transition-all duration-300">
        {items.map((item) => (
          <CarouselItem key={item} />
        ))}
      </div>
      <div className="absolute bottom-4">
        <CarouselControl />
      </div>
      <img
        src="https://preview.colorlib.com/theme/ashion/img/banner/banner-1.jpg.webp"
        alt=""
        className="absolute top-0 -z-10 h-full"
      />
    </div>
  );
};

export default CollectionSlider;
