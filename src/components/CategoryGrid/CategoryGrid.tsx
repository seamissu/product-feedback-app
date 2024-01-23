'use client';

import * as React from 'react';
import styles from './CategoryGrid.module.scss';
import { clsx } from 'clsx';

function CategoryGrid({ category }: { category: string }) {
  const [firstArray, setFirstArray] = React.useState([]);

  // const buttonClassName = `${styles.category} ${styles[category]}`;

  function handleCategory() {
    if (category !== 'all') {
      setFirstArray((firstArray) =>
        firstArray.filter(
          (feedback) => feedback[category] === category
        )
      );
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperline}>
        <button
          onClick={handleCategory}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'all',
          })}
        >
          All
        </button>
        <button
          onClick={handleCategory}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'ui',
          })}
        >
          UI
        </button>
        <button
          onClick={handleCategory}
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
          onClick={handleCategory}
          className={clsx({
            [styles.category]: true,
            [styles.all]: category === 'enhancement',
          })}
        >
          Enhancement
        </button>
        <button
          onClick={handleCategory}
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
          onClick={handleCategory}
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
