import Image from 'next/image';
import styles from './page.module.scss';
import Logo from '@/components/Logo';
import CategoryGrid from '@/components/CategoryGrid';
import Roadmap from '@/components/Roadmap';
import TopBar from '@/components/TopBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Logo />
      <CategoryGrid category={'ui'} />
      <Roadmap />
    </main>
  );
}
