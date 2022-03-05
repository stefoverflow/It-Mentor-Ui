export const MAX_MOBILE_SCREEN_WIDTH = 568;

//Note: using in all paginations, should change
export const PAGE_LIMIT = 1;

export const ROLES = {
  MENTOR: "Mentor",
  CLIENT: "Client",
};

export const roles = [
  { key: "co", text: ROLES.MENTOR, value: ROLES.MENTOR },
  { key: "cl", text: ROLES.CLIENT, value: ROLES.CLIENT },
];

export const priceRate = [
  { key: "low", text: "Low", value: "1" },
  { key: "medium", text: "Medium", value: "2" },
  { key: "high", text: "High", value: "3" }
];