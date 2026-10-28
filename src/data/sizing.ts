export type SizeRow = {
  size: string;
  chest: string;
  length: string;
  sleeve: string;
};

/**
 * Sample garment measurements in centimetres. Confirm final specifications
 * with production before publishing a real size chart.
 */
export const sizeRows: SizeRow[] = [
  { size: "XS", chest: "96", length: "62", sleeve: "58" },
  { size: "S", chest: "102", length: "64", sleeve: "59" },
  { size: "M", chest: "108", length: "66", sleeve: "60" },
  { size: "L", chest: "114", length: "68", sleeve: "61" },
  { size: "XL", chest: "120", length: "70", sleeve: "62" },
  { size: "XXL", chest: "126", length: "72", sleeve: "63" },
];

export const measurementGuide = [
  {
    title: "Chest",
    copy: "Measure around the fullest part of your chest, keeping the tape level and relaxed.",
  },
  {
    title: "Length",
    copy: "Measure from the highest point of the shoulder to the hem you prefer.",
  },
  {
    title: "Sleeve",
    copy: "Measure from the shoulder seam to the end of the cuff, with the arm slightly bent.",
  },
];
