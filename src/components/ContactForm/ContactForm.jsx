import styles from './ContactForm.module.css';

function ContactForm({ onNameChange, onNumberChange, onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="nameInput"
        onChange={onNameChange}
      />

      <label htmlFor="numberInput">Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="numberInput"
        onChange={onNumberChange}
      />

      <button type="submit">Add contact</button>
    </form>
  );
}
export default ContactForm;
