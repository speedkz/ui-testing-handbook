import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal, render } from "react-dom";

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface IProps {
  children: ReactNode;
  wrapperId?: string;
}
export const usePortal = (props: IProps) => {
  const { children, wrapperId = "react-portal-wrapper" } = props;

  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let systemCreated = false;
    let element = document.getElementById(wrapperId);
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) {
    return null;
  }

  const portal = createPortal(children, wrapperElement);
  render(portal, wrapperElement);
  return portal;
};
