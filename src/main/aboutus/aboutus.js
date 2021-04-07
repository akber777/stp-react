import React, { useLayoutEffect } from "react";

// css
import "../static/css/_static.scss";
import "../product/css/_product.scss";
import "./css/_aboutUs.scss";

// helper
import { resizeBody } from "../../helper/helper";

// animated css
import { Animated } from "react-animated-css";

const Static = (props) => {
  useLayoutEffect(() => {
    resizeBody();
  });

  return (
    <main className="static product productDetail myPad aboutUs">
      <Animated
        animationIn="slideInLeft"
        animationOut="zoomOut"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={true}
      >
        <div className="product__right">
          <div className="product__right--title">
            <h1>About Us</h1>
          </div>
          <div className="productDetail__tabBox">
            <p>
              <strong>Customer Focused</strong>&nbsp;
              <br />
              <br />
              &bull; Satisfy our customers' needs and expectations&nbsp;
              <br />
              &bull; Make commitments we fully understand and believe we can
              meet&nbsp;
              <br />
              &bull; Meet all commitments to customers on time&nbsp;
              <br />
              <br />
              <strong>Performance Driven</strong>&nbsp;
              <br />
              <br />
              &bull; Verify that our products and services meet agreed
              requirements&nbsp;
              <br />
              &bull; Monitoring, benchmark and continuously improving our
              business, products and services, organization and employees'
              performance&nbsp;
              <br />
              <br />
              <strong>Achieve EMTA's Mission and Goals</strong>&nbsp;
              <br />
              <br />
              &bull; Sustain and develop business growth and Intellectual
              Property
            </p>
            <p>
              <strong>
                Emta Conductor confirms that products comply requirements of
                related international standards.
              </strong>
            </p>
            <p>
              Emta Conductor seeks for developing procedures and processes that
              guarantee high quality products that not only meet the requirement
              but also pass beyond these. This conception leads to continuous
              development of processes during procurement, manufacturing and
              sales.
            </p>
            <p>
              Emta Conductor has ISO 9001:2008, ISO 14001:2004,&nbsp;OHSAS
              18001:2007 and ISO 50001:2011 quality systems&nbsp;certificates
              and all products manufactured by the company are complied with
              current international standards as EN, IEC, ASTM, CSA,
              GOST,&nbsp;DIN, NF-C, BS, TS, UNE.
            </p>
            <p>All products are compliant with RoHS and REACH.</p>
            <p>
              Emta is also able to supply and manufacture in accordance with
              customers&rsquo; needs and specifications.
            </p>
            <p>
              <img
                src="http://emtaconductor.com/images/qualitytable.jpg"
                alt=""
              />
              <br />
              <strong>
                Production Flow Chart for Alloyed Aluminium Wire &amp; Alloyed
                Aluminium Conductor.
              </strong>
            </p>
            <p>&nbsp;</p>
          </div>
        </div>
      </Animated>
    </main>
  );
};

export default Static;
