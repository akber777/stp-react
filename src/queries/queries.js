import { baseUrl, version } from "../api/api";

// axios
import axios from "axios";

// homeSlider
export const HomeSlider = async (key) => {
  const res = await axios.get(
    baseUrl + version + "data/slider" + key.queryKey[1]
  );

  return res.data;
};

// HomePage
export const HomePage = async (key) => {
  const res = await axios.get(
    baseUrl + version + "data/page/homepage" + key.queryKey[1]
  );

  return res.data;
};

// NewsLatest
export const NewsLatest = async (key) => {
  const res = await axios.get(
    baseUrl + version + "data/news/latest" + key.queryKey[1]
  );

  return res.data;
};

// News
export const News = async (key) => {
  const res = await axios.get(
    baseUrl + version + "data/news" + key.queryKey[1]
  );

  return res.data;
};

// NewsDetail
export const NewsDetailApi = async (key) => {
  const res = await axios.get(baseUrl + version + "data" + key.queryKey[1]);

  return res.data;
};

// Contact
export const ContactApi = async (key) => {
  const res = await axios.get(
    baseUrl + version + "data/page/contact" + key.queryKey[1]
  );

  return res.data;
};

// Category
export const Category = async (key) => {
  const res = await axios.get(
    baseUrl +
      version +
      "data/category?include=subcategories,products" +
      key.queryKey[1]
  );

  return res.data;
};

// SubCategoryDetail
export const SubCategoryDetail = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/category/${key.queryKey[1]}?include=subcategories`
  );

  return res.data;
};

// Product
export const Products = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/category/${key.queryKey[1]}?include=products`
  );

  return res.data;
};

// ProductDetail
export const ProductsDetail = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/product/${key.queryKey[1]}`
  );

  return res.data;
};

// ProductList
export const ProductListApi = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/product/${key.queryKey[1]}`
  );

  return res.data;
};

// headerMenu
export const HeaderMenu = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/menu/header-menu/${key.queryKey[1]}`
  );

  return res.data;
};

// staticMenu
export const StaticMenu = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/menu${key.queryKey[1]}`
  );

  return res.data;
};

// staticPageDetail
export const StaticPageDetail = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/page${key.queryKey[1]}`
  );

  return res.data;
};
