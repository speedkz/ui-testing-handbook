export const useTable = (containerId, callback) => {
  const container = document.getElementById(containerId);
  console.log(container);
  if (!container) return;
  const { clientHeight: containerClientHeight } = container;
  const thead = container.querySelector("thead");

  if (!thead) return;
  const { clientHeight } = thead;
  console.log(containerClientHeight - clientHeight);
  const getTableHeight = () => {
    callback(containerClientHeight - clientHeight);
  };
  const resizeObserver = new ResizeObserver(getTableHeight);
  resizeObserver.observe(container);
};
