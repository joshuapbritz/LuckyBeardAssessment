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
      <div className="wrapper">
        <div className="logo">
          <NavLink to={PagePath.Home}>
            <img src="/logo.png" alt="Logo" />
          </NavLink>
        </div>

        <ul className="navigationLinks">
          <li className="navigationLink">{isOnLanding ? <span>For buyer</span> : <NavLink to={`${PagePath.Home}?linkTo=forBuyer`}>For buyer</NavLink>}</li>

          <li className="navigationLink">{isOnLanding ? <span>For seller</span> : <NavLink to={`${PagePath.Home}?linkTo=forSeller`}>For seller</NavLink>}</li>

          <li className="navigationLink">
            <NavLink to={PagePath.RequestDemo}>Request a demo</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

