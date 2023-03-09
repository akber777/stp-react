import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { resizeBody } from "../../helper/helper";
import DownloadMenu from "../tenders/downloadMenu";
import { Accordion } from "react-accessible-accordion";
// css
import "../product/css/_product.scss";
import "../tenders/css/_download.scss";
import "../static/css/_static.scss";
import "react-accessible-accordion/dist/fancy-example.css";

const Tenders = () => {
  const { slug } = useParams();

  useLayoutEffect(() => {
    resizeBody();
  });

  return (
    <main>
      <div className="product__breadCrumbs static myPad">
        <NavLink to={"/"}>HomePage</NavLink>
        <NavLink to={"/terms-for-apply"}>Terms For Apply</NavLink>
        {slug !== undefined && <NavLink to={"/tenders" + slug}>{slug}</NavLink>}
      </div>
      <div className="download  product productDetail myPad">
        <div className="product__left">
          <DownloadMenu />
        </div>
        <div className="product__right">
          <div className="product__right--title">
            <h1>Terms For Apply</h1>
          </div>
          {/* <div className="download__description">
            fwefew
          </div> */}
          <div className="productDetail__tabBox">
            <Accordion>
              <div className="accordion__panel">
                "But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure?" "But I must explain
                to you how all this mistaken idea of denouncing pleasure and
                praising pain was born and I will give you a complete account of
                the system, and expound the actual teachings of the great
                explorer of the truth, the master-builder of human happiness. No
                one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful. Nor again is there anyone who loves or pursues or
                desires to obtain pain of itself, because it is pain, but
                because occasionally circumstances occur in which toil and pain
                can procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it? But who has any right to find
                fault with a man who chooses to enjoy a pleasure that has no
                annoying consequences, or one who avoids a pain that produces no
                resultant pleasure?" "But I must explain to you how all this
                mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, and
                expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes,
                or avoids pleasure itself, because it is pleasure, but because
                those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is
                there anyone who loves or pursues or desires to obtain pain of
                itself, because it is pain, but because occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever
                undertakes laborious physical exercise, except to obtain some
                advantage from it? But who has any right to find fault with a
                man who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces no
                resultant pleasure?" "But I must explain to you how all this
                mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, and
                expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes,
                or avoids pleasure itself, because it is pleasure, but because
                those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is
                there anyone who loves or pursues or desires to obtain pain of
                itself, because it is pain, but because occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever
                undertakes laborious physical exercise, except to obtain some
                advantage from it? But who has any right to find fault with a
                man who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces no
                resultant pleasure?" "But I must explain to you how all this
                mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, and
                expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes,
                or avoids pleasure itself, because it is pleasure, but because
                those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is
                there anyone who loves or pursues or desires to obtain pain of
                itself, because it is pain, but because occasionally
                circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever
                undertakes laborious physical exercise, except to obtain some
                advantage from it? But who has any right to find fault with a
                man who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces no
                resultant pleasure?"
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tenders;
