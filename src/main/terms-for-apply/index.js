import React from "react";
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
import { useQuery } from "react-query";
import { tendersDetail } from "../../queries/queries";
import renderHtml from "react-render-html";

const TermsForApply = () => {
  const { slug } = useParams();

  useLayoutEffect(() => {
    resizeBody();
  });

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
            <h1>Terms for apply</h1>
          </div>
          {/* <div className="download__description">
            fwefew
          </div> */}
          <div className="productDetail__tabBox">
            <div className="accordion__panel applyTerms">
              <p>
                Lorem ipsum dolor sit amet consectetur. At diam turpis faucibus
                faucibus enim mauris scelerisque neque. Tempor egestas morbi est
                faucibus. Vulputate massa aliquam et tellus quis orci massa a
                tellus. Volutpat aliquam urna quis morbi nisl. Varius faucibus
                sagittis consequat auctor amet odio faucibus tincidunt. Integer
                fermentum rhoncus diam dignissim maecenas quam id. Sed porttitor
                aliquam faucibus mauris suspendisse magna enim tempus at. Ipsum
                risus sit adipiscing id non cursus eget. At diam pellentesque
                pellentesque neque maecenas. Adipiscing dignissim sit mi egestas
                volutpat eu in gravida porta. Ac a sagittis velit enim
                pellentesque orci morbi gravida id. Aliquam pulvinar maecenas
                amet et ut auctor. Convallis id malesuada nunc nunc viverra
                scelerisque in. Dictum ipsum tortor id urna ultrices purus.
                Ridiculus placerat nullam scelerisque non. Gravida vel nec
                bibendum ut nec et ipsum interdum aliquam. Aliquam eu dignissim
                convallis id facilisi rutrum tristique. Tempor imperdiet massa
                nibh pharetra tellus massa quam sed. Sodales nec ultrices eu
                lobortis et duis. Mi porta lobortis tristique aliquet. Nec
                facilisi urna cras pharetra. In augue eleifend arcu cras risus.
                Id adipiscing porta congue ornare id placerat. Vitae nibh vel
                leo enim sed augue vulputate non odio. Massa suscipit vehicula
                dolor nisl lacus pellentesque et. Neque quam eleifend massa
                nunc. Massa ornare donec ultricies viverra. Quam enim purus mus
                mauris magnis. Arcu tortor blandit nunc aliquam penatibus
                rhoncus laoreet bibendum eu. Et orci nunc diam id suspendisse
                volutpat nec gravida. Dictumst ipsum at feugiat amet quam
                tincidunt. Pretium eu sagittis aliquet aliquet nulla id at
                dictumst. Sed cum pellentesque vehicula ultrices nec lacus non
                quisque. Pellentesque eros nisl ac scelerisque neque at. Sit leo
                eget mollis amet nec. Non a platea eget bibendum eget morbi.
                Gravida tempus massa viverra purus amet. Facilisi urna eu
                facilisis ornare nunc id ultricies. Proin quis gravida sed eget
                praesent. Rutrum aliquet habitant nunc enim ultricies tempor.
                Lacus nulla mattis quis pellentesque elit. Dolor at facilisis
                duis adipiscing eu amet sapien. Id dui nunc facilisi tortor eu
                sodales mollis. Tellus eleifend tortor ac habitant porttitor.
                Pretium duis sed cras etiam iaculis vitae lorem. Blandit gravida
                blandit at id faucibus. Sagittis egestas in nec tortor
                suspendisse nunc vel vestibulum. Enim ornare elit et senectus
                mauris purus pellentesque magna dui. Est est nunc leo purus diam
                non. Et in nec urna at ornare dapibus consequat eros. Lacus non
                justo varius sed. Eu consequat cras sit a. Velit viverra sed id
                orci. Id aliquet consequat elementum habitant morbi. Sed
                vulputate volutpat ornare diam aliquam lorem sed. Ullamcorper
                nibh eleifend a mattis arcu et. Nunc justo eget elit nunc. Sed
                duis imperdiet tempus tellus eget in. Suspendisse eget dignissim
                tempus senectus dui eget nec sit lacus. Cursus volutpat nulla
                nulla ullamcorper nunc. Et pellentesque sagittis pulvinar tortor
                porttitor urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsForApply;
