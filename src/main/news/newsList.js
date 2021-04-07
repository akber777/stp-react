import React, { useLayoutEffect, useState } from "react";

//css
import "./css/_newsDetail.scss";
import "./css/_newsList.scss";
import "../home/css/_home.scss";

// helper
import { resizeBody } from "../../helper/helper";

// react router dom
import { NavLink, Link, useLocation } from "react-router-dom";

// bootstrap
import { Row, Col } from "reactstrap";

// pagination semantic ui
import { Pagination } from "semantic-ui-react";

// react query
import { useQuery } from "react-query";

// myQueries
import { News } from "../../queries/queries";

// animated css
import { Animated } from "react-animated-css";

const NewsDetail = (props) => {
  useLayoutEffect(() => {
    resizeBody();
  });

  const { pathname } = useLocation();

  const splitPath = pathname.split("/")[pathname.split("/").length - 1];

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);

  const { data, isLoading } = useQuery(["newsList", page], News, {
    refetchOnWindowFocus: false,
    onSuccess: function (succ) {
      setTotal(succ.meta.pagination.pageTotal);
    },
  });

  const changePage = (e, pageInfo) => {
    if (pageInfo.activePage !== "NaN") {
      setPage(pageInfo.activePage);
    }
  };

  return (
    <main className="newsDetail myPad newsList">
      <Animated
        animationIn="slideInLeft"
        animationOut="zoomOut"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={true}
      >
        <div className="newsDetail__breadCrumbs">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/news/1"}>{splitPath}</NavLink>
        </div>
        <div className="newsDetail__title">
          <h1>News</h1>
        </div>
        <div className="newsDetail__content">
          <Row>
            {isLoading === false &&
              data !== undefined &&
              data.data.map((item) => (
                <Col md="6" lg="4" xl="3" key={item}>
                  <Animated
                    animationIn="zoomIn"
                    animationOut="zoomOut"
                    animationInDuration={400}
                    animationOutDuration={400}
                    isVisible={true}
                  >
                    <Link to={"/news/" + item.slug}>
                      <div className="home__relatedSliderItems">
                        <div className="home__relatedSliderItems--img">
                          <div className="imgRelated">
                            <img
                              src={
                                item.img !== null && item.img !== undefined
                                  ? item.img.cover
                                  : ""
                              }
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
                  </Animated>
                </Col>
              ))}
          </Row>
        </div>
        <div className="newsList__pagination">
          <Pagination
            onPageChange={changePage}
            defaultActivePage={page}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            totalPages={total}
          />
        </div>
      </Animated>
    </main>
  );
};

export default NewsDetail;
