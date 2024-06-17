'use client';

import styles from "./page.module.css";

import { useFeatureFlag } from './_components/useFeatureFlag';

export const fetchCache = 'force-no-store';

export default function Home() {
  const visible = useFeatureFlag('isAwesomeFeatureEnabled');
  return (
    <main className={styles.main}>
      {visible && (
        <div>Visible</div>
      )}

      {!visible && (
        <div>Not visible</div>
      )}

    </main>
  );
}
