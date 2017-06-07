export const toArray = (object) => (
  Object.keys(object).map(key => object[key])
);