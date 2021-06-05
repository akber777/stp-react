import React from "react";

// css
import "./css/_stpGlobal.scss";

// react router dom
import { Link } from "react-router-dom";

// ract renderHtml
import renderHtml from "react-render-html";

import { useTranslation } from "react-i18next";
import { mediaPath } from "../../api/api";

const StpGlobal = (props) => {
  const { t } = useTranslation();

  return (
    <div className="stpGlobal">
      <div className="stpGlobal__left">
        <div className="stpGlobal__left--info">
          <h4>{props.data !== undefined && props.data.viewBag.stp_title}</h4>
          {props.data !== undefined &&
            renderHtml(props.data.viewBag.stp_description)}
          <p className="vieMoreContentHeader">
            <Link to={props.data !== undefined && props.data.viewBag.stp_url}>
              <button className="btnViewMore">{t("viewmore")}</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="stpGlobal__left">
        <img
          src={
            props.data !== undefined
              ? mediaPath + props.data.viewBag.stp_img
              : ""
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default StpGlobal;
