import styles from './itemsPerPageSelector.module.scss';

export const ItemsPerPageSelector = ({ itemsPerPage, onItemsPerPageChange }) => (
  <div className={styles.itemsPerPage}>
    <label htmlFor='itemsPerPage'>Количество отображения: </label>
    <select
      id='itemsPerPage'
      value={itemsPerPage}
      onChange={onItemsPerPageChange}
    >
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
      <option value={25}>25</option>
      <option value={30}>30</option>
    </select>
  </div>
);
