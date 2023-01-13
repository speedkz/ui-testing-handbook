import { useEffect, useState } from "react";
import First from "assets/images/atomic/first.svg";
import Last from "assets/images/atomic/last.svg";
import ChevronLeft from "assets/images/atomic/chevron-left.svg";
import ChevronRight from "assets/images/atomic/chevron-right.svg";

export interface IPagination {
  page: number;
  setPage: any;
  pageSize?: number;
  pageSizes?: number[];
  total: number;
  maxShowPages?: number;
}

export const Pagination = (props: IPagination) => {
  const { page, pageSize = 20, total, maxShowPages = 5, setPage } = props;
  const [quantity, setQuantity] = useState(0);
  const [hidePages, setHidePage] = useState(false);

  useEffect(() => {
    const data = Math.ceil(total / pageSize);
    setQuantity(data);
  }, [total, pageSize]);

  useEffect(() => {}, [maxShowPages, quantity]);

  const showPage = (index) => {
    const FIRST_LAST_SHOW_PAGE = 2;
    const CURRENT_SHOW_PAGE = 1;
    if (index === 0 || index === quantity - 1) return true;
    if (
      Math.abs(page - index) * 2 >
      maxShowPages - (CURRENT_SHOW_PAGE + FIRST_LAST_SHOW_PAGE)
    )
      return false;
    return true;
  };
  return (
    <div className="flex gap-4">
      <img src={ChevronLeft} alt="left" />
      <img src={First} alt="first" />
      <div className="flex gap-2 items-center">
        {[...Array(quantity).keys()].map((x) =>
          showPage(x) ? (
            <>
              <div
                className={`${
                  x === page
                    ? "bg-primary text-white"
                    : "bg-secondary-dark text-primary"
                } flex justify-center items-center w-6 h-6 rounded text-sm cursor-pointer`}
                onClick={() => setPage(x)}
              >
                {x + 1}
              </div>
            </>
          ) : x === 1 || x === quantity - 2 ? (
            <>...</>
          ) : (
            <></>
          )
        )}
      </div>
      <img src={ChevronRight} alt="right" />
      <img src={Last} alt="last" />
    </div>
  );
};
