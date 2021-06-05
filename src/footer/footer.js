import React, { useState } from "react";

// css
import "./css/_footer.scss";

// query
import { useQuery } from "react-query";

// myQueries
import { footerMenu, settings, ContactApi } from "../queries/queries";

// helper
import { checkedUrl, checkedIsExternal } from "../helper/helper";

// atoms
import { settingsState } from "../atoms/atoms";

// recoil
import { useRecoilState } from "recoil";

// react render Html
import renderHtml from "react-render-html";

// twitter embed
import { TwitterTimelineEmbed } from "react-twitter-embed";

// map
import Map from "../main/map/map";

//react router dom
import { NavLink } from "react-router-dom";

//import react bootstrap

import { Collapse } from "react-bootstrap";

const Footer = (props) => {
  const [settingsUpdate, setSettingsUpdate] = useRecoilState(settingsState);

  const { data, isLoading } = useQuery(["footerMenu", ""], footerMenu, {
    refetchOnWindowFocus: false,
  });

  const mapConfig = useQuery(["contact", ""], ContactApi, {
    refetchOnWindowFocus: false,
  });

  useQuery(["settings"], settings, {
    onSuccess: function (succ) {
      setSettingsUpdate(succ.data);
    },
    refetchOnWindowFocus: false,
  });

  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(false);

  return (
    <footer
      className="footer myPad"
      style={{
        backgroundImage: `url(${require("../images/map-back.jpg").default})`,
      }}
    >
      {/* <div className="whatsap_div">
        <a target="_blank" rel="noreferrer" title="" href="2#">
          <img
            className="full"
            src={require("../images/wp.png").default}
            alt=""
          />
        </a>
      </div> */}
      <div className="footer__container">
        <div className="footer__flexBox">
          <div className="footer__left">
            {/* <div className="footer__logoSelf">
              <img
                className="footer__logoBox"
                src={
                  settingsUpdate !== null
                    ? mediaPath + settingsUpdate.footer_logo
                    : ""
                }
                alt=""
              />
            </div> */}
            <div className="footer__flexBoxItems">
              <div className="footer__right--items ">
                {isLoading === false &&
                  data.map(
                    (items, index) =>
                      items.items !== undefined && (
                        <React.Fragment key={index}>
                          <h4>{items.title}</h4>
                          {items.items.map((subItem, subIndex) => (
                            <NavLink key={subIndex} to={subItem.url}>
                              {subItem.title}
                            </NavLink>
                          ))}
                        </React.Fragment>
                      )
                  )}
              </div>
              <div className="footer__right--items footer__terminal">
                {settingsUpdate !== null && (
                  <div>{renderHtml(settingsUpdate.footer_contact)}</div>
                )}
                <div className="footer__map">
                  {mapConfig.isLoading === false && (
                    <Map
                      locations={[
                        Number(mapConfig.data.viewBag.latitut),
                        Number(mapConfig.data.viewBag.longitude),
                      ]}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__right--items footer__twitter">
              <div>
                <h4
                  onClick={() => {
                    setOpen(!open);
                    setOpen2(false);
                  }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Twitter
                </h4>
                <Collapse in={open}>
                  <div className="tw">
                    {settingsUpdate !== null && (
                      <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName={settingsUpdate.footer_twitter}
                        options={{ height: 345 }}
                      />
                    )}
                  </div>
                </Collapse>
              </div>
              <div>
                <h4
                  style={{ marginTop: 15, marginBottom: 0 }}
                  onClick={() => {
                    setOpen2(!open2);
                    setOpen(false);
                  }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open2}
                >
                  Facebook
                </h4>
                <Collapse in={open2}>
                  <div className="fb">
                    <div
                      className="fb-post"
                      data-href={
                        "https://www.facebook.com/20531316728/posts/10154009990506729/"
                      }
                      data-width="307"
                    ></div>
                  </div>
                </Collapse>
              </div>
            </div>
            <div className="footer__right--items footer__about">
              <div>
                <h4>About Us</h4>
                {settingsUpdate !== null &&
                  renderHtml(settingsUpdate.footer_about)}
              </div>
              <div>
                <NavLink to={"/corporate"}>View More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer__reserv">
        <p>2021 STP Global Cables LLC Allright Reserved.Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
