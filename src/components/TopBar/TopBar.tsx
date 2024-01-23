import * as React from 'react';
import styles from './TopBar.module.scss';

import IconBulb from '../IconBulb';

function TopBar() {
  return (
    <div className={styles.wrapper}>
      <IconBulb />
      <h3 className={styles.text}>
        <span>6</span> Suggestions
      </h3>
      <div></div>
      <button className={styles.button}>+ Add Feedback</button>
    </div>
  );
}

export default TopBar;
