import styles from './searchBar.module.scss';

export const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div className={styles.searchContainer}>
    <label htmlFor='search' className={styles.textSearchContainer}>
      Поиск по имени:
    </label>
    <input
      id='search'
      type='text'
      value={searchTerm}
      onChange={onSearchChange}
      placeholder='Введите имя персонажа'
      className={styles.searchInput}
    />
  </div>
);
