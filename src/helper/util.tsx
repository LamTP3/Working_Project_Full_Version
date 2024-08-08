export const formatPrice = (value?: number) => {
  const price = value ? `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  return price;
};
