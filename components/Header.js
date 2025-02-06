import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header({ language, toggleLanguage, translations }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button 
          className={styles.languageToggle}
          onClick={toggleLanguage}
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          {Object.entries(translations.nav).map(([key, value]) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={styles.navItem}
            >
              {value}
            </button>
          ))}
        </div>

        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={styles.menuIcon}></span>
        </button>
      </nav>
    </header>
  );
} 