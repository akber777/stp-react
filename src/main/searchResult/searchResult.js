import React, { useLayoutEffect, useState } from "react";

// css
import "./css/_searchResult.scss";

// react router dom
import { NavLink, useLocation } from "react-router-dom";

// helper
import { resizeBody } from "../../helper/helper";

// recoil
import { useRecoilValue, useRecoilState } from "recoil";

// atoms
import { searchResultState } from "../../atoms/atoms";

// render html
import renderHtml from "react-render-html";

// react query
import { useMutation, useQuery } from "react-query";

// jquery
import $ from "jquery";

// myQueries
import { searchResult } from "../../queries/queries";

// react i 18
import { useTranslation } from "react-i18next";

function useQueryData() {
  return new URLSearchParams(useLocation().search);
}

const SearchResult = (props) => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    resizeBody();
  });

  const searchItems = useQueryData();

  const { pathname } = useLocation();

  const resultsData = useRecoilValue(searchResultState);

  const [value, setValue] = useState(null);

  const [addSearchResult, setAddSearchResult] = useRecoilState(
    searchResultState
  );

  // search
  const mutateSearch = useMutation((data) => searchResult(data), {
    onSuccess: function (succ) {
      setAddSearchResult({
        data: succ,
        title: value,
      });
      $(".search").fadeOut();
    },
  });

  useLayoutEffect(() => {
    setValue(searchItems.get("q"));

    if (value !== null && value !== "") {
      mutateSearch.mutate(value);
    }
  }, [value]);




  return (
    <main className="searchResult myPad">
      <div className="searchResult__breadCrumbs">
        <NavLink to={"/"}>{t("homepage")}</NavLink>
        <NavLink to={"/"}>{t("Search")}</NavLink>
        <NavLink to={"/"}>{t("SEARCHRESULTS")}</NavLink>
      </div>
      <div className="searchResult__title">
        <h1>
          <span>{t("results for")}</span>{" "}
          {resultsData !== null && resultsData !== "" && resultsData.title}
        </h1>
      </div>
      {resultsData !== null &&
        resultsData !== "" &&
        (resultsData.data !== "" && resultsData.data.data.length !== 0 ? (
          resultsData.data.data.map((item, index) => (
            <div
              className="searchResult__content"
              key={index}
              data-count={index + 1 + "."}
            >
              <h4>
                <NavLink to={item.slug !== "en/" ? item.slug : "/"}>
                  {renderHtml(item.name)}
                </NavLink>
              </h4>
              {/* {renderHtml(item.text)} */}
              <img
                src={
                  item.cover !== null &&
                  item.cover !== undefined &&
                  item.cover.length !== 0
                    ? item.cover.path
                    : ""
                }
              />
            </div>
          ))
        ) : (
          <div className="searchResult__content">
            <h4>{t("Məlumat Tapilmadı")}</h4>
          </div>
        ))}
    </main>
  );
};

export default SearchResult;
