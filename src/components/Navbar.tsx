import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li><a href="#home" className={styles.link}>Home</a></li>
        <li><a href="#blog" className={styles.link}>Blog</a></li>
        <li><a href="#contact" className={styles.link}>Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
