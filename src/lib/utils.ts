export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const decodeCategoryName = (categoryName: string) =>
  capitalizeFirstLetter(decodeURI(categoryName));

export const slugify = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

export const unslugify = (text: string) => {
  return text.replace(/-/g, ' ');
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
