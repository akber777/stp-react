import React from "react";

import {Container} from "reactstrap";

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

// partners
import Partners from "../partners/partners";

// react splide
import {Splide, SplideSlide} from "@splidejs/react-splide";

// react query
import {useQuery} from "react-query";

// myQueries
import {HomePage} from "../../queries/queries";

// baseApi
import {mediaPath} from "../../api/api";

// react ender html
import renderHtml from "react-render-html";

//link
import {Link, NavLink} from "react-router-dom";

//translation
import {useTranslation} from "react-i18next";


const Home = () => {
        const home = useQuery(["home", ""], HomePage, {
            refetchOnWindowFocus: false,
        });

        const {t} = useTranslation()

        return (
            <main className="home">
                <StpGlobal data={home.data}/>
                <ProductHome data={home.data}/>
                <div className="home__currency myPad">
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
                        <p className="vieMoreContentHeader viewMoreColor"
                           style={{textAlign: 'center', marginBottom: '25px'}}>
                            < Link to={"/related-list"}>
                                <button className="btnViewMore">{t("viewmore")}</button>
                            </Link>
                        </p>
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
                                        <a target="_blank" rel="noreferrer" href={item.url}>
                                            View More
                                        </a>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>
                <RelatedProjects data={home.data}/>
                <ProductVideo data={home.data}/>
                <News/>
                <div className="home__publication"
                     style={{backgroundImage: `url(${require('../../images/publication.jpg').default})`}}>
                    < div className="home__publicationInfo">
                        <h4>Publications.</h4>
                        <p>
                            Discover the entire product variety of Faber in our latest publications. This is where you will
                            find all the information about our cables and wires, as well as our services.
                        </p>
                        <div className="home__publicationButtonBox">
                            <NavLink to="/download/product">
                                Downloads
                            </NavLink>
                            <NavLink to="/download/product">
                                Browsers Online
                            </NavLink>
                        </div>
                    </div>
                </div>
                {home.isLoading === false && <Partners data={home.data}/>}
            </main>
        );
    }
;

export default Home;
