import React, { useLayoutEffect } from "react";

//css
import "../news/css/_newsDetail.scss";

// helper
import { resizeBody } from "../../helper/helper";

// react router dom
import { NavLink, useLocation, useParams } from "react-router-dom";

// news
import News from "../news/news";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// reactstrap
import { Container } from "reactstrap";

// react query
import { useQuery } from "react-query";

// myQueries
import { relatedDetail } from "../../queries/queries";

// renderHtml
import renderHtml from "react-render-html";

// animated css
import { Animated } from "react-animated-css";

import { useTranslation } from "react-i18next";

const RelatedProjectDetail = (props) => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    resizeBody();
  });

  const { slug } = useParams();


  const { pathname } = useLocation();

  const { data, isLoading } = useQuery(["relatedProjects", slug], relatedDetail, {
    refetchOnWindowFocus: false,
  });

  return (
    <main className="newsDetail myPad">
      <Animated
        animationIn="slideInLeft"
        animationOut="zoomOut"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={true}
      >
        <div className="newsDetail__breadCrumbs">
          <NavLink to={"/"}>{t("homepage")}</NavLink>
          <NavLink to={"/news/1"}>{t("related")}</NavLink>
        </div>
        <div className="newsDetail__title">
          <h1>
            {isLoading === false &&
              data !== undefined &&
              data.data.length !== 0 && (
                <Animated
                  animationIn="slideInLeft"
                  animationOut="zoomOut"
                  animationInDuration={400}
                  animationOutDuration={400}
                  isVisible={true}
                >
                  {data.data.name}
                </Animated>
              )}
          </h1>

          <p style={{ marginBottom: 15, marginTop: 15 }}>
            {isLoading === false &&
              data !== undefined &&
              data.data.length !== 0 &&
              data.data.created_at.split(" ")[0]}
          </p>
        </div>
        <div className="newsDetail__content">
          <div className="newsDetail__left">
            {isLoading === false &&
              data !== undefined &&
              data.data.length !== 0 &&
              renderHtml(data.data.content)}
          </div>
          <div className="newsDetail__slider">
            <Container>
              {isLoading === false &&
                data !== undefined &&
                data.data.length !== 0 &&
                data.data.gallery.length !== 0 && (
                  <Splide
                    options={{
                      gap: "0",
                      type: "loop",
                      arrows: true,
                      autoplay: true,
                      padding: 0,
                      perPage: 1,
                      pagination: false,
                    }}
                  >
                    {data.data.gallery.map((item, index) => (
                      <SplideSlide key={index}>
                        <img src={item.original} alt="" />
                      </SplideSlide>
                    ))}
                  </Splide>
                )}
            </Container>
          </div>
        </div>
      </Animated>
    </main>
  );
};

export default RelatedProjectDetail;
