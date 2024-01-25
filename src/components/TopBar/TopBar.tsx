import * as React from 'react';
import styles from './TopBar.module.scss';

import IconBulb from '../IconBulb';
import Menu from '../Menu';

function TopBar({
  suggestionCount,
  handleSortBy,
}: {
  suggestionCount: number | undefined;
  handleSortBy: (
    sortby:
      | 'DescByUpvotes'
      | 'AscByUpvotes'
      | 'DescByComments'
      | 'AscByComments'
  ) => void;
}) {
  return (
    <div className={styles.wrapper}>
      <IconBulb />
      <h3 className={styles.text}>
        <span>{suggestionCount}</span> Suggestions
      </h3>
      <Menu handleSortBy={handleSortBy} />
      <button className={styles.feedback}>+ Add Feedback</button>
    </div>
  );
}

export default TopBar;
