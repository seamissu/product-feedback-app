'use client';

import * as React from 'react';
import * as Ariakit from '@ariakit/react';
import styles from './Menu.module.scss';

export default function Menu({
  handleSortBy,
}: {
  handleSortBy: (
    sortby:
      | 'DescByUpvotes'
      | 'AscByUpvotes'
      | 'DescByComments'
      | 'AscByComments'
  ) => void;
}) {
  return (
    <Ariakit.MenuProvider>
      <Ariakit.MenuButton className={styles.button}>
        Sort By
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <Ariakit.Menu gutter={8} className={styles.menu}>
        <Ariakit.MenuItem
          className={styles['menu-item']}
          onClick={(event) => {
            event.preventDefault();
            handleSortBy('DescByUpvotes');
          }}
        >
          Most Upvotes
        </Ariakit.MenuItem>
        <Ariakit.MenuItem
          className={styles['menu-item']}
          onClick={(event) => {
            event.preventDefault();
            handleSortBy('AscByUpvotes');
          }}
        >
          Least Upvotes
        </Ariakit.MenuItem>
        <Ariakit.MenuItem
          className={styles['menu-item']}
          onClick={(event) => {
            event.preventDefault();
            handleSortBy('DescByComments');
          }}
        >
          Most Comments
        </Ariakit.MenuItem>
        <Ariakit.MenuItem
          className={styles['menu-item']}
          onClick={(event) => {
            event.preventDefault();
            handleSortBy('AscByComments');
          }}
        >
          Least Comments
        </Ariakit.MenuItem>
      </Ariakit.Menu>
    </Ariakit.MenuProvider>
  );
}
