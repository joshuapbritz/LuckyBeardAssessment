import React from 'react';
import styles from './skeleton.module.css';

interface ISkeletonProps {
  height?: number;
  borderRadius?: number;
  background?: string;
  opacity?: number;
}

export function Skeleton(props: ISkeletonProps): JSX.Element {
  const { height, borderRadius, background, opacity } = props;
  
  return (
    <div className={styles.skeletonWrapper} style={{ height, borderRadius, background, opacity }}>
      <span />
    </div>
  );
}


