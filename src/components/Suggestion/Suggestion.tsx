import * as React from 'react';
import styles from './Suggestion.module.scss';

import IconArrowUp from '../IconArrowUp';
import IconComments from '../IconComments';

function Suggestion({
  upvotes,
  title,
  description,
  category,
  commentCount,
  id,
}: {
  upvotes: number;
  title: string;
  description: string;
  category: string;
  commentCount: number;
  id: string;
}) {
  return (
    <div className={styles.wrapper}>
      <div>
        <button className={styles.upvote}>
          <IconArrowUp />
          <p className={styles.votenumber}>{upvotes}</p>
        </button>
      </div>
      <div className={styles.middlewrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.category}>{category}</button>
      </div>
      <div className={styles.rightwrapper}>
        <IconComments />
        <p className={styles.commentcount}>{commentCount}</p>
      </div>
    </div>
  );
}

export default Suggestion;
