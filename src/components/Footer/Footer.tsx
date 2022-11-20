import React from "react";
import WatermarkLogo from "../WatermarkLogo/WatermarkLogo";

import "./Footer.scss";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="footer">
      {/* <WatermarkLogo className="footer__watermark" /> */}
        <div className="footer__main-column">
          <div className="footer__main-column__title">Kontakt</div>
          <div className="footer__main-column__sub-column">
            <div className="footer__main-column__sub-column__link">
              Broj telefona
            </div>
            <div className="footer__main-column__sub-column__link">
              +381/60-6250-232
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
      </div>
    </div>
  );
};

export default Footer;
