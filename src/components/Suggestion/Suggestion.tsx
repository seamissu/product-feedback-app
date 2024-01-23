import * as React from 'react';
import styles from './Suggestion.module.scss';

import IconArrowUp from '../IconArrowUp';
import IconComments from '../IconComments';

function Suggestion() {
  return (
    <div className={styles.wrapper}>
      <div>
        <button className={styles.upvote}>
          <IconArrowUp />
          <p className={styles.votenumber}>112</p>
        </button>
      </div>
      <div className={styles.middlewrapper}>
        <h3 className={styles.title}>Add tags for solutions</h3>
        <p className={styles.description}>
          Easier to search for solutions based on a specific stack.
        </p>
        <button className={styles.category}>Enhancement</button>
      </div>
      <div className={styles.rightwrapper}>
        <IconComments />
        <p className={styles.commentcount}>2</p>
      </div>
    </div>
  );
}

export default Suggestion;
