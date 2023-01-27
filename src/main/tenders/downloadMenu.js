import React from "react";

// react router dom
import { NavLink } from "react-router-dom";

// https://api.stpglobalcable.com/api/v1/data/tenders
// https://api.stpglobalcable.com/api/v1/data/tenders/latest
// https://api.stpglobalcable.com/api/v1/data/tenders/tender-1

const DownloadMenu = (props) => {
  return (
    <div className=" downFLex">
      <NavLink className="product__info--top" to={"/tenders"}>
        Tenders
      </NavLink>
      <NavLink className="product__info--top" to={"/terms-for-apply"}>
        Terms for apply
      </NavLink>
    </div>
  );
};

export default DownloadMenu;
