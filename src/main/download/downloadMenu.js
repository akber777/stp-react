import React from "react";

// react router dom
import { Link } from "react-router-dom";

const DownloadMenu = (props) => {
  return (
    <div>
      <div className="product__info">
        <div>
          <Link className="product__info--top" to={"/download"}>
            HTHJPV & VBAPV-K
          </Link>
          <Link className="product__info--top" to={"/download"}>
            QAPV & VBAPV-K
          </Link>
          <Link className="product__info--top" to={"/download"}>
            VBAPV & FHBAPV-K
          </Link>
          <Link className="product__info--top" to={"/download"}>
            VBAPV & VBAPV-K
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadMenu;
