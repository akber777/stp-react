import React, { useLayoutEffect, useState } from "react";

// css
import "./css/_header.scss";

// react router dom
import { NavLink, Link, useLocation } from "react-router-dom";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// reactstrap
import { Input } from "reactstrap";

// helper
import { toggleSearch, checkedUrl } from "../helper/helper";

// jquery
import $ from "jquery";

// react query
import { useQuery } from "react-query";

// myQueries
import { HomeSlider, HeaderMenu } from "../queries/queries";

// axios
import axios from "axios";

// baseApi
import { baseUrl, version } from "../api/api";

// react video player
import ReactPlayer from "react-player";

// atoms
import { settingsState } from "../atoms/atoms";

// recoil
import { useRecoilValue } from "recoil";

const Header = (props) => {
  const { pathname } = useLocation();

  const settingsData = useRecoilValue(settingsState);

  useLayoutEffect(() => {
    toggleSearch();

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".alwaysFixed").addClass("fixedTop");
        $(".logoFixed").css({
          display: "inline-block",
          width: 58,
        });

        $(".hoverLogoBox").fadeOut();
      } else {
        $(".alwaysFixed").removeClass("fixedTop");
        $(".logoFixed").css({
          display: "none",
          width: 58,
        });
        $(".hoverLogoBox").fadeIn();
      }
    });
  });

  useLayoutEffect(() => {
    $(".header__closeMenu").on("click", function () {
      $(".header__mobDropMenu").addClass("showMenu");
    });
    $(".header__mobMenu").on("click", function () {
      $(".header__mobDropMenu").removeClass("showMenu");
    });

    $(".hoverLogoBox").on("mouseover", function () {
      $(".header__navBox").css({
        backgroundColor: "#fff",
      });

      $(".header__navBox a").css({
        color: "#303882",
      });

      $(".header__langBox").addClass("changeLangBox");
    });

    $(".hoverLogoBox").on("mouseout", function () {
      $(".header__navBox").css({
        backgroundColor: "transparent",
      });

      $(".header__navBox a").css({
        color: "#fff",
      });

      $(".header__langBox").removeClass("changeLangBox");
    });
  }, []);

  useLayoutEffect(() => {
    $(".header__mobDropMenu").addClass("showMenu");
  }, [pathname]);

  // slider

  const [pagiantion, setPagination] = useState(false);

  const slider = useQuery(["homeSlider", ""], HomeSlider, {
    onSuccess: function (succ) {
      if (succ.data.length > 1) {
        setPagination(true);
      }
    },
  });

  // category
  const category = useQuery(["headerCategory", ""], async () => {
    const res = axios.get(
      baseUrl + version + "data/category?include=subcategories"
    );

    return (await res).data;
  });

  // headermenu
  const headerMenu = useQuery(["headerMenu", ""], HeaderMenu);

  return (
    <>
      {/* search */}
      <div className="search">
        <div className="search__inputBox">
          <div className="search__close">x</div>
          <div className="search__flexBox">
            <Input type="text" placeholder={"Search..."} />
            <button>
              <img src={require("../images/search.png").default} alt="" />
            </button>
          </div>
        </div>
      </div>
      <header className="header">
        {/* headerMob menu */}
        <div className="header__mobDropMenu showMenu">
          <div className="header__closeMenu">
            <i className="fas fa-times"></i>
          </div>
          <div className="header__navLeft">
            {headerMenu.isLoading === false &&
              headerMenu.data !== undefined &&
              headerMenu.data.map((item, index) => (
                <NavLink to={checkedUrl(item)}>{item.title}</NavLink>
              ))}
          </div>
        </div>

        <div
          className="alwaysFixed"
          style={{
            position:
              pathname === "/" || pathname === "/az" ? "absolute" : "relative",
            backgroundColor:
              pathname === "/" || pathname === "/az"
                ? "transparent"
                : "#be9c6b",
          }}
        >
          <div className="header__logo logoFixed">
            <Link to={"/"} className="logoHeader">
              <img
                src={
                  settingsData !== null
                    ? settingsData.header_hover_logo.original
                    : ""
                }
                alt=""
              />
            </Link>
            <Link to={"/"}>
              <img
                src={
                  settingsData !== null ? settingsData.header_logo.original : ""
                }
                alt=""
              />
            </Link>
          </div>
          <div className="header__logo hoverLogoBox">
            <Link to={"/"} className="logoHeader">
              <img
                src={
                  settingsData !== null
                    ? settingsData.header_hover_logo.original
                    : ""
                }
                alt=""
              />
            </Link>
            <Link to={"/"}>
              <img
                src={
                  settingsData !== null ? settingsData.header_logo.original : ""
                }
                alt=""
              />
            </Link>
          </div>
          <div className="header__navBox">
            <nav className="header__nav">
              <div className="header__navLeft">
                {headerMenu.isLoading === false &&
                  headerMenu.data !== undefined &&
                  headerMenu.data.map((item, index) => (
                    <NavLink to={checkedUrl(item)}>{item.title}</NavLink>
                  ))}
              </div>
              <div className="header__navRight">
                <div className="header__langBox">
                  <NavLink to={""}>En</NavLink>
                  <NavLink to={""}>Tr</NavLink>
                  <NavLink to={""}>Az</NavLink>
                </div>
                <div className="header__mobMenu">
                  <i className="fas fa-bars"></i>
                </div>
                <div className="header__searchBox">
                  <button>
                    <img src={require("../images/search.png").default} alt="" />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          {/* {pathname !== "/" && pathname !== "/az" && (
            <div
              className="header__navBox"
              style={{ backgroundColor: "#be9c6b" }}
            >
              <nav className="header__nav">
                <div className="header__navLeft">
                  {category.isLoading === false &&
                    category.data !== undefined &&
                    category.data.data.map((item, index) => (
                      <NavLink
                        to={
                          item.subcategories.data.length === 0
                            ? "/productgallery/" + item.slug
                            : "/productsubgallery/" + item.slug
                        }
                        key={index}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                </div>
              </nav>
            </div>
          )} */}
        </div>
        {pathname === "/" || pathname === "/az" ? (
          <div className="header__slider">
            <Splide
              options={{
                gap: "0",
                type: "loop",
                arrows: false,
                pagination: pagiantion,
                padding: 0,
                autoplay: true,
                interval: 4000,
              }}
            >
              {slider.isLoading === false &&
                slider.data !== undefined &&
                slider.data.data.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="header__layout"></div>
                    <ReactPlayer
                      pip={false}
                      loop={true}
                      controls={false}
                      muted={true}
                      playing={true}
                      className="header__video"
                      url="https://www.youtube.com/watch?v=f8b0EeI_eGI"
                    />
                    {pathname === "/" || pathname === "/az" ? (
                      <div className="header__title">
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <p className="vieMoreContentHeader">
                          <Link to={"/"}>
                            <button className="btnViewMore">VIEW MORE</button>
                          </Link>
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </SplideSlide>
                ))}
            </Splide>
          </div>
        ) : (
          ""
        )}
        {pathname === "/" || pathname === "/az" ? (
          <div className="header__end">
            <Splide
              options={{
                gap: 25,
                type: "false",
                arrows: false,
                padding: 20,
                perPage: 7,
                pagination: false,
                autoplay: true,
                interval: 4000,
                breakpoints: {
                  1700: {
                    perPage: 5,
                    gap: "1rem",
                  },
                  992: {
                    perPage: 3,
                    gap: "1rem",
                  },
                },
              }}
            >
              {category.isLoading === false &&
                category.data !== undefined &&
                category.data.data.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="header__endInfobox">
                      <NavLink
                        to={
                          item.subcategories.data.length === 0
                            ? "/productgallery/" + item.slug
                            : "/productsubgallery/" + item.slug
                        }
                      >
                        {item.name}
                      </NavLink>
                      {item.subcategories.data.length !== 0 && (
                        <div className="header__endDropBox">
                          <div className="header__endDropBox--info">
                            {item.subcategories.data.map(
                              (subitem, subindex) => (
                                <p>
                                  <NavLink
                                    key={subindex}
                                    to={"/productgallery/" + subitem.slug}
                                  >
                                    {subitem.name}
                                  </NavLink>
                                </p>
                              )
                            )}

                            <p className="vieMoreContent">
                              <NavLink
                                className="btnViewMore"
                                to={
                                  item.subcategories.data.length === 0
                                    ? "/productgallery/" + item.slug
                                    : "/productsubgallery/" + item.slug
                                }
                              >
                                {"View More"}
                              </NavLink>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </SplideSlide>
                ))}
            </Splide>
          </div>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default Header;
