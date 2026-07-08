export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('es-AR').format(num);
};
