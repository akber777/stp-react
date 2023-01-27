import React, { useLayoutEffect, useState } from "react";

// css
import "./css/_header.scss";

// react router dom
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";

// react splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// reactstrap
import { Input } from "reactstrap";

// helper
import { toggleSearch, checkedUrl } from "../helper/helper";

// jquery
import $ from "jquery";

// react query
import { useMutation, useQuery } from "react-query";

// myQueries
import { HomeSlider, HeaderMenu, searchResult } from "../queries/queries";

// axios
import axios from "axios";

// baseApi
import { baseUrl, version } from "../api/api";

// react video player
import ReactPlayer from "react-player";

// atoms
import { settingsState, searchResultState } from "../atoms/atoms";

// recoil
import { useRecoilState, useRecoilValue } from "recoil";

// i18
import i18n from "../i18/i18";

const Header = (props) => {
  const { pathname } = useLocation();

  const settingsData = useRecoilValue(settingsState);

  const history = useHistory();

  useLayoutEffect(() => {
    toggleSearch();

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".alwaysFixed").addClass("hoverScroll");
        $(".alwaysFixedInline").addClass("hoverScrollInline");
      } else {
        $(".alwaysFixed").removeClass("hoverScroll");
        $(".alwaysFixedInline").removeClass("hoverScrollInline");
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

    if (window.innerWidth > 1033) {
      $(".hoverLogoBox").on("mouseover", function () {
        $(".header__navBox").css({
          backgroundColor: "#fff",
        });

        $(".header__navBox a").css({
          color: "#303882",
        });

        $(".header__langBox").addClass("changeLangBox");

        $(".header__searchBox img").hide();

        $(".noHover").addClass("showSearch");
      });

      $(".hoverLogoBox").on("mouseout", function () {
        $(".header__navBox").css({
          backgroundColor: "transparent",
        });

        $(".header__navBox a").css({
          color: "#fff",
        });

        $(".header__langBox").removeClass("changeLangBox");
        $(".header__searchBox img").show();
        $(".noHover").removeClass("showSearch");
      });
    }
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
    refetchOnWindowFocus: false,
  });

  // category
  const category = useQuery(
    ["headerCategory", ""],
    async () => {
      const res = axios.get(
        baseUrl +
          version +
          "data/category?include=subcategoriesNoneProducts,products3"
      );

      return (await res).data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  // headermenu
  const headerMenu = useQuery(["headerMenu", ""], HeaderMenu, {
    refetchOnWindowFocus: false,
  });

  const [value, setValue] = useState(null);

  const [addSearchResult, setAddSearchResult] =
    useRecoilState(searchResultState);

  // search
  const mutateSearch = useMutation((data) => searchResult(data), {
    onSuccess: function (succ) {
      setAddSearchResult({
        data: succ,
        title: value,
      });
      $(".search").fadeOut();
      history.push({
        pathname: "/searchresult",
        search: `q=${value}`,
      });
    },
  });

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    // window.location.reload();

    // window.location.replace(
    //     window.location.origin +
    //     "/" +
    //     localStorage.getItem("i18nextLng") +
    //     pathname
    // );
  };

  return (
    <>
      {/* search */}
      <div className="search">
        <div className="search__inputBox">
          <div className="search__close">
            <img src={require("../images/close.png").default} alt="" />
          </div>
          <div className="search__flexBox">
            <Input
              type="text"
              placeholder={"Search..."}
              onKeyUp={(event) => {
                setValue(event.target.value);
              }}
            />
            <button
              onClick={() => {
                if (value !== null && value !== "") {
                  mutateSearch.mutate(value);
                }
              }}
            >
              <img src={require("../images/search.png").default} alt="" />
            </button>
          </div>
        </div>
      </div>
      <header
        className={pathname !== "/" ? "header alwaysFixedInline" : "header"}
      >
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
          className={pathname !== "/" ? "" : "alwaysFixed"}
          style={{
            position:
              pathname === "/" || pathname === "/en" ? "absolute" : "relative",
            backgroundColor:
              pathname === "/" || pathname === "/en"
                ? "transparent"
                : "#303882",
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
                    <NavLink
                      to={checkedUrl(item)}
                      key={index.toString() + item.title}
                    >
                      {item.title}
                    </NavLink>
                  ))}
              </div>
              <div className="header__navRight">
                <div className="header__langBox">
                  <NavLink
                    style={{
                      display: "none",
                    }}
                    to={""}
                    onClick={() => {
                      changeLang("en");
                    }}
                  >
                    En
                  </NavLink>
                  <NavLink
                    style={{
                      display: "none",
                    }}
                    to={""}
                    onClick={() => {
                      changeLang("az");
                    }}
                  >
                    Az
                  </NavLink>
                  <NavLink to={"/"} className="worldTranslate">
                    <i class="fas fa-globe"></i>
                    <div
                      className="translateWrapper"
                      id="google_translate_element"
                    ></div>
                  </NavLink>
                </div>
                <div className="header__mobMenu">
                  <i className="fas fa-bars"></i>
                </div>
                <div className="header__searchBox">
                  <button>
                    <img
                      className="noHover"
                      src={require("../images/search.png").default}
                      alt=""
                    />
                    <img
                      src={require("../images/searchNoHover.png").default}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          {/* {pathname !== "/" && pathname !== "/en" && (
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
        {pathname === "/" || pathname === "/en" ? (
          <div className="header__slider">
            <button
              className="playVideo"
              onClick={(event) => {
                document.querySelector(".header__video video").play();
                event.target.style.display = "none";
              }}
            >
              Play Video
            </button>
            <Splide
              options={{
                gap: "0",
                type: "false",
                arrows: false,
                pagination: pagiantion,
                drag: false,
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
                    {settingsData !== null && (
                      <ReactPlayer
                        pip={false}
                        loop={true}
                        controls={false}
                        muted={true}
                        playing={true}
                        className="header__video"
                        url={settingsData.video_link}
                      />
                    )}

                    {pathname === "/" || pathname === "/en" ? (
                      <div className="header__title">
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <p className="vieMoreContentHeader">
                          <Link to={"/"}>
                            {/* <button className="btnViewMore">VIEW MORE</button> */}
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
        {pathname === "/" || pathname === "/en" ? (
          <div className="header__end">
            <Splide
              options={{
                gap: 25,
                type: "false",
                arrows: false,
                padding: 20,
                perPage: 7,
                pagination: false,
                autoplay: false,
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
                          item.subcategoriesNoneProducts.data.length === 0
                            ? "/subcategory/" + item.slug
                            : "/productsubgallery/" + item.slug
                        }
                      >
                        {item.name}
                      </NavLink>
                      {item.subcategoriesNoneProducts.data.length !== 0 ? (
                        <div className="header__endDropBox">
                          <div className="header__endDropBox--info">
                            <div className="overflowHiddenMenu">
                              {item.subcategoriesNoneProducts.data.map(
                                (subitem, subindex) => (
                                  <p>
                                    <NavLink
                                      key={subindex}
                                      to={"/subcategory/" + subitem.slug}
                                    >
                                      {subitem.name}
                                    </NavLink>
                                  </p>
                                )
                              )}
                            </div>

                            <p className="vieMoreContent">
                              <NavLink
                                className="btnViewMore"
                                to={
                                  item.subcategoriesNoneProducts.data.length ===
                                  0
                                    ? "/subcategory/" + item.slug
                                    : "/productsubgallery/" + item.slug
                                }
                              >
                                {"View More"}
                              </NavLink>
                            </p>
                          </div>
                        </div>
                      ) : (
                        item.products3.data.length !== 0 && (
                          <div className="header__endDropBox">
                            <div className="header__endDropBox--info">
                              <div className="overflowHiddenMenu">
                                {item.products3.data.map((item, index) => (
                                  <p>
                                    <NavLink
                                      key={index}
                                      to={"/product/" + item.slug}
                                    >
                                      {item.name}
                                    </NavLink>
                                  </p>
                                ))}
                              </div>
                              <p className="vieMoreContent">
                                <NavLink
                                  className="btnViewMore"
                                  to={"/subcategory/" + item.slug}
                                >
                                  {"View More"}
                                </NavLink>
                              </p>
                            </div>
                          </div>
                        )
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
