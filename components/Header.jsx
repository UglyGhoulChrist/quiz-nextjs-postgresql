import styles from '@/components/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className={styles.link}
        >
          Telegram
        </a>
      </nav>
    </header>
  )
}

export default Header
