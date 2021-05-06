import React from "react";

// react router dom
import { NavLink } from "react-router-dom";

// react query
import { useQuery } from "react-query";

// queries
import { donwloadCategory } from "../../queries/queries";

const DownloadMenu = (props) => {
  const { data, isLoading } = useQuery(
    ["downloadCategory", ""],
    donwloadCategory
  );

  return (
    <div className=" downFLex">
      {isLoading === false &&
        data !== undefined &&
        data.data.map((item, index) => (
          <NavLink
            key={index}
            className="product__info--top"
            to={"/download/" + item.slug}
          >
            {item.name}
          </NavLink>
        ))}
    </div>
  );
};

export default DownloadMenu;
