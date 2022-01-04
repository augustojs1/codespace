/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <Link href="/">
      <header className={styles.headerContainer}>
        <img src="/images/logo.png" alt="logo" />
      </header>
    </Link>
  );
}
