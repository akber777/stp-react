import React, { useLayoutEffect } from "react";

// css
import "./css/_contact.scss";

// helper
import { resizeBody } from "../../helper/helper";

// react router dom
import { NavLink } from "react-router-dom";

// map
import Map from "../map/map";

// reactstrap
import { Input, Container } from "reactstrap";

// numeric
import NumericInput from "react-numeric-input";

// react query
import { useQuery } from "react-query";

// myQueries
import { ContactApi } from "../../queries/queries";

// renderHtml
import renderHtml from "react-render-html";

// react i 18
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    resizeBody();
  });

  const { data, isLoading } = useQuery(["contact", ""], ContactApi, {
    refetchOnWindowFocus: false,
  });

  return (
    <main className="contact">
      <div className="contact__wrapper">
        <div className="contact__left myPad">
          <div className="contact__breadCrumbs">
            {isLoading === false && data !== undefined && (
              <NavLink to={data.viewBag.url}>{data.viewBag.title}</NavLink>
            )}
          </div>
          <div className="contact__title">
            {/*<h1>{t("LetsTalk")}</h1>*/}
            <div>
              <h4>{t("VisitUs")}</h4>
              {isLoading === false &&
                data !== undefined &&
                renderHtml(data.viewBag.address)}
            </div>
            <div>
              <h4>{t("CallUs")}</h4>
              {isLoading === false &&
                data !== undefined &&
                renderHtml(data.viewBag.phone)}
            </div>
            <div>
              <h4>{t("EmailUs")}</h4>
              {isLoading === false &&
                data !== undefined &&
                renderHtml(data.viewBag.email)}
            </div>
          </div>
        </div>
        <div className="contact__right">
          <div id="map">
            {isLoading === false && (
              <Map
                locations={[
                  Number(data.viewBag.latitut),
                  Number(data.viewBag.longitude),
                ]}
              />
            )}
          </div>
        </div>
      </div>
      <div className="contact__us">
        <h4>{t("REGISTERYOURINTEREST")}</h4>
        <Container>
          <div className="contact__info">
            <Input
              className="contact__leftInp"
              type="text"
              placeholder={t("FirstNameLastName")}
            />
            <Input
              className="contact__leftInp"
              type="text"
              placeholder={t("Salutation")}
            />
            <Input
              className="contact__leftInp"
              type="text"
              placeholder={t("Email")}
            />
            <NumericInput
              min={0}
              strict
              className="form-control contact__leftInp"
              placeholder={t("Phone")}
            />
            <textarea placeholder={t("Yourmessage")}></textarea>
            <div className="contact__sendBtn">
              <button>{t("Send")}</button>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Contact;
