// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Column 1: About */}
        <div className={styles.footerColumn}>
          <Image src="/assets/logo.png" alt="King Sukh Logo" width={100} height={50} />
          <p>
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Rooms</Link></li>
            <li><Link href="/">Gallery</Link></li>
            <li><Link href="/">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className={styles.footerColumn}>
          <h3>Contact Us</h3>
          <p>Address: Beside Barsol Water Tank Baranti Village, Purulia West Bengal, India - 723159</p>
          <p>Email: kkghosh0099@gmail.com</p>
          <p>Phone: +91 9007062180</p>
        </div>

        {/* Column 4: Follow Us - NEW */}
        <div className={styles.footerColumn}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.subFooter}>
        <p>© {new Date().getFullYear()} King Sukh Guest House. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;