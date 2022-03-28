import React from "react";
import WatermarkLogo from "../WatermarkLogo/WatermarkLogo";

import "./Footer.scss";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="footer">
      {/* <WatermarkLogo className="footer__watermark" /> */}
        <div className="footer__main-column">
          <div className="footer__main-column__title">Glavni naslov</div>
          <div className="footer__main-column__sub-column">
            <div className="footer__main-column__sub-column__link">
              Neki tekst
            </div>
            <div className="footer__main-column__sub-column__link">Isto</div>
            <div className="footer__main-column__sub-column__link">
              Podnaslov
            </div>
          </div>
        </div>
        <div className="footer__main-column">
          <div className="footer__main-column__title">Legal info</div>
          <div className="footer__main-column__sub-column">
            <div className="footer__main-column__sub-column__link">License</div>
            <div className="footer__main-column__sub-column__link">
              www.itachi.rs
            </div>
          </div>
        </div>
        <div className="footer__main-column">
          <div className="footer__main-column__title">Follow us</div>
          <div className="footer__main-column__sub-column">
            <div className="footer__main-column__sub-column__link">
              Linkedin
            </div>
            <div className="footer__main-column__sub-column__link">
              Instagram
            </div>
            <div className="footer__main-column__sub-column__link">Twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
