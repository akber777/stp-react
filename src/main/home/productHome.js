import React from "react";

// css
import "./css/_home.scss";

// react router dom
import { Link } from "react-router-dom";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// baseApi
import { mediaPath } from "../../api/api";

const ProductHome = (props) => {
  return (
    <div className="home">
      <div className="home__cableTitle">
        <h4>
          <span>CABLE</span> PRODUCTS
        </h4>
      </div>
      <div className="home__cableBox myPad">
        {window.outerWidth > 992 ? (
          <>
            <div className="home__cableBoxLeft">
              {props.data !== undefined &&
                props.data.viewBag.cable_product.map(
                  (item, index) =>
                    index < 5 && (
                      <div className="home__cableLayout" key={index}>
                        <h5 className="tit">{item.name}</h5>
                        <Link to={item.url}>
                          <img src={mediaPath + item.img} alt="" />
                          <div className="home__cableLayout--item">
                            <div className="cableInfo">
                              <h4>{item.name}</h4>
                              <p>{item.category}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                )}
            </div>
            <div className="home__cableBoxRight">
              {props.data !== undefined &&
                props.data.viewBag.cable_product.map(
                  (item, index) =>
                    index > 4 && (
                      <div className="home__cableLayout" key={index}>
                        <h5 className="tit">{item.name}</h5>
                        <Link to={item.url}>
                          <img src={mediaPath + item.img} alt="" />
                          <div className="home__cableLayout--item">
                            <div className="cableInfo">
                              <h4>{item.name}</h4>
                              <p>{item.category}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                )}
            </div>
          </>
        ) : (
          <Splide
            options={{
              gap: 20,
              type: "loop",
              arrows: false,
              pagination: true,
              autoplay: true,
              interval: 4000,
              breakpoints: {
                992: {
                  perPage: 3,
                },
                765: {
                  perPage: 2,
                },
                575: {
                  perPage: 1,
                },
              },
            }}
          >
            {props.data !== undefined &&
              props.data.viewBag.cable_product.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="home__cableLayout" key={index}>
                    <Link to={item.url}>
                      <img src={mediaPath + item.img} alt="" />
                      <div className="home__cableLayout--item">
                        <div className="cableInfo">
                          <h4>{item.name}</h4>
                          <p>{item.category}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SplideSlide>
              ))}
          </Splide>
        )}
      </div>
    </div>
  );
};

export default ProductHome;
