'use client';

import * as React from 'react';
import styles from './CategoryGrid.module.scss';
import { clsx } from 'clsx';

import type { State } from '@/app/page';

function CategoryGrid({
  state,
  handleCategory,
}: {
  state: State;
  handleCategory: (
    category: 'all' | 'ui' | 'ux' | 'enhancement' | 'bug' | 'feature'
  ) => void;
}) {
  // const [firstArray, setFirstArray] = React.useState([]);

  // function handleCategory() {
  //   if (category !== 'all') {
  //     setFirstArray((firstArray) =>
  //       firstArray.filter(
  //         (feedback) => feedback[category] === category
  //       )
  //     );
  //   }
  // }

  const category = state.category;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperline}>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleCategory('all');
          }}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'all',
          })}
        >
          All
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleCategory('ui');
          }}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'ui',
          })}
        >
          UI
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleCategory('ux');
          }}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'ux',
          })}
        >
          UX
        </button>
      </div>
      <div className={styles.wrapperline}>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleCategory('enhancement');
          }}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'enhancement',
          })}
        >
          Enhancement
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleCategory('bug');
          }}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'bug',
          })}
        >
          Bug
        </button>
      </div>
      <div className={styles.wrapperline}>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleCategory('feature');
          }}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'feature',
          })}
        >
          Feature
        </button>
      </div>
    </div>
  );
}

export default CategoryGrid;
