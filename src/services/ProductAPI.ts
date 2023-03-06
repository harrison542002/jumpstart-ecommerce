import axios from "axios";

const URLPREFIX = "/product";

export const getProducts = (
  pageNumber: number | null,
  category: string | null,
  brand: string | null,
  lowPrice: string | null,
  highPrice: string | null,
  fixedPrice: string | null
) => {
  const parameter: any = {};
  if (category) parameter.category = category;
  if (brand) parameter.brand = brand;
  if (lowPrice) parameter.lowPrice = lowPrice;
  if (highPrice) parameter.highPrice = highPrice;
  if (fixedPrice) parameter.fixedPrice = fixedPrice;
  console.log(parameter);

  if (!pageNumber) {
    pageNumber = 0;
  }

  return axios.get(URLPREFIX + "/all/" + pageNumber, {
    params: parameter,
  });
};
