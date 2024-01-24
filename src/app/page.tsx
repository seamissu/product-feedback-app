'use client';

import styles from './page.module.scss';

import Logo from '@/components/Logo';
import CategoryGrid from '@/components/CategoryGrid';
import Roadmap from '@/components/Roadmap';
import TopBar from '@/components/TopBar';
import Suggestion from '@/components/Suggestion';

import useSWR from 'swr';

import type { Feedback } from '../../db/schema';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, isLoading } = useSWR<Feedback[], Error>(
    '/api/feedback',
    fetcher
  );

  console.log(data);
  if (data) {
    console.log(data[0].upvotes);
    console.log(typeof data[0].upvotes);
  }

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
