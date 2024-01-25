'use client';

import styles from './page.module.scss';
import React from 'react';

import Logo from '@/components/Logo';
import CategoryGrid from '@/components/CategoryGrid';
import Roadmap from '@/components/Roadmap';
import TopBar from '@/components/TopBar';
import Suggestion from '@/components/Suggestion';

import useSWR from 'swr';

import { type Feedback } from '../../db/schema';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type State = {
  category: 'all' | 'ui' | 'ux' | 'enhancement' | 'bug' | 'feature';
  sortby:
    | 'DescByUpvotes'
    | 'AscByUpvotes'
    | 'DescByComments'
    | 'AscByComments';
};

export type { State };

const initialState: State = {
  category: 'all',
  sortby: 'DescByUpvotes',
};

let initialArray: Feedback[];

export default function Home() {
  const { data, isLoading } = useSWR<Feedback[], Error>(
    '/api/feedback',
    fetcher,
    {
      onSuccess: (data) => {
        initialArray = data.filter(
          (feedback: Feedback) => feedback.status === 'suggestion'
        );
        setSuggestionArray(initialArray);
      },
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // console.log(initialArray);

  const [state, setState] = React.useState(initialState);
  const [suggestionArray, setSuggestionArray] =
    React.useState(initialArray);

  // console.log(initialArray);
  // console.log(suggestionArray);

  let plannedCount = data?.filter(
    (feedback: Feedback) => feedback.status === 'planned'
  ).length;
  let inprogressCount = data?.filter(
    (feedback: Feedback) => feedback.status === 'in-progress'
  ).length;
  let liveCount = data?.filter(
    (feedback: Feedback) => feedback.status === 'live'
  ).length;
  let suggestionCount = data?.filter(
    (feedback: Feedback) => feedback.status === 'suggestion'
  ).length;

  const handleCategory = (
    category: 'all' | 'ui' | 'ux' | 'enhancement' | 'bug' | 'feature'
  ) => {
    let nextState: State = { ...state, category: category };
    setState(nextState);
    handleArray(nextState);
  };

  const handleSortBy = (
    sortby:
      | 'DescByUpvotes'
      | 'AscByUpvotes'
      | 'DescByComments'
      | 'AscByComments'
  ) => {
    let nextState: State = { ...state, sortby: sortby };
    setState(nextState);
    handleArray(nextState);
  };

  const handleArray = (currentState: State) => {
    // e.g.  state = {category: 'all', sortby: 'DescByUpvotes'}

    switch (currentState.sortby) {
      case 'DescByUpvotes':
        if (initialArray) {
          if (currentState.category === 'all') {
            setSuggestionArray(
              [...initialArray].sort((a, b) => b.upvotes - a.upvotes)
            );
            break;
          }
          let nextArrayDescByUpvotes: Feedback[] = initialArray
            .filter(
              (feedback) =>
                feedback.category === currentState.category
            )
            .sort((a, b) => b.upvotes - a.upvotes);
          setSuggestionArray(nextArrayDescByUpvotes);
        }
        break;

      case 'AscByUpvotes':
        if (initialArray) {
          if (currentState.category === 'all') {
            setSuggestionArray(
              [...initialArray].sort((a, b) => a.upvotes - b.upvotes)
            );
            break;
          }
          let nextArrayAscByUpvotes: Feedback[] = initialArray
            .filter(
              (feedback) =>
                feedback.category === currentState.category
            )
            .sort((a, b) => a.upvotes - b.upvotes);
          setSuggestionArray(nextArrayAscByUpvotes);
        }
        break;

      case 'DescByComments':
        if (initialArray) {
          if (currentState.category === 'all') {
            setSuggestionArray(
              [...initialArray].sort(
                (a, b) => b.commentCount - a.commentCount
              )
            );
            break;
          }
          let nextArrayDescByComments: Feedback[] = initialArray
            .filter(
              (feedback) =>
                feedback.category === currentState.category
            )
            .sort((a, b) => b.commentCount - a.commentCount);
          setSuggestionArray(nextArrayDescByComments);
        }
        break;

      case 'AscByComments':
        if (initialArray) {
          if (currentState.category === 'all') {
            setSuggestionArray(
              [...initialArray].sort(
                (a, b) => a.commentCount - b.commentCount
              )
            );
            break;
          }
          let nextArrayAscByComments: Feedback[] = initialArray
            .filter(
              (feedback) =>
                feedback.category === currentState.category
            )
            .sort((a, b) => a.commentCount - b.commentCount);
          setSuggestionArray(nextArrayAscByComments);
        }
        break;
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.side}>
        <Logo />
        <CategoryGrid state={state} handleCategory={handleCategory} />
        <Roadmap
          plannedCount={plannedCount}
          inprogressCount={inprogressCount}
          liveCount={liveCount}
        />
      </div>

      <div className={styles.main}>
        <TopBar
          suggestionCount={suggestionCount}
          handleSortBy={handleSortBy}
        />

        {suggestionArray?.length !== 0 &&
          suggestionArray?.map((suggestion) => (
            <Suggestion
              key={suggestion.feedbackId}
              id={suggestion.feedbackId}
              upvotes={suggestion.upvotes}
              title={suggestion.title}
              description={suggestion.description}
              category={suggestion.category}
              commentCount={suggestion.commentCount}
            />
          ))}
      </div>
    </main>
  );
}
