import * as React from 'react';
import styles from './Roadmap.module.scss';
import Link from 'next/link';

function Roadmap() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstwrapper}>
        <h3 className={styles.roadmap}>Roadmap</h3>
        <Link className={styles.viewlink} href="/">
          View
        </Link>
      </div>
      <div className={styles.linewrapper}>
        <div className={styles.pinkcircle}></div>
        <p className={styles.roadmaptext}>Planned</p>
        <p className={styles.roadmapcount}>2</p>
      </div>
      <div className={styles.linewrapper}>
        <div className={styles.purplecircle}></div>
        <p className={styles.roadmaptext}>{'In-Progress'}</p>
        <p className={styles.roadmapcount}>3</p>
      </div>
      <div className={styles.linewrapper}>
        <div className={styles.bluecircule}></div>
        <p className={styles.roadmaptext}>Live</p>
        <p className={styles.roadmapcount}>1</p>
      </div>
    </div>
  );
}

export default Roadmap;
