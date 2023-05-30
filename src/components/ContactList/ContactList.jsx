import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactItem
            id={contact.id}
            name={contact.name}
            number={contact.number}
            key={contact.id}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>Missing contacts</p>
      )}
    </ul>
  );
}
export default ContactList;
