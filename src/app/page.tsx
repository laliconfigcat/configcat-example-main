'use client';

import Image from "next/image";
import styles from "./page.module.css";

import { useFeatureFlag } from './_components/useFeatureFlag';

export default function Home() {
  const visible = useFeatureFlag('someflag');
  return (
    <main className={styles.main}>
      {visible && (
        <div>Visible</div>
      )}

      {visible && (
        <div>Not visible</div>
      )}

    </main>
  );
}
