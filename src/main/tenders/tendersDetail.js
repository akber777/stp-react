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
import { tendersDetail } from "../../queries/queries";
import renderHtml from "react-render-html";

const Tenders = () => {
  const { slug } = useParams();

  useLayoutEffect(() => {
    resizeBody();
  });

  const { data, isLoading } = useQuery(["TENDERS_DETAIL", slug], tendersDetail);

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
              {!isLoading && (
                <>
                  <div className="accordion__button detail">
                    <h2 className="detail">{data.data.name}</h2>
                    <div className="accordionFlex">
                      <div>
                        <span className="detail">
                          Published: {data.data.published_at}
                        </span>
                        <span className="detail">
                          Deadline for Clarifications:{" "}
                          {data.data.clarifictions_at}{" "}
                        </span>
                        <span className="detail">
                          Deadline for Submissions: {data.data.submissions_at}
                        </span>
                      </div>
                      <div className="email">
                        <a href="mailto:Tender@stpglobalcable.com">
                          Email: Tender@stpglobalcable.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion__panel">
                    {renderHtml(data.data.description)}

                    <div className="applyTendersFlex">
                      <button className="applyTenders">APPLY</button>
                    </div>
                  </div>
                </>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tenders;
