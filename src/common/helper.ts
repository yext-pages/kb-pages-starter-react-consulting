export const generateLinkLabels = (idx: number) => {
  switch (idx) {
    case 0:
      return "menu";
    case 1:
      return "order";
    case 2:
      return "coupons";
    case 3:
      return "gift";
    case 4:
      return "cards";
    default:
      return `Link ${idx + 1}`;
  }
};
