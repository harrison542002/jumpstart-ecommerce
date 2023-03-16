import axios from "axios";
import Cookies from "universal-cookie";

const COOKIE = new Cookies();
export const addBrand = (
  description: string,
  contact: string,
  password: string,
  brandEmail: string,
  brandName: string,
  id?: any
) => {
  const token = COOKIE.get("token");
  return axios.post(
    "/brand/add-brand",
    {
      description,
      contact,
      password,
      brandEmail,
      brandName,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const uploadBrandImg = (id: any, imageFile: any) => {
  const token = COOKIE.get("token");
  const form = new FormData();
  form.append("file", imageFile);
  return axios.post("/brand/upload/" + id, form, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
};

export const getBrands = () => {
  const token = COOKIE.get("token");
  return axios.get("/brand/get-brands", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getBrand = (id: any) => {
  const token = COOKIE.get("token");
  return axios.get("/brand/single-brand/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const editBrand = (
  description: string,
  contact: string,
  password: string,
  brandEmail: string,
  brandName: string,
  bid: any
) => {
  const token = COOKIE.get("token");
  return axios.put(
    "/product/edit-brand",
    {
      description,
      contact,
      password,
      brandEmail,
      brandName,
      bid,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const editBrandLogo = (bid: any, imageFile: any) => {
  const token = COOKIE.get("token");
  const form = new FormData();
  form.append("file", imageFile);
  return axios.put("/product/edit-brand-img/" + bid, form, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getUsers = () => {
  const token = COOKIE.get("token");
  return axios.get("/user/get-users", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const uploadProductImages = (image, id) => {
  const token = COOKIE.get("token");
  const form = new FormData();
  form.append("file", image);
  return axios
    .post("/product/upload/" + id, form, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const postProduct = (itemName, description, price, category, madeIn) => {
  const token = COOKIE.get("token");
  return axios.post(
    "/product/postProduct",
    {
      itemName,
      description,
      price,
      category,
      madeIn,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const getBrandProducts = () => {
  const token = COOKIE.get("token");
  return axios.get("/product/get-brand-product", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const editProduct = (
  itemName,
  description,
  price,
  category,
  madeIn,
  pid
) => {
  const token = COOKIE.get("token");
  return axios.put(
    "/product/edit-product",
    {
      itemName,
      description,
      price,
      category,
      madeIn,
      pid,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const deleteProduct = (id: any) => {
  const token = COOKIE.get("token");
  return axios.delete("/product/delete-product/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
