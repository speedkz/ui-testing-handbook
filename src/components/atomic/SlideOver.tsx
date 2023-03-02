import { useEffect, useState } from "react";
import { ButtonClosePanel } from "./Button";

export const SlideOver = ({ open, setOpen, width }) => {
  const [display, setDisplay] = useState("block");
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (open) {
      setDisplay("block");
      setTimeout(() => {
        setActive(true);
      }, 50);
    } else {
      setActive(false);
      setTimeout(() => {
        setDisplay("none");
      }, 500);
    }
  }, [open]);
  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      style={{ display }}
    >
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ${
          active ? "opacity-1" : "opacity-0"
        }`}
      ></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 transition-transform duration-500 ${
              active ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              className="pointer-events-auto relative w-screen"
              style={{ width }}
            >
              <div
                className={`absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4 ${
                  active ? "opacity-1" : "opacity-0"
                }`}
              >
                <ButtonClosePanel onClick={() => setOpen(!open)} />
              </div>

              <div
                className={`flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl`}
              >
                <div className="px-4 sm:px-6">
                  <h2
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="slide-over-title"
                  >
                    Panel title
                  </h2>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
