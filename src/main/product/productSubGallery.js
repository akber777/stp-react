import React, { useLayoutEffect } from "react";

// css
import "./css/_product.scss";
import "../home/css/_home.scss";

// react router fom
import { Link, useLocation } from "react-router-dom";

// helper
import { resizeBody } from "../../helper/helper";

// jquery
import $ from "jquery";

// productMenu
import ProductMenu from "./productMenu";

// react query
import { useQuery } from "react-query";

// myQueries
import { SubCategoryDetail } from "../../queries/queries";

const ProductSubGallery = (props) => {
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

  const { pathname } = useLocation();

  const pathSplit = pathname.split("/")[pathname.split("/").length - 1];

  const { data, isLoading } = useQuery(
    ["productSubCategory", pathSplit],
    SubCategoryDetail,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <main className="product myPad">
      <ProductMenu />
      <div className="product__right">
        <div className="product__right--title">
          <h1>TELECOMMUNICATION CABLES</h1>
        </div>
        <div className="product__right--content">
          {isLoading === false &&
            data !== undefined &&
            data.data.subcategories.data.map((item, index) => (
              <div className="product__right--content__items" key={index}>
                <div className="home__cableLayout">
                  <Link to={"/productgallery/" + item.slug}>
                    <img src={item.img !== null ? item.img.cover : ""} alt="" />
                    <div className="home__cableLayout--item">
                      <div className="cableInfo">
                        <h4 style={{ marginBottom: 10 }}>{item.name}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ProductSubGallery;
