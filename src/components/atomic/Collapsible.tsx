import { useRef } from "react";
import { Transition } from "react-transition-group";
const SmallRight = require("assets/images/atomic/small-right.png");

export interface ICollapsible {
  icon: string;
  title: string;
  content: string;
  prefixIcon: any;
}

export const Collapsible = ({
  item,
  active,
  setActive,
}: {
  item: ICollapsible;
  active: boolean;
  setActive;
}) => {
  const nodeRef = useRef(null);
  const arrowRef = useRef(null);
  return (
    <div>
      <div
        className={`flex items-center cursor-pointer h-[44px] gap-2`}
        onClick={() => setActive()}
      >
        <Transition nodeRef={arrowRef} in={active} timeout={300}>
          <img
            className={active ? "rotate-90-ccw" : "rotate-90-cw"}
            ref={arrowRef}
            src={SmallRight}
            alt="arrow-right"
          />
        </Transition>
        {item.prefixIcon}
        <div
          className={`text-sm hover:text-primary-light ${
            active ? "text-primary-light" : ""
          }`}
        >
          {item.title}
        </div>
      </div>
      <div
        className={`round-[5px] h-[2px] ${
          active ? "bg-primary-light" : "bg-secondary-dark"
        }`}
      ></div>
      <Transition nodeRef={nodeRef} in={active} timeout={300} unmountOnExit>
        <div
          ref={nodeRef}
          className={`text-sm text-primary-text pt-[10px] ${
            active ? "scale-in-ver-top" : "scale-out-ver-top"
          } `}
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
      </Transition>
    </div>
  );
};
