import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Reliable, efficient delivery</h1>
      <h2 className={styles.subtitle}>Powered by Technology</h2>
      <p className={styles.description}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>
  );
}
