import React from 'react';
import styles from './scroll-arrow.module.css';

export function ScrollArrow(): JSX.Element {
  return (
    <div
      className={styles.scrollArrowWrapper}
      onClick={({ currentTarget }) => {
        (currentTarget as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
    >
      <svg fill="none" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="25" fill="var(--dark_1)" />
        <circle cx="25" cy="25" r="25" fill="url(#a)" fill-opacity=".2" />

        <path stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M25 12v24" />
        <path stroke="var(--background)" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="m13 25.02 12.02 12.021 12.022-12.02" />

        <defs>
          <linearGradient id="a" x1="25" x2="25" y1="0" y2="50" gradientUnits="userSpaceOnUse">
            <stop stop-color="var(--background)" />
            <stop offset="1" stop-color="var(--background)" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

