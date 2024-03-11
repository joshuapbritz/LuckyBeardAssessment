import React from 'react';
import styles from './home.module.css';
import { ScrollArrow } from '../../components/scroll-arrow/scroll-arrow';

export function HomePage(): JSX.Element {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <img src="/header.jpeg" alt="" />

        <div className={styles.headerContent}>
          <h1>A new era for test-drives</h1>
          <p>Enhanced test drive experience through the connection of people in a secure, scheduled and convenient manner to ensure the seamless buying and selling of new and used vehicles.</p>
        </div>

        <div className={styles.headerCircles}>
          {/* <ScrollArrow /> */}

          {/* Blue Circle */}
          <svg preserveAspectRatio="none" fill="none" viewBox="0 0 1920 273" className={styles.headerCircle}>
            <path fill="var(--primary)" fill-rule="evenodd" d="M1934.16 273H-15.155C169.917 110.611 536.948 0 959.5 0c422.55 0 789.58 110.611 974.66 273Z" clip-rule="evenodd" />
          </svg>

          {/* Black Circle */}
          <svg preserveAspectRatio="none" fill="none" viewBox="0 0 1920 248" className={styles.headerCircle}>
            <path fill="var(--dark_1)" fill-rule="evenodd" d="M1920 209.083V248H0v-39.576C189.486 83.965 548.19 0 959.5 0c412.04 0 771.28 84.261 960.5 209.083Z" clip-rule="evenodd" />
          </svg>

          {/* White Circle */}
          <svg preserveAspectRatio="none" fill="none" viewBox="0 0 1920 225" className={styles.headerCircle}>
            <mask id="a" fill="var(--background)">
              <path fill-rule="evenodd" d="M1920 139.897V225H0v-85.543C189.486 56.181 548.19 0 959.5 0c412.04 0 771.28 56.38 960.5 139.897Z" clip-rule="evenodd" />
            </mask>
            <path fill="var(--background)" fill-rule="evenodd" d="M1920 139.897V225H0v-85.543C189.486 56.181 548.19 0 959.5 0c412.04 0 771.28 56.38 960.5 139.897Z" clip-rule="evenodd" />
            <path
              fill="var(--dark_1)"
              d="M1920 139.897h1v-.652l-.6-.263-.4.915Zm0 85.103v1h1v-1h-1ZM0 225h-1v1h1v-1Zm0-85.543-.402-.916-.598.263v.653h1Zm1919 .44V225h2v-85.103h-2Zm1 84.103H0v2h1920v-2ZM1 225v-85.543h-2V225h2Zm-.598-84.628C189.698 57.18 548.235 1 959.5 1v-2C548.144-1 189.274 55.182-.402 138.541l.804 1.831ZM959.5 1c411.99 0 771.07 56.379 960.1 139.812l.8-1.83C1730.99 55.38 1371.58-1 959.5-1v2Z"
              mask="url(#a)"
            />
          </svg>
        </div>
      </header>

      <article className={styles.homeContentWrapper}></article>
    </React.Fragment>
  );
}




