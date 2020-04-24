import axios from "axios";

export default axios.create({
  baseURL: "https://public.opendatasoft.com/explore/dataset/cosmetic-ingredient-database-ingredients-and-fragrance-inventory/api/",
  responseType: "json"
});