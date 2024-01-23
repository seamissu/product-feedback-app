import * as React from 'react';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Frontend Mentor</h2>
      <p className={styles.text}>Feedback Board</p>
    </div>
  );
}

export default Logo;
