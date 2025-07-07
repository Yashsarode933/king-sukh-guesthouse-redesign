// components/Navbar.js
'use client';

import Image from 'next/image';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import styles from './Navbar.module.css';

const Navbar = () => {
  // Your WhatsApp number (replace with the actual number)
  const whatsappNumber = "919007062180";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=I'd%20like%20to%20book%20a%20room`;

  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src="/assets/Logo2.png" alt="King Sukh Guest House Logo" width={100} height={60} />
      </div>

      <nav>
        <ul className={styles.navList}>
          {/* These are now react-scroll Links */}
          <li className={styles.navLink}><Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
          <li className={styles.navLink}><Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
          <li className={styles.navLink}><Link to="rooms" spy={true} smooth={true} offset={-70} duration={500}>Rooms</Link></li>
          <li className={styles.navLink}><Link to="gallery" spy={true} smooth={true} offset={-70} duration={500}>Gallery</Link></li>
          <li className={styles.navLink}><Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
          <li>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className={styles.contactButton}>Book on WhatsApp</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;