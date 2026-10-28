export type DeliveryEstimate = {
  pin: string;
  minDays: number;
  maxDays: number;
  zone: string;
};

const zones: Record<string, { label: string; min: number; max: number }> = {
  "1": { label: "North India", min: 4, max: 6 },
  "2": { label: "North India", min: 4, max: 6 },
  "3": { label: "West India", min: 4, max: 7 },
  "4": { label: "West India", min: 4, max: 7 },
  "5": { label: "South India", min: 5, max: 8 },
  "6": { label: "South India", min: 5, max: 8 },
  "7": { label: "East India", min: 4, max: 6 },
  "8": { label: "Bihar & East India", min: 3, max: 5 },
  "9": { label: "Remote & North-East", min: 6, max: 9 },
};

export function getDeliveryEstimate(pin: string): DeliveryEstimate | null {
  const clean = pin.replace(/\s/g, "");
  if (!/^[1-9][0-9]{5}$/.test(clean)) return null;
  const zone = zones[clean[0]] ?? { label: "India", min: 4, max: 7 };
  return {
    pin: clean,
    minDays: zone.min,
    maxDays: zone.max,
    zone: zone.label,
  };
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  return /^(\+91[\s-]?)?[6-9][0-9]{9}$/.test(value.replace(/[\s-]/g, ""));
}
