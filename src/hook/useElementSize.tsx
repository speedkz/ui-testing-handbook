import { RefObject, useLayoutEffect, useState } from "react";

export const useElementSize = (ref: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(0);

  useLayoutEffect(() => {
    setWidth(ref.current?.offsetWidth);
    setHeight(ref.current?.offsetHeight);
  }, [ref]);

  return {
    width,
    height,
  };
};
