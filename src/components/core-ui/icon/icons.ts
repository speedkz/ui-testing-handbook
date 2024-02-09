import { lazy } from "react";

const context = require.context("assets/icons", true, /\.(svg)$/);
export const icons = {
  Logo: _lazy(async () => import("assets/icons/Logo.svg")),
  Back: _lazy(async () => import("assets/icons/Back.svg")),
};

context.keys().forEach((filename) => {
  const name = filename.match(/([^\/]+)(?=\.\w+$)/)?.[0];

  if (name) {
    // icons[name] = _lazy(async () => import(`assets/icons/${name}.svg`));
  }
});

function _lazy(importFn: Function) {
  return lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}
