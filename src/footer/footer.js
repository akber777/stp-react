import React from "react";
import { NavLink } from "react-router-dom";

// css
import "./css/_footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer myPad">
      <div className="whatsap_div">
        <a target="_blank" rel="noreferrer" title="" href="2#">
          <img
            className="full"
            src={require("../images/wp.png").default}
            alt=""
          />
        </a>
      </div>
      <div className="footer__flexBox">
        <div className="footer__left">
          <img src={require("../images/logoheader.png").default} alt="" />
          <div className="footer__social">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fas fa-play"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right--items">
            <h4>Why WORK with us?</h4>
            <NavLink to={"/"}>Secure booking</NavLink>
            <NavLink to={"/"}>Best price guarantee</NavLink>
            <NavLink to={"/"}>Passionate service</NavLink>
            <NavLink to={"/"}>Exclusive knowledge</NavLink>
            <NavLink to={"/"}>Benefits for partners</NavLink>
          </div>
          <div className="footer__right--items">
            <h4>QUICK LINKS</h4>
            <NavLink to={"/"}>About us</NavLink>
            <NavLink to={"/"}>NESEY</NavLink>
            <NavLink to={"/"}>HTR OXYGEN</NavLink>
            <NavLink to={"/"}>ELIONORE 63</NavLink>
            <NavLink to={"/"}>SW KOI </NavLink>
          </div>
          <div className="footer__right--items">
            <h4>CONNECT US</h4>
            <p>
              Mahmutbey Mah. Taşocağı Cad. No:3, Ağaoğlu My Office 212,
              Kat:26,D:432
            </p>
            <a href="tel:">
              (+90 212) 576 1221{" "}
              <a href="tel:(+90 542) 575 0743">(+90 542) 575 0743</a>
            </a>
            <a href="mailto:www.gocreative.com.tr">www.gocreative.com.tr</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
