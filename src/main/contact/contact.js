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

// animated css
import { Animated } from "react-animated-css";

const Contact = () => {
  useLayoutEffect(() => {
    resizeBody();
  });

  const { data, isLoading } = useQuery(["contact", ""], ContactApi, {
    refetchOnWindowFocus: false,
  });

  return (
    <main className="contact">
      <Animated
        animationIn="slideInLeft"
        animationOut="zoomOut"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={true}
      >
        <div className="contact__wrapper">
          <div className="contact__left myPad">
            <div className="contact__breadCrumbs">
              {isLoading === false && data !== undefined && (
                <NavLink to={data.viewBag.url}>{data.viewBag.title}</NavLink>
              )}
            </div>
            <div className="contact__title">
              <h1>Let's Talk</h1>
              <h4>Visit Us</h4>
              {isLoading === false &&
                data !== undefined &&
                renderHtml(data.viewBag.address)}
              <h4>Call Us</h4>
              {isLoading === false &&
                data !== undefined &&
                renderHtml(data.viewBag.phone)}
              <h4>Email Us</h4>
              {isLoading === false &&
                data !== undefined &&
                renderHtml(data.viewBag.email)}
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
          <h4>
            <span>REGISTER YOUR</span> INTEREST
          </h4>
          <Container>
            <div className="contact__info">
              <Input
                className="contact__leftInp"
                type="text"
                placeholder={"First Name / Last Name"}
              />
              <Input
                className="contact__leftInp"
                type="text"
                placeholder={"Salutation "}
              />
              <Input
                className="contact__leftInp"
                type="text"
                placeholder={"Email"}
              />
              <NumericInput
                min={0}
                strict
                className="form-control contact__leftInp"
                placeholder={"Phone"}
              />
              <textarea placeholder={"Your message"}></textarea>
              <div className="contact__sendBtn">
                <button>Send</button>
              </div>
            </div>
          </Container>
        </div>
      </Animated>
    </main>
  );
};

export default Contact;
