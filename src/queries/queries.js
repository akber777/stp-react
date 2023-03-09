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
  const res = await axios.get(baseUrl + version + "data/news", {
    headers: {
      "Content-Type": "application/json",
      page: key.queryKey[1],
      number: 4,
    },
  });

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
    baseUrl + version + `data/page/${key.queryKey[1]}`
  );

  return res.data;
};

// footerMenu
export const footerMenu = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/menu/footer-menu/${key.queryKey[1]}`
  );

  return res.data;
};

// settings
export const settings = async (key) => {
  const res = await axios.get(baseUrl + version + `data/setting`);

  return res.data;
};

// searchResult
export const searchResult = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/product/search?q=${key}`
  );

  return res.data;
};

// relatedProjectDetail
export const relatedDetail = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/project/${key.queryKey[1]}`
  );

  return res.data;
};

// relatedProjectList
export const relatedList = async (key) => {
  const res = await axios.get(baseUrl + version + `data/project`, {
    headers: {
      "Content-Type": "application/json",
      page: key.queryKey[1],
      number: 4,
    },
  });

  return res.data;
};

// searchResult
export const donwloadCategory = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/dowload/category/${key.queryKey[1]}`
  );

  return res.data;
};

// searchResult
export const download = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/dowload/${key.queryKey[1]}`
  );

  return res.data;
};

// searchCategory
export const downloadCategory = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/dowload/category/${key.queryKey[1]}`
  );

  return res.data;
};

// mediaMenu
export const mediaMenu = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/menu/media-menu${key.queryKey[1]}`
  );

  return res.data;
};

// tenders latest
export const tendersLatest = async (key) => {
  const res = await axios.get(baseUrl + version + `data/tenders/latest`);

  return res.data;
};

// tenders
export const tendersData = async (key) => {
  const res = await axios.get(baseUrl + version + `data/tenders`);

  return res.data;
};

// tendersDetail
export const tendersDetail = async (key) => {
  const res = await axios.get(
    baseUrl + version + `data/tenders/${key.queryKey[1]}`
  );

  return res.data;
};

// tendersApply
export const tendersApply = async (params) => {
  const res = await axios.post(
    baseUrl + version + `data/tenders/apply/${params.id}`,
    params.form
  );

  return res.data;
};
