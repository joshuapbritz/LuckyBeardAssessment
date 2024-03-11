import React from 'react';
import { INavigationProps } from './navigation.models';
import classNames from 'classnames';
import styles from './navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { PagePath } from '../../enums/page-paths';

export function Navigation(props: INavigationProps): JSX.Element {
  const { pathname } = useLocation();

  const isOnLanding = PagePath.Home === pathname;

  return (
    <nav className={classNames(styles.navigationWrapper)}>
      <div className={classNames('wrapper', styles.navigationInner)}>
        <div className={styles.navigationLogo}>
          <NavLink to={PagePath.Home}>
            <img src="/logo.png" alt="Logo" />
          </NavLink>
        </div>

        <ul className={styles.navigationLinks}>
          <li className={styles.navigationLink}>{isOnLanding ? <span>For buyer</span> : <NavLink to={`${PagePath.Home}?linkTo=forBuyer`}>For buyer</NavLink>}</li>

          <li className={styles.navigationLink}>{isOnLanding ? <span>For seller</span> : <NavLink to={`${PagePath.Home}?linkTo=forSeller`}>For seller</NavLink>}</li>

          <li className={classNames(styles.navigationLink, styles.navigationButton)}>
            <NavLink to={PagePath.RequestDemo}>Request a demo</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

