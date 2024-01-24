import Image from 'next/image';
import styles from './page.module.scss';
import Logo from '@/components/Logo';
import CategoryGrid from '@/components/CategoryGrid';
import Roadmap from '@/components/Roadmap';
import TopBar from '@/components/TopBar';
import Suggestion from '@/components/Suggestion';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.side}>
        <Logo />
        <CategoryGrid category={'ui'} />
        <Roadmap />
      </div>

      <div className={styles.main}>
        <TopBar />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
      </div>
    </main>
  );
}
