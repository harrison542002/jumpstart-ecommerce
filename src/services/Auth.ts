import axios from "axios";

const AUTHPREFIX = "/auth/";
export const login = (email: string, password: string) => {
  return axios.post(AUTHPREFIX + "login", {
    email,
    password,
  });
};

export const signUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  return axios.post(AUTHPREFIX + "signUp", {
    firstName,
    lastName,
    email,
    password,
  });
};
