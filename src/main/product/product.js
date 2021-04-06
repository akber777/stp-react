import React, { useLayoutEffect } from "react";

// css
import "./css/_product.scss";
import "../home/css/_home.scss";

// react router fom
import { NavLink, useLocation, useHistory } from "react-router-dom";

// helper
import { resizeBody } from "../../helper/helper";

// react bootstrap
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// jquery
import $ from "jquery";

// productMenu
import ProductMenu from "./productMenu";

// react query
import { useQuery } from "react-query";

// myQueries
import { ProductsDetail } from "../../queries/queries";

// react render html
import renderHtml from "react-render-html";

const Product = (props) => {
  const { pathname } = useLocation();

  const history = useHistory();

  useLayoutEffect(() => {
    resizeBody();
  });

  useLayoutEffect(() => {
    $(".product__mobMenu").on("click", function () {
      $(".product__mobInfo").addClass("showMenu");
    });
    $(".product__closeMenu").on("click", function () {
      $(".product__mobInfo").removeClass("showMenu");
    });
  }, []);

  useLayoutEffect(() => {
    $(".product__mobInfo").removeClass("showMenu");
  }, [pathname]);

  const pathSplit = pathname.split("/")[pathname.split("/").length - 1];

  const { data, isLoading } = useQuery(
    ["productDetail", pathSplit],
    ProductsDetail,
    {
      refetchOnWindowFocus: false,
      onSuccess: function (succ) {
        if (succ.data.length === 0) {
          history.push({
            pathname: "/404",
          });
        }
      },
    }
  );

  return (
    <main>
      <div className="product__breadCrumbs myPad">
        <NavLink to={"/"}>Ana Səhifə</NavLink>
        <NavLink to={"/" + pathSplit}>{pathSplit}</NavLink>
      </div>
      <div className="product productDetail myPad">
        <ProductMenu />
        <div className="product__right">
          <div className="product__right--title">
            <h1>
              {isLoading === false && data.data.length !== 0 && data.data.name}
            </h1>
            {isLoading === false &&
              data.data.length !== 0 &&
              data.data.pdf !== "" && (
                <a href={data.data.pdf} download>
                  <img src={require("../../images/pdf.png").default} alt="" />
                  PDF CATALOGUE
                </a>
              )}
          </div>
          <div className="productDetail__imgBox">
            <img
              src={
                isLoading === false && data.data.length !== 0
                  ? data.data.img !== null
                    ? data.data.img.cover
                    : ""
                  : ""
              }
              alt=""
            />
          </div>
          <div className="productDetail__tabBox">
            <Tabs defaultActiveKey="Kesit" id="uncontrolled-tab-example">
              {isLoading === false &&
                data.data.length !== 0 &&
                data.data.kesit !== "" && (
                  <Tab eventKey="Kesit" title="Kesit">
                    {renderHtml(data.data.kesit)}
                  </Tab>
                )}
              {isLoading === false &&
                data.data.length !== 0 &&
                data.data.kesit !== "" && (
                  <Tab eventKey="Construct" title="Construct">
                    {renderHtml(data.data.construct)}
                  </Tab>
                )}
              {isLoading === false &&
                data.data.length !== 0 &&
                data.data.kesit !== "" && (
                  <Tab eventKey="Technical" title="Technical">
                    {renderHtml(data.data.technical)}
                  </Tab>
                )}
              {isLoading === false &&
                data.data.length !== 0 &&
                data.data.kesit !== "" && (
                  <Tab eventKey="Using Palace" title="Using Palace">
                    {renderHtml(data.data.using_place)}
                  </Tab>
                )}
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
