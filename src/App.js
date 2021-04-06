import React, { useLayoutEffect } from "react";

import Loadable from "react-loadable";

// tools
// ------------------------
// react router dom
import { Route, Switch, useLocation } from "react-router-dom";

// components
// ---------------------------------
// Header
import Header from "./header/header";

// Footer
import Footer from "./footer/footer";

const Loading = () => (
  <div className="loadableCom">
    <div className="load"></div>
  </div>
);

// Home
const Home = Loadable({
  loader: () => import("./main/home/home"),
  loading: Loading,
});

// NewsDetail
const NewsDetail = Loadable({
  loader: () => import("./main/news/newsDetail"),
  loading: Loading,
});

// NewsList
const NewsList = Loadable({
  loader: () => import("./main/news/newsList"),
  loading: Loading,
});

// Contact
const Contact = Loadable({
  loader: () => import("./main/contact/contact"),
  loading: Loading,
});

// searchResult
const SearchResut = Loadable({
  loader: () => import("./main/searchResult/searchResult"),
  loading: Loading,
});

// ProductGallery
const ProductGallery = Loadable({
  loader: () => import("./main/product/productGallery"),
  loading: Loading,
});

// ProductSubGallery
const ProductSubGallery = Loadable({
  loader: () => import("./main/product/productSubGallery"),
  loading: Loading,
});

// Product
const Product = Loadable({
  loader: () => import("./main/product/product"),
  loading: Loading,
});

// ProductList
const ProductList = Loadable({
  loader: () => import("./main/product/productList"),
  loading: Loading,
});

// StaticPages
const Static = Loadable({
  loader: () => import("./main/static/static"),
  loading: Loading,
});

// Download
const Download = Loadable({
  loader: () => import("./main/download/dowload"),
  loading: Loading,
});

// AboutUs
const AboutUs = Loadable({
  loader: () => import("./main/aboutus/aboutus"),
  loading: Loading,
});

// 404
const Page404 = Loadable({
  loader: () => import("./main/404/404"),
  loading: Loading,
});

function App() {
  localStorage.setItem("lang", "az");

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Switch>
        {pathname !== "/" &&
          pathname !== "/az" &&
          pathname.split("/")[1] !== "contact" &&
          pathname.split("/")[1] !== "aboutus" &&
          pathname.split("/")[1] !== "news" &&
          pathname.split("/")[1] !== "download" &&
          pathname.split("/")[1] !== "searchresult" &&
          pathname.split("/")[1] !== "productgallery" &&
          pathname.split("/")[1] !== "productsubgallery" &&
          pathname.split("/")[1] !== "product" &&
          pathname.split("/")[1] !== "404" &&
          pathname.split("/")[1] !== "product-list" && (
            <Route path={"/*"}>
              <Static />
            </Route>
          )}
        <Route exact path={"/" + localStorage.getItem("lang")}>
          <Home />
        </Route>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/news/*"}>
          <NewsDetail />
        </Route>
        <Route path={"/news"}>
          <NewsList />
        </Route>
        <Route path={"/contact"}>
          <Contact />
        </Route>
        <Route path={"/searchresult"}>
          <SearchResut />
        </Route>
        <Route path={"/productgallery"}>
          <ProductGallery />
        </Route>
        <Route path={"/productsubgallery"}>
          <ProductSubGallery />
        </Route>
        <Route path={"/product"}>
          <Product />
        </Route>
        <Route path={"/product-list"}>
          <ProductList />
        </Route>
        <Route path={"/download"}>
          <Download />
        </Route>
        <Route path={"/aboutus"}>
          <AboutUs />
        </Route>
        <Route path={"/404"}>
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
