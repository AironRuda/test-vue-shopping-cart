import axios from "axios";
import { products } from "../data.json";

const BASE_URL = "https://fakestoreapi.com/products";
export const data2 = await axios.get(BASE_URL).then((res) => res.data);
export const localData = products;
