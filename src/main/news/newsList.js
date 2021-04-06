import React, { useLayoutEffect } from "react";

//css
import "./css/_newsDetail.scss";
import "./css/_newsList.scss";
import "../home/css/_home.scss";

// helper
import { resizeBody } from "../../helper/helper";

// react router dom
import { NavLink, Link } from "react-router-dom";

// bootstrap
import { Row, Col } from "reactstrap";

// pagination semantic ui
import { Pagination } from "semantic-ui-react";

// react query
import { useQuery } from "react-query";

// myQueries
import { News } from "../../queries/queries";

const NewsDetail = (props) => {
  useLayoutEffect(() => {
    resizeBody();
  });

  const { data, isLoading } = useQuery(["newsList", ""], News, {
    refetchOnWindowFocus: false,
  });

  return (
    <main className="newsDetail myPad newsList">
      <div className="newsDetail__breadCrumbs">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/news/1"}>News</NavLink>
      </div>
      <div className="newsDetail__title">
        <h1>News cable standard production for 2022</h1>
      </div>
      <div className="newsDetail__content">
        <Row>
          {isLoading === false &&
            data !== undefined &&
            data.data.map((item) => (
              <Col md="6" lg="4" xl="3" key={item} className="pb-5">
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
              </Col>
            ))}
        </Row>
      </div>
      <div className="newsList__pagination">
        <Pagination defaultActivePage={5} totalPages={10} />
      </div>
    </main>
  );
};

export default NewsDetail;
