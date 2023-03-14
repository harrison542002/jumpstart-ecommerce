import axios from "axios";
import Cookies from "universal-cookie";

const PRODUCTPREFIX = "/product";
const CARTPREFIX = "/cart";
const COOKIE = new Cookies();

//Get all products
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

//Get single product with id
export const getProduct = (id: any) => {
  return axios.get(PRODUCTPREFIX + "/single/" + id);
};

//Get all products in cart
export const getCartItems = () => {
  const token = COOKIE.get("token");
  return axios.get(CARTPREFIX + "/get-items", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//Add item to cart with id
export const addItem = (id: any) => {
  const token = COOKIE.get("token");
  return axios.post(CARTPREFIX + "/add-items/" + id, null, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//Remove product from cart
export const deleteFromCart = (id: any) => {
  const token = COOKIE.get("token");
  return axios.delete(CARTPREFIX + "/delete-cart/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//Get all shipping address for this user
export const getShippingAddresses = () => {
  const token = COOKIE.get("token");
  return axios.get("/order/get-shipping", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//Add Shipping Address
export const postShippingAddress = (
  fullName,
  type,
  phone,
  addressDetail,
  region,
  city
) => {
  const token = COOKIE.get("token");
  return axios.post(
    "/order/add-shipping",
    {
      fullName,
      type,
      phone,
      addressDetail,
      region,
      city,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

//Get Shipping Address with id
export const getShippingAddress = (id: any) => {
  const token = COOKIE.get("token");
  return axios.get("/order/get-single-shipping/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//Get multiple projects from provided Id
export const getMultipleProducts = (id: any) => {
  const token = COOKIE.get("token");
  return axios.get(PRODUCTPREFIX + "/multiple-products/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

//Add order
export const addOrder = (
  status: string,
  type: string,
  pids: any,
  deliId: any
) => {
  const token = COOKIE.get("token");
  return axios.post("/order/add-order/" + deliId, null, {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      status,
      type,
      pids,
    },
  });
};

//Get Brands
export const getBrands = () => axios.get(PRODUCTPREFIX + "/brands");

//Get Summary
export const getSummary = () => {
  const token = COOKIE.get("token");
  return axios.get("/order/total-summary", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
