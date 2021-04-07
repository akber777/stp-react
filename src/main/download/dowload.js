import React, { useLayoutEffect } from "react";

// css
import "../product/css/_product.scss";
import "./css/_download.scss";
import "../static/css/_static.scss";

// helper
import { resizeBody } from "../../helper/helper";

// react query
import { useQuery } from "react-query";

// myQueries
import { StaticPageDetail } from "../../queries/queries";

// api
import { mediaPath } from "../../api/api";

// react router dom
import { NavLink } from "react-router-dom";

// components
import DownloadMenu from "./downloadMenu";

// animated css
import { Animated } from "react-animated-css";

const Download = (props) => {
  useLayoutEffect(() => {
    resizeBody();
  });

  const { data, isLoading } = useQuery(
    ["staticPageDetail", "/download"],
    StaticPageDetail,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <main>
      <Animated
        animationIn="slideInLeft"
        animationOut="zoomOut"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={true}
      >
        <div className="product__breadCrumbs myPad">
          <NavLink to={"/"}>PRODUCTS</NavLink>
          <NavLink to={"/"}>Telecommunication Cables </NavLink>
          <NavLink to={"/"}>VBAPV & VBAPV-K </NavLink>
        </div>
        <div className="download static product productDetail myPad">
          <div className="product__left">
            <DownloadMenu />
          </div>
          <div className="product__right">
            <div className="product__right--title">
              <h1>Download</h1>
            </div>
            <div className="productDetail__tabBox">
              {isLoading === false &&
                data !== undefined &&
                data.viewBag.pdf.map((item, index) => (
                  <div
                    className="product__right--title download__info"
                    key={index}
                  >
                    <h4>{item.name}</h4>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={mediaPath + item.path}
                      download
                    >
                      <img
                        src={require("../../images/pdf.png").default}
                        alt=""
                      />
                      PDF CATALOGUE
                      <span>{item.size}</span>
                      <span>{item.date}</span>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Animated>
    </main>
  );
};

export default Download;
