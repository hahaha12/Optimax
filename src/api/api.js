import axios from "axios";
import { PRODUCTS, BASE_URL } from "./../constants/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getProductData = () => {
  return api.get(PRODUCTS).then((res) => res);
};
