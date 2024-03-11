import React from 'react';

interface IScrollArrowProps {
  name?: string;
}

export function ScrollArrow(props: IScrollArrowProps): JSX.Element {
  return (
    <svg width="68" height="67" viewBox="0 0 68 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1_367)">
        <circle cx="34" cy="25" r="25" fill="var(--dark_1)" />
        <circle cx="34" cy="25" r="25" fill="url(#paint0_linear_1_367)" fill-opacity="0.2" />
      </g>

      <path d="M34 12L34 36" stroke="var(--primary)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22 25.0205L34.0208 37.0413L46.0416 25.0205" stroke="var(--background)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />

      <defs>
        <filter id="filter0_d_1_367" x="0.534883" y="0" width="66.9302" height="66.9302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="8.46512" />
          <feGaussianBlur stdDeviation="4.23256" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_367" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_367" result="shape" />
        </filter>
        
        <linearGradient id="paint0_linear_1_367" x1="34" y1="0" x2="34" y2="50" gradientUnits="userSpaceOnUse">
          <stop stop-color="var(--background)" />
          <stop offset="1" stop-color="var(--background)" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}


