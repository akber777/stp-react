import React, { useLayoutEffect, useState } from "react";

// css
import "./css/_product.scss";
import "../home/css/_home.scss";

// react router fom
import { NavLink, useLocation } from "react-router-dom";

// helper
import { resizeBody } from "../../helper/helper";

// jquery
import $ from "jquery";

// react query
import { useQuery } from "react-query";

// myQueries
import { Category } from "../../queries/queries";

const ProductMenu = (props) => {
  const { pathname } = useLocation();

  const [dataLoad, setDataLoad] = useState(false);

  useLayoutEffect(() => {
    console.log($(".product__info a.active").next().show());

    resizeBody();
    $(".product__info a.active").parents(".parentsA").addClass("showAll");
    $(".product__info a.active").parents(".parentsA").slideDown();
    $(".product__info a.active")
      .parents(".parentsA")
      .prev()
      .addClass("animateDropDown");
    $(".product__info a.active").parents(".parentsSub").slideDown();
    $(".product__info a.active")
      .parents(".openSubNext")
      .addClass("animateDropDown");
  });

  const { data, isLoading } = useQuery(["productCategory", ""], Category, {
    refetchOnWindowFocus: false,
    onSuccess: function () {
      setDataLoad(true);
    },
  });

  useLayoutEffect(() => {
    $(".product__mobMenu").on("click", function () {
      $(".product__mobInfo").addClass("showMenu");
    });
    $(".product__closeMenu").on("click", function () {
      $(".product__mobInfo").removeClass("showMenu");
    });

    $(".product__mobInfo").removeClass("showMenu");
  }, [pathname]);

  useLayoutEffect(() => {
    $(".parentsA ").hide();
    $(".parentsSub").hide();
  }, [dataLoad]);

  useLayoutEffect(() => {
    $(".openSub").on("click", function (event) {
      // event.preventDefault();

      $(this).toggleClass("animateDropDown");

      $(this).next().slideToggle();
    });

    $(".openSubNext").on("click", function (event) {
      // event.preventDefault();
      $(this).find(".notCloseMenu ").toggleClass("animateDropDown");
      $(this).find(".parentsSub").slideToggle();
    });

    $(".product__info a.active").addClass("animateDropDown");
  }, [data]);

  return (
    <div className="product__left onlyProduct">
      <div className="product__mobMenu">
        <i className="fas fa-bars"></i>
      </div>
      <div className="product__mobInfo">
        <div className="product__closeMenu">
          <i className="fas fa-times"></i>
        </div>
        {isLoading === false &&
          data !== undefined &&
          data.data.map((item, index) => (
            <div className="product__info">
              <NavLink
                key={index}
                data-icon={
                  item.subcategories.data.length !== 0 ||
                  item.products.data.length !== 0
                    ? ">"
                    : ""
                }
                className={
                  item.subcategories.data.length === 0 &&
                  item.products.data.length === 0
                    ? "noOpenSub product__info--top"
                    : " openSub product__info--top"
                }
                to={
                  item.subcategories.data.length === 0
                    ? "/subcategory/" + item.slug
                    : "/productsubgallery/" + item.slug
                }
              >
                {item.name}
              </NavLink>
              <div className="parentsA">
                {item.subcategories.data.map((subcategory, subIndex) => (
                  <div className="productCategory notCloseMenu openSubNext">
                    {subcategory.products.data.length === 0 ? (
                      <NavLink
                        key={subIndex}
                        to={"/subcategory/" + subcategory.slug}
                        className="notCloseMenu"
                      >
                        {subcategory.name}
                      </NavLink>
                    ) : (
                      <span
                        data-icon={
                          subcategory.products.data.length !== 0 ? ">" : ""
                        }
                        style={{
                          backgroundColor:
                            subcategory.products.data.length !== 0
                              ? "transparent"
                              : "transparent",
                          color:
                            subcategory.products.data.length !== 0
                              ? "#fff"
                              : "unset",
                          padding:
                            subcategory.products.data.length !== 0
                              ? "5px 15px"
                              : "5px 30px",
                          fontWeight:
                            subcategory.products.data.length !== 0
                              ? "bold"
                              : "unset",
                        }}
                      >
                        {subcategory.name}
                      </span>
                    )}
                    <div className="parentsSub">
                      {subcategory.products.data.map(
                        (subProduct, subProductIndex) => (
                          <NavLink
                            key={subProductIndex}
                            to={"/product/" + subProduct.slug}
                            className="notCloseMenu"
                          >
                            {subProduct.name}
                          </NavLink>
                        )
                      )}
                    </div>
                  </div>
                ))}
                {item.products.data.map((product, proindex) => (
                  <NavLink
                    to={"/product/" + product.slug}
                    key={proindex}
                    className="notCloseMenu"
                  >
                    {product.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
      </div>
      {isLoading === false &&
        data !== undefined &&
        data.data.map((item, index) => (
          <div className="product__info">
            <NavLink
              key={index}
              data-icon={
                item.subcategories.data.length !== 0 ||
                item.products.data.length !== 0
                  ? ">"
                  : ""
              }
              className={
                item.subcategories.data.length === 0 &&
                item.products.data.length === 0
                  ? "noOpenSub product__info--top"
                  : " openSub product__info--top"
              }
              to={
                item.subcategories.data.length === 0
                  ? "/subcategory/" + item.slug
                  : "/productsubgallery/" + item.slug
              }
            >
              {item.name}
            </NavLink>
            <div className="parentsA">
              {item.subcategories.data.map((subcategory, subIndex) => (
                <div className="productCategory notCloseMenu openSubNext">
                  {subcategory.products.data.length === 0 ? (
                    <NavLink
                      key={subIndex}
                      to={"/subcategory/" + subcategory.slug}
                      className="notCloseMenu"
                    >
                      {subcategory.name}
                    </NavLink>
                  ) : (
                    <NavLink
                      data-icon={
                        subcategory.products.data.length !== 0 ? ">" : ""
                      }
                      key={subIndex}
                      to={"/subcategory/" + subcategory.slug}
                      className="notCloseMenu"
                    >
                      {subcategory.name}
                    </NavLink>
                  )}
                  <div className="parentsSub">
                    {subcategory.products.data.map(
                      (subProduct, subProductIndex) => (
                        <NavLink
                          key={subProductIndex}
                          to={"/product/" + subProduct.slug}
                          className="notCloseMenu"
                        >
                          {subProduct.name}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
              ))}
              {item.products.data.map((product, proindex) => (
                <NavLink
                  to={"/product/" + product.slug}
                  key={proindex}
                  className="notCloseMenu"
                >
                  {product.name}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductMenu;
