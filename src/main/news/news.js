import React from "react";

// css
import "../home/css/_home.scss";
import "./css/_news.scss";

// reactstrap
import { Container } from "reactstrap";

// react carousel
import Carousel from "react-multi-carousel";

// react router dom
import { Link } from "react-router-dom";

// react query
import { useQuery } from "react-query";

// myQueries
import { NewsLatest } from "../../queries/queries";

const News = (props) => {
  const { data, isLoading } = useQuery(["newsLatest", ""], NewsLatest, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="home__related news">
      <Container>
        <div className="home__relatedTitle">
          <h4>
            <span>NEWS</span> LATEST
          </h4>
        </div>
      </Container>
      <div className="home__relatedSlider myPad">
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          infinite={true}
          focusOnSelect={false}
          arrows={false}
          swipeable={false}
          keyBoardControl
          autoPlaySpeed={3000}
          autoPlay={true}
        >
          {isLoading === false &&
            data !== undefined &&
            data.data.map((item, index) => (
              <div key={index} style={{ marginRight: 15, marginLeft: 15 }}>
                <Link to={"/news/" + item.slug}>
                  <div className="home__relatedSliderItems">
                    <div className="home__relatedSliderItems--img">
                      <div className="imgRelated">
                        <img
                          src={item.img !== null ? item.img.cover : ""}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="home__relatedSliderContent">
                      <div className="home__relatedSliderContent--info">
                        <h4>{item.title}</h4>
                        <div className="home__relatedSliderContent--text">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Carousel>
      </div>
      <p className="vieMoreContentHeader">
        <Link to={"/news"}>
          <button className="btnViewMore">VIEW MORE</button>
        </Link>
      </p>
    </div>
  );
};

export default News;
