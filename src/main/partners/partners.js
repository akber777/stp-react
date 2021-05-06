import React from "react";

// css
import "./css/_partners.scss";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// react router dom
import { Link } from "react-router-dom";

// query
import { useQuery } from "react-query";
import { mediaPath } from "../../api/api";

const Partners = (props) => {
  const partners = props.data.settings.viewBag.partners;

  return (
    <div className="partners myPad">
      <h4>Partners</h4>
      <Splide
        options={{
          gap: "0",
          type: "loop",
          arrows: true,
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
        {partners.map((item, index) => (
          <SplideSlide key={index}>
            <div className="partners__link">
              <a href={item.url} target="_blank">
                <img src={mediaPath + item.logo} alt="" />
              </a>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Partners;
