import React, { useState } from "react";

// css
import "./css/_video.scss";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// react modal video
import ModalVideo from "react-modal-video";

// baseApi
import { mediaPath } from "../../api/api";

const ProductVideo = (props) => {
  const [isOpen, setOpen] = useState(false);

  const [url, setUrl] = useState();

  return (
    <div className="video">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={url}
        onClose={() => setOpen(false)}
      />
      <div className="video__title">
        <h4>
          <span>PRODUTION</span>VIDEOS
        </h4>
      </div>
      <div className="video__box">
        {/*<div*/}
        {/*  className="video__left"*/}
        {/*  // style={{*/}
        {/*  //   backgroundImage: `url(${*/}
        {/*  //     require("../../images/video.png").default*/}
        {/*  //   })`,*/}
        {/*  // }}*/}
        {/*>*/}
        {/*  <strong>VIDEOS</strong>*/}
        {/*</div>*/}
        <div className="video__right">
          <div className="video__slideBox">
            <Splide
              options={{
                gap: "0",
                arrows: true,
                autoplay: true,
                padding: 0,
                perPage: 4,
                pagination: false,
                breakpoints: {
                  1920: {
                    perPage: 4,
                  },
                  1300: {
                    perPage: 2,
                  },
                  765: {
                    perPage: 1,
                  },
                },
              }}
            >
              {props.data !== undefined &&
                props.data.viewBag.prodution_videos.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="video__sliderItem">
                      <div className="video__sliderItemLayer">
                        <img
                          src={require("../../images/layer.png").default}
                          alt=""
                        />
                      </div>
                      <img src={mediaPath + item.img} alt="" />
                      <button
                        className="video__buttonBox"
                        onClick={() => {
                          setOpen(true);
                          setUrl(item.url);
                        }}
                      >
                        <img
                          src={require("../../images/play.png").default}
                          alt=""
                        />
                        {item.name}
                      </button>
                    </div>
                  </SplideSlide>
                ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideo;
