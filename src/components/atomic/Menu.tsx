import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Menu.css";

export interface MenuArgs {
  width?: number | string;
  options?: { text: string; value: string | number }[];
  value?: string | number | number[] | string[];
  keyValue?: string;
  keyText?: string;
  onChange?: any;
  container?: any;
  readOnly?: boolean;
  maxHeight?: string | number;
  multiple?: boolean;
  autocomplete?: boolean;
}

export const Menu = (props: MenuArgs) => {
  const {
    options,
    width = "fit-content",
    container,
    onChange,
    maxHeight = 176,
    keyValue = "value",
    keyText = "text",
    multiple,
  } = props;
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);
  const nodeRef = useRef(null);

  const handleTriggerMenu = () => {
    setActive(!active);
  };

  const handleChange = (value) => {
    if (!multiple) setActive(false);
    if (onChange) onChange(value);
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      setActive(false);
    });
    return () => {
      document.removeEventListener("click", () => {
        setActive(false);
      });
    };
  }, []);

  return (
    <div ref={containerRef} onClick={(e) => e.stopPropagation()}>
      <div onClick={handleTriggerMenu}>{container}</div>
      <CSSTransition
        classNames="base-menu"
        in={active}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
      >
        <div ref={nodeRef} className="base-menu" style={{ width, maxHeight }}>
          {options &&
            options.map((option) => (
              <div
                key={option.value}
                className="base-menu-item"
                onClick={() => handleChange(option[keyValue])}
              >
                {option[keyText]}
              </div>
            ))}
        </div>
      </CSSTransition>
    </div>
  );
};
