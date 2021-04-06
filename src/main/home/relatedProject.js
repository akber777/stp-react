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

const RelatedProjects = (props) => {
  return (
    <div className="home__related">
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
            type: "loop",
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
                <Link to={"/product" + item.url}>
                  <div className="home__relatedSliderItems">
                    <div className="home__relatedSliderItems--img">
                      <div className="imgRelated">
                        <img src={mediaPath + item.img} alt="" />
                      </div>
                      <span className="home__relatedSliderItems--title">
                        {item.category}
                      </span>
                    </div>
                    <div className="home__relatedSliderContent">
                      <div className="home__relatedSliderContent--info">
                        <h4>{item.name}</h4>
                        <div className="home__relatedSliderContent--text">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            ))}
        </Splide>
      </div>
      <p className="vieMoreContentHeader">
        <Link to={"/productgallery"}>
          <button className="btnViewMore">VIEW MORE</button>
        </Link>
      </p>
    </div>
  );
};

export default RelatedProjects;
