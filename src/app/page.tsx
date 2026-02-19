import Image from 'next/image';
import styles from './page.module.css';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.tsx file.</h1>
          <p>
            Looking for checks?
            <br />
            <a href="/api/health" rel="noopener noreferrer">
              Api Health check
            </a>
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
