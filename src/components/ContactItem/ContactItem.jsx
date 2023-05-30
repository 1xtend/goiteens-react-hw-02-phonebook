import styles from './ContactItem.module.css';

function ContactItem({ id, name, number, onDelete }) {
  return (
    <li id={id} className={styles.item}>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
export default ContactItem;
