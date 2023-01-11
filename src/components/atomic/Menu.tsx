import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

export interface MenuArgs {
  width: number;
  options: { text: string; value: string | number }[];
  container: any;
}

export const Menu = (props: MenuArgs) => {
  const { options, width, container } = props;
  const [active, setActive] = useState(false);
  const nodeRef = useRef(null);

  const handleTriggerMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div onClick={handleTriggerMenu}>{container}</div>
      <CSSTransition
        classNames="base-menu"
        in={active}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
      >
        <div ref={nodeRef} className="base-menu" style={{ width }}>
          {options &&
            options.map((option) => (
              <div key={option.value} className="base-menu-item">
                {option.text}
              </div>
            ))}
        </div>
      </CSSTransition>
    </>
  );
};
