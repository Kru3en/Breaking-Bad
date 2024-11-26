import styles from './loadMoreButton.module.scss';

export const LoadMoreButton = ({ onLoadMore }) => (
  <div className={styles.loadMore}>
    <button onClick={onLoadMore}>Load More</button>
  </div>
);
