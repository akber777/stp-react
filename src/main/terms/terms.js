import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { resizeBody } from "../../helper/helper";
import DownloadMenu from "../tenders/downloadMenu";
import { Accordion } from "react-accessible-accordion";
// css
import "../product/css/_product.scss";
import "../tenders/css/_download.scss";
import "../static/css/_static.scss";
import "react-accessible-accordion/dist/fancy-example.css";
import { useQuery } from "react-query";
import { termsForApply } from "../../queries/queries";
import renderHtml from "react-render-html";

const Tenders = () => {
  const { slug } = useParams();

  const { data, isLoading } = useQuery(["TERMS_FOR_APPLY"], termsForApply);

  useLayoutEffect(() => {
    resizeBody();
  });

  return (
    <main>
      <div className="product__breadCrumbs static myPad">
        <NavLink to={"/"}>HomePage</NavLink>
        <NavLink to={"/terms-for-apply"}>Terms For Apply</NavLink>
        {slug !== undefined && <NavLink to={"/tenders" + slug}>{slug}</NavLink>}
      </div>
      <div className="download  product productDetail myPad">
        <div className="product__left">
          <DownloadMenu />
        </div>
        <div className="product__right">
          <div className="product__right--title">
            <h1>Terms For Apply</h1>
          </div>
          {/* <div className="download__description">
            fwefew
          </div> */}
          <div className="productDetail__tabBox">
            <Accordion>
              <div className="accordion__panel">
                {!isLoading && renderHtml(data?.markup)}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tenders;
