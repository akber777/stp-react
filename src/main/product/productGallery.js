import React, { useLayoutEffect } from "react";

// css
import "./css/_product.scss";
import "../home/css/_home.scss";

// react router fom
import { Link, useHistory, useLocation, NavLink } from "react-router-dom";

// helper
import { resizeBody } from "../../helper/helper";

// jquery
import $ from "jquery";

// react query
import { useQuery } from "react-query";

// myQueries
import { Products } from "../../queries/queries";

// product menu
import ProductMenu from "./productMenu";

// react i 18
import { useTranslation } from "react-i18next";

const Productgallery = (props) => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    resizeBody();
  });

  const history = useHistory();

  useLayoutEffect(() => {
    $(".product__mobMenu").on("click", function () {
      $(".product__mobInfo").addClass("showMenu");
    });
    $(".product__closeMenu").on("click", function () {
      $(".product__mobInfo").removeClass("showMenu");
    });
  }, []);

  const { pathname } = useLocation();

  const pathSplit = pathname.split("/")[pathname.split("/").length - 1];

  const subProducts = useQuery(["subProduct", pathSplit], Products, {
    refetchOnWindowFocus: false,
    onSuccess: function (succ) {
      if (succ.data.length === 0) {
        history.push({
          pathname: "/404",
        });
      }
    },
  });


  useLayoutEffect(() => {
    if (subProducts.isLoading === false) {
      if (subProducts.data === undefined) {
        history.push({
          pathname: "/404",
        });
      }
    }
  }, [subProducts.data]);

  return (
    <main>
      <div className="product__breadCrumbs myPad">
        <NavLink to={"/"}>{t("homepage")}</NavLink>
        <NavLink to={"/" + pathSplit}>{pathSplit}</NavLink>
      </div>
      <div className="product myPad">
        <ProductMenu />
        <div className="product__right">
          <div className="product__right--title">
            <h1>
              {subProducts.isLoading === false &&
                subProducts.data !== undefined &&
                subProducts.data.data.name}
            </h1>
          </div>
          <div className="product__right--content">
            {subProducts.isLoading === false &&
              subProducts.data !== undefined &&
              subProducts.data.data.products.data.map((item, index) => (
                <div className="product__right--content__items" key={index}>
                  <div className="home__cableLayout">
                    <Link to={"/product/" + item.slug}>
                      <img
                        src={item.cover !== null ? item.cover.path : ""}
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

export default Productgallery;
