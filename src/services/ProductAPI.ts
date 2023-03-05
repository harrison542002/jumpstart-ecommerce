import axios from "axios";

const URLPREFIX = "/product";

export const getProducts = (
  pageNumber: number | null,
  category: String | null
) => {
  if (!pageNumber) {
    pageNumber = 0;
  }
  if (!category) {
    return axios.get(URLPREFIX + "/all/" + pageNumber);
  }

  return axios.get(URLPREFIX + "/all/" + pageNumber, {
    params: { category: category },
  });
};
