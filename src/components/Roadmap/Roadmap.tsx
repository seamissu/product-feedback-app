import * as React from 'react';
import styles from './Roadmap.module.scss';
import Link from 'next/link';

function Roadmap({
  plannedCount,
  inprogressCount,
  liveCount,
}: {
  plannedCount: number | undefined;
  inprogressCount: number | undefined;
  liveCount: number | undefined;
}) {
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
        <p className={styles.roadmapcount}>{plannedCount}</p>
      </div>
      <div className={styles.linewrapper}>
        <div className={styles.purplecircle}></div>
        <p className={styles.roadmaptext}>{'In-Progress'}</p>
        <p className={styles.roadmapcount}>{inprogressCount}</p>
      </div>
      <div className={styles.linewrapper}>
        <div className={styles.bluecircule}></div>
        <p className={styles.roadmaptext}>Live</p>
        <p className={styles.roadmapcount}>{liveCount}</p>
      </div>
    </div>
  );
}

export default Roadmap;
