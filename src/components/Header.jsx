import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({ navItems = [] }) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Nakama<span>Trade</span>
      </Link>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`${styles.navItem} ${item.active ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
