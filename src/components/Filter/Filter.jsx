import styles from './Filter.module.css';

function Filter({ onChange }) {
  return (
    <div className={styles.search}>
      <label htmlFor="searchInput">Find contact by name</label>
      <input type="search" id="searchInput" onChange={onChange} />
    </div>
  );
}
export default Filter;
