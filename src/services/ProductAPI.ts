import axios from "axios";
import Cookies from "universal-cookie";

const PRODUCTPREFIX = "/product";
const CARTPREFIX = "/cart";
const COOKIE = new Cookies();

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

  return axios.get(PRODUCTPREFIX + "/all/" + pageNumber, {
    params: parameter,
  });
};

export const getProduct = (id: any) => {
  return axios.get(PRODUCTPREFIX + "/single/" + id);
};

export const getCartItems = () => {
  const token = COOKIE.get("token");
  return axios.get(CARTPREFIX + "/get-items", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const addItem = (id: any) => {
  const token = COOKIE.get("token");
  return axios.post(CARTPREFIX + "/add-items/" + id, null, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
