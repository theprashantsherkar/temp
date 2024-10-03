import React from 'react';
import styles from './Navbar.module.css';  

const Navbar = () => {
  return (
    <nav className={styles.navbar}>  {/* Access CSS module class */}
      <div className={styles.navbarBrand}>Portfolio</div> {/* CSS module class */}
      <ul className={styles.navbarLinks}> {/* CSS module class */}
        <li><a href="#about" className={styles.navLink}>About</a></li> {/* Add link class */}
        <li><a href="#experience" className={styles.navLink}>Experience</a></li>
        <li><a href="#projects" className={styles.navLink}>Projects</a></li>
        <li><a href="#skills" className={styles.navLink}>Skills</a></li>
        <li><a href="#contact" className={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
