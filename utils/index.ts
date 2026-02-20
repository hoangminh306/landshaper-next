export function formatCurrency(value: string | number) {
  const newValue = Math.round(Number(value)).toString();
  return `${newValue}`.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const ZALO_PHONE_DEFAULT = "0123456789";
