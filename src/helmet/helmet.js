import React from "react";
import { Helmet } from "react-helmet";

// proptypes
import PropTypes from "prop-types";

// react query
import { useQuery } from "react-query";

// queryies
import { settings } from "../queries/queries";

export default function HelmetApp(props) {
  // query
  const { data, isLoading } = useQuery(["getLogo", ""], settings, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link
          rel="icon"
          href={isLoading === false ? data.data.header_hover_logo.original : ""}
        />
      </Helmet>
    </>
  );

  HelmetApp.propTypes = {
    title: PropTypes.string,
    favicon: PropTypes.string,
    meta: PropTypes.string,
  };
}
