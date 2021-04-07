import React from "react";

import { Container } from "reactstrap";

// css
import "./css/_home.scss";

// StpGlobal
import StpGlobal from "../stpGlobal/stpGlobal";

// HomeProduct
import ProductHome from "../home/productHome";

// relatedProjects
import RelatedProjects from "../home/relatedProject";

// product video
import ProductVideo from "./productVideo";

// news
import News from "../news/news";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// react query
import { useQuery } from "react-query";

// myQueries
import { HomePage } from "../../queries/queries";

// baseApi
import { mediaPath } from "../../api/api";

// react ender html
import renderHtml from "react-render-html";

// animated css
import { Animated } from "react-animated-css";

const Home = () => {
  const home = useQuery(["home", ""], HomePage, {
    refetchOnWindowFocus: false,
  });

  return (
    <main className="home">
      <Animated
        animationIn="slideInLeft"
        animationOut="zoomOut"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={true}
      >
        <StpGlobal data={home.data} />
        <ProductHome data={home.data} />
        <Container>
          <div className="home__currency">
            <div className="home__currencyTitle">
              <h4>CURRENCY RATE</h4>
            </div>
            <div className="home__currencyFlexBox">
              <iframe
                src="https://www.widgets.investing.com/live-commodities?theme=darkTheme&amp;pairs=8833,8830,8836,49768,959211"
                width="100%"
                title="Cuurency"
                height="300px;"
                frameBorder="0"
                allowtransparency="true"
                marginWidth="0"
                marginHeight="0"
              ></iframe>
            </div>
          </div>
        </Container>
        <div
          className="home__serviceRaiting"
          style={{
            backgroundImage: `url(${
              home.isLoading === false &&
              home.data !== undefined &&
              mediaPath + home.data.viewBag.services_range_bg
            })`,
          }}
        >
          <Container>
            <div className="home__serviceRaitingTitle">
              <h4>
                {home.isLoading === false &&
                  home.data !== undefined &&
                  home.data.viewBag.services_range_title}
              </h4>
              {home.isLoading === false &&
                home.data !== undefined &&
                renderHtml(home.data.viewBag.services_range_description)}
            </div>
          </Container>
          <div className="home__serviceRaitingSliderBox myPad">
            <Splide
              options={{
                gap: "0",
                type: "loop",
                arrows: false,
                autoplay: true,
                padding: 0,
                perPage: 5,
                pagination: false,
                breakpoints: {
                  1920: {
                    perPage: 5,
                  },
                  1366: {
                    perPage: 3,
                  },
                  765: {
                    perPage: 1,
                  },
                },
              }}
            >
              {home.isLoading === false &&
                home.data !== undefined &&
                home.data.viewBag.services_range.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="home__serviceRaitingSliderInfo">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                  </SplideSlide>
                ))}
            </Splide>
          </div>
        </div>
        <RelatedProjects data={home.data} />
        <ProductVideo data={home.data} />
        <News />
      </Animated>
    </main>
  );
};

export default Home;
