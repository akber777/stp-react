import React from "react";

// css
import "../home/css/_home.scss";
import "./css/_news.scss";

// reactstrap
import {Container} from "reactstrap";


// react router dom
import {Link} from "react-router-dom";

// react query
import {useQuery} from "react-query";

// myQueries
import {NewsLatest} from "../../queries/queries";

import {useTranslation} from "react-i18next";
import {Splide, SplideSlide} from "@splidejs/react-splide";

const News = (props) => {
    const {t} = useTranslation();

    const {title} = props;

    const {data, isLoading} = useQuery(["newsLatest", ""], NewsLatest, {
        refetchOnWindowFocus: false,
    });

    return (
        <div className="home__related news">
            <Container>
                <div className="home__relatedTitle">
                    {props.title !== undefined ? (
                        <h4>{title}</h4>
                    ) : (
                        <h4>{t("NEWS AND EVENTS")}</h4>
                    )}
                </div>
            </Container>
            <div className="home__relatedSlider myPad">
                <Splide
                    options={{
                        gap: "0",
                        type: "false",
                        arrows: true,
                        autoplay: true,
                        padding: 0,
                        perPage: 5,
                        pagination: false,
                        breakpoints: {
                            1920: {
                                perPage: 4,
                            },
                            1366: {
                                perPage: 4,
                            },
                            765: {
                                perPage: 1,
                            },
                        },
                    }}
                >
                    {isLoading === false &&
                    data !== undefined &&
                    data.data.map((item, index) => (
                        <SplideSlide key={index}>
                            <Link to={"/news/" + item.slug}>
                                <div className="home__relatedSliderItems">
                                    <div className="header__layout"></div>
                                    <div className="news__buttonLink">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                    <div className="imgRelated noRelated">
                                        <img
                                            src={item.img !== null ? item.img.cover : ""}
                                            alt=""
                                        />
                                    </div>
                                    <div className="home__relatedSliderContent">
                                        <div className="home__relatedSliderContent--info">
                                            <h4 className="newsTit">{item.title}</h4>
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
                <Link to={"/news"}>
                    <button className="btnViewMore">{t("viewmore")}</button>
                </Link>
            </p>
        </div>
    );
};

export default News;
