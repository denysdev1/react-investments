import styles from './Header.module.css'

export const Header = ({ logo }) => (
  <header className={styles.header}>
    <img src={logo} alt="logo" />
    <h1>Investment Calculator</h1>
  </header>
);
