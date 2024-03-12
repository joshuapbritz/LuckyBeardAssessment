import React from 'react';
import styles from './footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footerWrapper}>
      <div className="wrapper">Dealr Automotive Limited | Registration number: 629444 | 15 Harcourt street, St. Kevin's, Dublin 2 D02 XY47, Dublin, Ireland</div>
    </footer>
  );
}

