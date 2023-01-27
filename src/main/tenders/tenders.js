import React from "react";
import { useLayoutEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { resizeBody } from "../../helper/helper";
import DownloadMenu from "./downloadMenu";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// css
import "../product/css/_product.scss";
import "./css/_download.scss";
import "../static/css/_static.scss";
import "react-accessible-accordion/dist/fancy-example.css";
import { useQuery } from "react-query";
import { tendersData } from "../../queries/queries";
import renderHtml from "react-render-html";

const Tenders = () => {
  const { slug } = useParams();

  useLayoutEffect(() => {
    resizeBody();
  });

  const { data, isLoading } = useQuery(["TENDERS"], tendersData);

  return (
    <main>
      <div className="product__breadCrumbs static myPad">
        <NavLink to={"/"}>HomePage</NavLink>
        <NavLink to={"/tenders"}>Tenders</NavLink>

        {slug !== undefined && <NavLink to={"/tenders" + slug}>{slug}</NavLink>}
      </div>
      <div className="download  product productDetail myPad">
        <div className="product__left">
          <DownloadMenu />
        </div>
        <div className="product__right">
          <div className="product__right--title">
            <h1>Tenders</h1>
          </div>
          {/* <div className="download__description">
            fwefew
          </div> */}
          <div className="productDetail__tabBox">
            <Accordion>
              {!isLoading &&
                data?.data.map((item, index) => (
                  <div
                    className="accordion__button"
                    key={index.toString() + item.name}
                  >
                    <NavLink to={`/tenders/${item.slug}`}>
                      <h2>{item.name}</h2>
                      <div className="accordionFlex">
                        <div>
                          <span>Published: {item.published_at}</span>
                          <span>
                            Deadline for Clarifications: {item.clarifictions_at}{" "}
                          </span>
                          <span>
                            Deadline for Submissions: {item.submissions_at}
                          </span>
                        </div>

                        <div className="email">
                          <a href="mailto:Tender@stpglobalcable.com">
                            Email: Tender@stpglobalcable.com
                          </a>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tenders;
