import { lazy } from "react";

var context = require.context("assets/icons", true, /\.(png|jpe?g|svg)$/);
export const icons = {};

context.keys().forEach((filename) => {
  const name = filename.match(/([^\/]+)(?=\.\w+$)/)?.[0];

  if (name) {
    icons[name] = _lazy(async () => import("assets/icons/Logo.svg"));
  }
});

function _lazy(importFn: Function) {
  return lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}
