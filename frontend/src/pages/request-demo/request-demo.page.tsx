import React from 'react';
import styles from './request-demo.module.css';
import classNames from 'classnames';

export function RequestDemoPage(): JSX.Element {
  return (
    <div className={styles.requestPageContainer}>
      <header className={styles.headerWrapper}>
        <div className={classNames(styles.headerContent, 'headerContent')}>
          <h1>Request a demo</h1>
          <p>If you are a professional, we offer a desktop admin platform, to allow a better and faster management of your whole business</p>
        </div>
      </header>

      <article className={classNames('wrapper', styles.requestPageContent)}>
        <form className={classNames(styles.requestPageFormWrapper)}>
          <h2 className="dark">Please fill your application</h2>

          <div className="formControl">
            <input type="text" />
          </div>

          <div className="formControl">
            <input type="text" />
          </div>

          <div className="formControl">
            <input type="tel" />
          </div>

          <div className="formControl">
            <input type="text" />
          </div>

          <div className="formControl">
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>

          <div className="formControl">
            <button disabled className="formButton">
              Request
            </button>
          </div>
        </form>

        <ol className={styles.requestPageArticleList}>
          <li>
            <a href="#home" target="_blank" rel="noopener noreferrer">
              Article Number 1
            </a>
          </li>
        </ol>
      </article>
    </div>
  );
}

