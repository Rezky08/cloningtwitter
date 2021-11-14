const computedStyledFunction = () => {
  let r = document.querySelector(":root");
  let rs = getComputedStyle(r);
  return rs;
};

export { computedStyledFunction };
