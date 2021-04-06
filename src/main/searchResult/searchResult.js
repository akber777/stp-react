import React, { useLayoutEffect } from "react";

// css
import "./css/_searchResult.scss";

// react router dom
import { NavLink } from "react-router-dom";

// helper
import { resizeBody } from "../../helper/helper";

const SearchResult = (props) => {
  useLayoutEffect(() => {
    resizeBody();
  });

  return (
    <main className="searchResult myPad">
      <div className="searchResult__breadCrumbs">
        <NavLink to={"/"}>SEARCH</NavLink>
        <NavLink to={"/"}>SEARCH RESULTS</NavLink>
      </div>
      <div className="searchResult__title">
        <h1>
          <span>results for</span> "stp cable"
        </h1>
      </div>
      <div className="searchResult__content">
        <h4>My OFFICE 212 IsTANBUL</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essen
        </p>
      </div>
      <div className="searchResult__content">
        <h4>My OFFICE 212 IsTANBUL</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essen
        </p>
      </div>
      <div className="searchResult__content">
        <h4>My OFFICE 212 IsTANBUL</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essen
        </p>
      </div>
    </main>
  );
};

export default SearchResult;
