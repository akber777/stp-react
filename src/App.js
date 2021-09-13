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

// helper
import { SetInterCeptors } from "./api/setIntercetors";
import { useRecoilValue } from "recoil";
import { settingsState } from "./atoms/atoms";

// react helmet
import HelmetApp from "./helmet/helmet";

// jquery
import $ from "jquery";

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

// relatedproject
const RelatedProjectDetail = Loadable({
  loader: () => import("./main/home/relatedProjectDetail"),
  loading: Loading,
});

// relatedproject
const RelatedProjectList = Loadable({
  loader: () => import("./main/home/relatedProjectList"),
  loading: Loading,
});

// 404
const Page404 = Loadable({
  loader: () => import("./main/404/404"),
  loading: Loading,
});

function App() {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  SetInterCeptors();

  const settingsUpdate = useRecoilValue(settingsState);

  return (
    <div className="App">
      <HelmetApp />
      <Header />
      <Switch>
        <Route exact path={"/" + localStorage.getItem("i18nextLng")}>
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
        <Route path={"/subcategory"}>
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
        <Route path={"/download/:slug"}>
          <Download />
        </Route>
        <Route path={"/download"}>
          <Download />
        </Route>
        <Route path={"/aboutus"}>
          <AboutUs />
        </Route>
        <Route path={"/related/:slug"}>
          <RelatedProjectDetail />
        </Route>
        <Route path={"/related-list"}>
          <RelatedProjectList />
        </Route>
        <Route path={"/404"}>
          <Page404 />
        </Route>
        <Route path={"/:id"}>
          <Static />
        </Route>
      </Switch>
      <div className="footer__socialFixed">
        {settingsUpdate !== null &&
          settingsUpdate.social.map((item, index) => (
            <div className="footer__socialItems">
              <a href={item.url} key={index} target="_blank" rel="noreferrer">
                <i className={item.class}></i>
              </a>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
