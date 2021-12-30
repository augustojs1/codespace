/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Link from 'next/link';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>
    </header>
  );
}
