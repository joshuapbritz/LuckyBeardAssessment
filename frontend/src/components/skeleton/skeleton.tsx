import React from 'react';
import styles from './skeleton.module.css';

interface ISkeletonProps {
  borderRadius?: number;
  background?: string;
  opacity?: number;
}

export function Skeleton(props: ISkeletonProps): JSX.Element {
  const { borderRadius, background, opacity } = props;

  return (
    <div className={styles.skeletonWrapper} style={{ borderRadius, background, opacity }}>
      <span />
    </div>
  );
}

