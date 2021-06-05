import React, { useLayoutEffect } from "react";

// css
import "./css/_product.scss";
import "../home/css/_home.scss";

// react router fom
import { Link, NavLink, useLocation } from "react-router-dom";

// helper
import { resizeBody } from "../../helper/helper";

// jquery
import $ from "jquery";

// react query
import { useQuery } from "react-query";

// myQueries
import { ProductListApi } from "../../queries/queries";

// productMenu
import ProductMenu from "./productMenu";

// react i 18
import { useTranslation } from "react-i18next";

const ProductList = (props) => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    resizeBody();
  });

  const { pathname } = useLocation();

  const pathSplit = pathname.split("/")[pathname.split("/").length - 1];

  useLayoutEffect(() => {
    $(".product__mobMenu").on("click", function () {
      $(".product__mobInfo").addClass("showMenu");
    });
    $(".product__closeMenu").on("click", function () {
      $(".product__mobInfo").removeClass("showMenu");
    });
  }, []);

  const { data, isLoading } = useQuery(
    ["subProduct", "show-category"],
    ProductListApi,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <main>
      <div className="product__breadCrumbs myPad">
        <NavLink to={"/"}>{t("homepage")}</NavLink>
        <NavLink to={pathname}>{pathSplit} </NavLink>
      </div>
      <div className="product myPad">
        <ProductMenu />
        <div className="product__right">
          <div className="product__right--content">
            {isLoading === false &&
              data !== undefined &&
              data.data.map((item, index) => (
                <div className="product__right--content__items" key={index}>
                  <div className="home__cableLayout">
                    <Link to={"/product/" + item.slug}>
                      <img
                        src={item.cover !== null ? item.cover.list : ""}
                        alt=""
                      />
                      <div className="home__cableLayout--item">
                        <div className="cableInfo">
                          <h4 style={{ marginBottom: 15 }}>{item.name}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
