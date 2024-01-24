'use client';

import * as React from 'react';
import * as Ariakit from '@ariakit/react';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <Ariakit.MenuProvider>
      <Ariakit.MenuButton className={styles.button}>
        Sort By
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <Ariakit.Menu gutter={8} className={styles.menu}>
        <Ariakit.MenuItem
          className={styles['menu-item']}
          onClick={() => alert('Edit')}
        >
          Most Upvotes
        </Ariakit.MenuItem>
        <Ariakit.MenuItem className={styles['menu-item']}>
          Least Upvotes
        </Ariakit.MenuItem>
        <Ariakit.MenuItem className={styles['menu-item']}>
          Most Comments
        </Ariakit.MenuItem>
        <Ariakit.MenuItem className={styles['menu-item']}>
          Least Comments
        </Ariakit.MenuItem>
      </Ariakit.Menu>
    </Ariakit.MenuProvider>
  );
}
