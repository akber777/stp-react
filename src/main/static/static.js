import React, { useLayoutEffect, useState } from "react";

// css
import "./css/_static.scss";
import "../product/css/_product.scss";

// react router dom
import { NavLink, useLocation, useHistory } from "react-router-dom";

// helper
import { checkedUrl, resizeBody } from "../../helper/helper";

// react query
import { useQuery } from "react-query";

// myQueries
import { StaticPageDetail } from "../../queries/queries";

// acios
import axios from "axios";

// base url
import { baseUrl, version } from "../../api/api";

// render html
import renderHtml from "react-render-html";

// animated css
import { Animated } from "react-animated-css";

// react i 18
import { useTranslation } from "react-i18next";

const Static = (props) => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    resizeBody();
  });

  let [layout, setLayout] = useState(null);

  let [staticType, setStaticType] = useState();

  const { pathname } = useLocation();

  const history = useHistory();

  const pathSplit = pathname.split("/")[pathname.split("/").length - 1];

  const staticPageDetail = useQuery(
    ["staticPageDetail", pathSplit],
    StaticPageDetail,
    {
      refetchOnWindowFocus: false,
      onSuccess: function (succ) {
        if (succ !== "") {
          if (succ.settings.viewBag.layout === "static") {
            setLayout(true);
            setStaticType(succ.settings.viewBag.layout);
          } else {
            setLayout(false);
            setStaticType(succ.settings.viewBag.layout);
          }
        } else {
          // history.push({
          //   pathname: "/404",
          // });
        }
      },
    }
  );

  const staticMenu = useQuery(
    ["staticMenu", staticType],
    async () => {
      const res = await axios.get(
        baseUrl + version + `data/menu/${layout !== null ? staticType : ""}`
      );

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useLayoutEffect(() => {
    if (staticMenu.isLoading === false) {
      if (staticMenu.data === undefined) {
        history.push({
          pathname: "/404",
        });
      }
    }
  }, [staticMenu.data]);

  return (
    <>
      <main style={{ height: staticMenu.isLoading === false ? "auto" : 500 }}>
        <div className="product__breadCrumbs myPad">
          <NavLink to={"/"}>{t("homepage")}</NavLink>
          <NavLink to={"/" + staticType}>{staticType}</NavLink>
          <NavLink to={pathname}>{pathSplit}</NavLink>
        </div>
        <div className="static product productDetail myPad">
          <div
            className="product__left"
            style={{ display: layout === true ? "none" : "block" }}
          >
            <div className="product__info">
              {staticMenu.isLoading === false &&
                staticMenu.data !== undefined &&
                staticMenu.data.map((item, index) =>
                  item.type !== "url" ? (
                    <NavLink key={index} to={checkedUrl(item)}>
                      {item.title}
                    </NavLink>
                  ) : (
                    <a href={checkedUrl(item)}>{item.title}</a>
                  )
                )}
            </div>
          </div>
          <div
            className="product__right"
            style={{
              overflow: "hidden",
              display: staticMenu.isLoading === false ? "block" : "none",
            }}
          >
            <div className="product__right--title">
              <h1>
                {staticPageDetail.isLoading === false &&
                  staticPageDetail.data !== undefined &&
                  staticPageDetail.data.length !== 0 && (
                    <Animated
                      animationIn="slideInLeft"
                      animationOut="zoomOut"
                      animationInDuration={400}
                      animationOutDuration={400}
                      isVisible={true}
                    >
                      {staticPageDetail.data.viewBag.title}
                    </Animated>
                  )}
              </h1>
            </div>
            <div className="productDetail__tabBox">
              {staticPageDetail.isLoading === false &&
                staticPageDetail.data !== undefined &&
                staticPageDetail.data.length !== 0 &&
                renderHtml(staticPageDetail.data.markup)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Static;
