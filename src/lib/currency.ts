const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const formatINR = (value: number): string => inr.format(value);

export const formatNumber = (value: number): string =>
  new Intl.NumberFormat("en-IN").format(value);
