import React, { useLayoutEffect } from "react";

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

  useLayoutEffect(() => {
    resizeBody();
  });

  const { data, isLoading } = useQuery(["productCategory", ""], Category, {
    refetchOnWindowFocus: false,
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
    $(".openSub").on("click", function (event) {
      event.preventDefault();
      $(this).next().slideToggle();
    });
  }, [data]);

  return (
    <div className="product__left">
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
                className={
                  item.subcategories.data.length === 0
                    ? "noOpenSub product__info--top"
                    : " openSub product__info--top"
                }
                to={
                  item.subcategories.data.length === 0
                    ? "/productgallery/" + item.slug
                    : "/productsubgallery/" + item.slug
                }
              >
                {item.name}
              </NavLink>
              <div>
                {item.subcategories.data.map((subcategory, subIndex) => (
                  <NavLink
                    to={"/productgallery/" + subcategory.slug}
                    key={subIndex}
                    className="productCategory"
                  >
                    {subcategory.name}
                    {subcategory.products.data.map(
                      (subProduct, subProductIndex) => (
                        <NavLink
                          key={subProductIndex}
                          to={"/product/" + subProduct.slug}
                        >
                          {subProduct.name}
                        </NavLink>
                      )
                    )}
                  </NavLink>
                ))}
                {item.products.data.map((product, proindex) => (
                  <NavLink to={"/product/" + product.slug} key={proindex}>
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
              className={
                item.subcategories.data.length === 0
                  ? "noOpenSub product__info--top"
                  : " openSub product__info--top"
              }
              to={
                item.subcategories.data.length === 0
                  ? "/productgallery/" + item.slug
                  : "/productsubgallery/" + item.slug
              }
            >
              {item.name}
            </NavLink>
            <div>
              {item.subcategories.data.map((subcategory, subIndex) => (
                <NavLink
                  to={"/productgallery/" + subcategory.slug}
                  key={subIndex}
                  className="productCategory"
                >
                  {subcategory.name}
                  {subcategory.products.data.map(
                    (subProduct, subProductIndex) => (
                      <NavLink
                        key={subProductIndex}
                        to={"/product/" + subProduct.slug}
                      >
                        {subProduct.name}
                      </NavLink>
                    )
                  )}
                </NavLink>
              ))}
              {item.products.data.map((product, proindex) => (
                <NavLink to={"/product/" + product.slug} key={proindex}>
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
