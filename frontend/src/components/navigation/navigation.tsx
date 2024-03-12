import React, { useEffect } from 'react';
import { INavigationProps } from './navigation.models';
import classNames from 'classnames';
import styles from './navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { PagePath } from '../../enums/page-paths';

export function Navigation(props: INavigationProps): JSX.Element {
  const { pathname, search } = useLocation();

  const isOnLanding = PagePath.Home === pathname;

  function scrollToElement(id: string) {
    const element = document.getElementById(id);

    window.requestIdleCallback(() => {
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  useEffect(() => {
    if (!!search) {
      const params = new URLSearchParams(search);
      const linkTo = params.get('linkTo');

      if (!!linkTo) {
        const urlSplit = window.location.href.split('?');
        const obj = { title: document.title, url: urlSplit[0] };
        window.history.replaceState(obj, obj.title, obj.url);

        scrollToElement(linkTo);
      }
    }
  }, [search]);

  return (
    <nav className={classNames(styles.navigationWrapper, { [styles.offHome]: !isOnLanding })}>
      <div className={classNames('wrapper', styles.navigationInner)}>
        <div className={styles.navigationLogo}>
          <NavLink to={PagePath.Home}>
            <img src="/logo.png" alt="Logo" />
          </NavLink>
        </div>

        <ul className={styles.navigationLinks}>
          <li className={styles.navigationLink}>{isOnLanding ? <span onClick={() => scrollToElement('forBuyer')}>For buyer</span> : <NavLink to={`${PagePath.Home}?linkTo=forBuyer`}>For buyer</NavLink>}</li>

          <li className={styles.navigationLink}>{isOnLanding ? <span onClick={() => scrollToElement('forSeller')}>For seller</span> : <NavLink to={`${PagePath.Home}?linkTo=forSeller`}>For seller</NavLink>}</li>

          <li className={classNames(styles.navigationLink, styles.navigationButton)}>
            <NavLink to={PagePath.RequestDemo}>Request a demo</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

