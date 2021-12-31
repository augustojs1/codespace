import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function LoadMoreButton() {
  return (
    //
    <button type="button" className={styles.loadButton}>
      Load more posts
    </button>
  );
}
