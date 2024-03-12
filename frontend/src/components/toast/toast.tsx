import React from 'react';
import ReactDOM from 'react-dom';
import styles from './toast.module.css';
import classNames from 'classnames';

interface IToastProps {
  active?: boolean;
  title: string;
  message?: string;
  theme?: 'primary' | 'success' | 'error';
  onClose?: () => void;
}

export function Toast(props: IToastProps): JSX.Element | null {
  const { active = false, title, theme = 'primary', message, onClose } = props;

  if (!active) return null;

  return ReactDOM.createPortal(
    <div className={classNames(styles.toastWrapper, styles[theme])}>
      <h5>{title}</h5>
      {!!message && <p className="dark">{message}</p>}

      {typeof onClose !== 'undefined' && (
        <button onClick={onClose}>
          <span />
        </button>
      )}
    </div>,
    window.document.body
  );
}

