import styles from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
