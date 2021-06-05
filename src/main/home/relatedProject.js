import React from "react";

// css
import "./css/_home.scss";

// reactstrap
import { Container } from "reactstrap";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// react router dom
import { Link } from "react-router-dom";

// basApi
import { mediaPath } from "../../api/api";

// react i 18
import { useTranslation } from "react-i18next";

const RelatedProjects = (props) => {
  const { t } = useTranslation();

  return (
    <div className="home__related news">
      <Container>
        <div className="home__relatedTitle">
          <h4>
            <span>RELATED</span>PROJECTS
          </h4>
        </div>
      </Container>
      <div className="home__relatedSlider myPad">
        <Splide
          options={{
            gap: 30,
            type: "false",
            rewind: true,
            arrows: false,
            // perPage: 4,
            pagination: false,
            autoplay: true,
            interval: 4000,
            breakpoints: {
              1920: {
                perPage: 4,
              },
              1366: {
                perPage: 2,
              },
              765: {
                perPage: 1,
              },
            },
          }}
        >
          {props.data !== undefined &&
            props.data.viewBag.related_projects.map((item, index) => (
              <SplideSlide key={index}>
                <a href={item.url} target="_blank">
                  <div className="home__relatedSliderItems">
                    <div className="header__layout"></div>
                    <div className="news__buttonLink">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="imgRelated imgRelatedProjects">
                      <img src={mediaPath + item.img} alt="" />
                    </div>
                    <span className="home__relatedSliderItems--title">
                      {item.category}
                    </span>
                    <div className="home__relatedSliderContents">
                      <div className="home__relatedSliderContents--info">
                        <h4>{item.name}</h4>
                        <div className="home__relatedSliderContents--text">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </SplideSlide>
            ))}
        </Splide>
      </div>
      <p className="vieMoreContentHeader">
        <Link to={"/related-list"}>
          <button className="btnViewMore">{t("viewmore")}</button>
        </Link>
      </p>
    </div>
  );
};

export default RelatedProjects;
