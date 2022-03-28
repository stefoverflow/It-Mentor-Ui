import React from "react";

interface WatermarkLogoProps {
  className: string;
}

const WatermarkLogo = ({ className }: WatermarkLogoProps) => (
  <div className={className}>
    <svg
      width="136.4rem"
      height="37.448rem"
      viewBox="0 0 134 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.176 1.4V35H6.72V1.4H4.176ZM34.491 1.4H10.779V3.8H21.339V35H23.931V3.8H34.491V1.4ZM56.1409 35H58.8289L45.8209 1.4H43.1329L30.0769 35H32.7649L36.0289 26.456H52.8769L56.1409 35ZM36.9889 24.056L44.4769 4.52L51.9649 24.056H36.9889ZM77.1124 35.528C83.4004 35.528 88.8724 32.264 91.6084 27.32L89.3524 26.024C87.1444 30.248 82.4404 33.08 77.1124 33.08C68.2804 33.08 62.1844 26.456 62.1844 18.2C62.1844 9.944 68.2804 3.32 77.1124 3.32C82.3924 3.32 87.0484 6.104 89.2564 10.232L91.5124 8.936C88.7284 4.04 83.3044 0.871999 77.1124 0.871999C66.8884 0.871999 59.6404 8.6 59.6404 18.2C59.6404 27.8 66.8884 35.528 77.1124 35.528ZM118.967 1.4V16.52H99.4313V1.4H96.8873V35H99.4313V18.92H118.967V35H121.511V1.4H118.967ZM126.96 1.4V35H129.504V1.4H126.96Z"
        fill="url(#paint0_linear_208_2)"
        fill-opacity="0.2"
      />
      {/* <ellipse
        cx="76.4296"
        cy="18"
        rx="6.94815"
        ry="7"
        fill="white"
        fill-opacity="0.1"
      /> */}
      <ellipse
        cx="76.9258"
        cy="18.5"
        rx="2.48148"
        ry="2.5"
        fill="url(#paint1_linear_208_2)"
        fill-opacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_2"
          x1="67"
          y1="1"
          x2="67"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5BB8F8" />
          <stop offset="1" stop-color="#54D1CC" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_2"
          x1="76.9258"
          y1="16"
          x2="76.9258"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5BB8F8" />
          <stop offset="1" stop-color="#54D1CC" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default WatermarkLogo;
