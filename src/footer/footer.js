import React from "react";

// css
import "./css/_footer.scss";

// query
import { useQuery } from "react-query";

// myQueries
import { footerMenu, settings } from "../queries/queries";

// helper
import { checkedUrl, checkedIsExternal } from "../helper/helper";

// atoms
import { settingsState } from "../atoms/atoms";

// recoil
import { useRecoilState } from "recoil";

// apiMediaPath
import { mediaPath } from "../api/api";

// react render Html
import renderHtml from "react-render-html";

const Footer = (props) => {
  const [settingsUpdate, setSettingsUpdate] = useRecoilState(settingsState);

  const { data, isLoading } = useQuery(["footerMenu", ""], footerMenu);

  useQuery(["settings"], settings, {
    onSuccess: function (succ) {
      setSettingsUpdate(succ.data);
    },
  });

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
          <img
            src={
              settingsUpdate !== null
                ? mediaPath + settingsUpdate.footer_logo
                : ""
            }
            alt=""
          />
          <div className="footer__social">
            {settingsUpdate !== null &&
              settingsUpdate.social.map((item, index) => (
                <a href={item.url} key={index} target="_blank" rel="noreferrer">
                  <i className={item.class}></i>
                </a>
              ))}
          </div>
        </div>
        <div className="footer__right">
          {isLoading === false &&
            data.map((item, index) => (
              <div className="footer__right--items" key={index}>
                <h4>{item.title}</h4>
                {item.items.map((menuItems, menuIndex) =>
                  checkedIsExternal(
                    menuItems.viewBag.isExternal,
                    menuIndex,
                    checkedUrl(menuItems),
                    menuItems.title
                  )
                )}
              </div>
            ))}
          <div className="footer__right--items">
            {settingsUpdate !== null &&
              renderHtml(settingsUpdate.footer_contact)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
