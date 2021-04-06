import React from "react";

// css
import "./css/_stpGlobal.scss";

// react router dom
import { Link } from "react-router-dom";

// ract renderHtml
import renderHtml from "react-render-html";

const StpGlobal = (props) => {
  return (
    <div className="stpGlobal">
      <div className="stpGlobal__left">
        <div className="stpGlobal__left--info">
          <h4>{props.data !== undefined && props.data.viewBag.stp_title}</h4>
          {props.data !== undefined &&
            renderHtml(props.data.viewBag.stp_description)}
          <p className="vieMoreContentHeader">
            <Link to={"/"}>
              <button className="btnViewMore">VIEW MORE</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="stpGlobal__left">
        <img src={require("../../images/aboutUs.png").default} alt="" />
      </div>
    </div>
  );
};

export default StpGlobal;
