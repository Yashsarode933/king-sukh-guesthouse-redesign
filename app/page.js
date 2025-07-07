// app/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

// Import ALL data
import { rooms } from '../data/roomData';
import { galleryImages } from '../data/galleryData';

// Import the lightbox
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


export default function Home() {
  const [index, setIndex] = useState(-1);

  const whatsappNumber = "919007062180";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=I'd%20like%20to%20book%20a%20room`;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <main className={styles.main}>
      {/* ===== HOME/HERO SECTION (id="home") ===== */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Royal Hospitality, Unforgettable Stays</h1>
          <p className={styles.heroSubtitle}>
            Discover a sanctuary of peace and comfort in the heart of Bolpur, Santiniketan.
          </p>
          <a href="#rooms" className={styles.heroButton}>Explore Our Rooms</a>
        </div>
      </section>

      {/* ===== ABOUT SECTION (id="about") - Renamed from "Welcome" ===== */}
      <section id="about" className={styles.welcomeSection}>
        <div className={styles.welcomeImage}>
          {/* Choose a welcoming image from your assets. A picture of the entrance or lobby is great. */}
          <Image src="/assets/Logo.png" alt="King Sukh Guest House Entrance" width={500} height={500} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <div className={styles.welcomeContent}>
          <h2 className={styles.sectionTitle}>Welcome to King Sukh</h2>
          <p className={styles.sectionText}>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis.
          </p>
          <p className={styles.sectionText}>
            Our commitment to excellence, attention to detail, and personalized service has made us a preferred destination for travelers seeking comfort, tranquility, and authentic local experiences.
          </p>
        </div>
      </section>

      {/* ===== ROOMS SECTION (id="rooms") ===== */}
      <section id="rooms" className={styles.roomsPageContainer}> {/* Note the new class name */}
        <header className={styles.roomsPageHeader}>
          <h1 className={styles.roomsPageTitle}>Our Accommodations</h1>
          <p className={styles.roomsPageSubtitle}>
            Choose from our selection of beautifully appointed rooms, each designed for your comfort.
          </p>
        </header>

        <main className={styles.roomsList}>
          {rooms.map(room => (
            <div key={room.id} className={styles.roomListing}>
              <div className={styles.roomImageContainer}>
                <Image src={room.image} alt={room.name} layout="fill" objectFit="cover" />
              </div>
              <div className={styles.roomDetails}>
                <h2 className={styles.roomName}>{room.name}</h2>
                <p className={styles.roomDescription}>{room.description}</p>
                <div className={styles.amenities}>
                  <h3>Amenities:</h3>
                  <ul>
                    {room.amenities.map(amenity => <li key={amenity}>{amenity}</li>)}
                  </ul>
                </div>
                <div className={styles.roomBooking}>
                  <p className={styles.roomPrice}>
                    ₹{room.price.toLocaleString('en-IN')} / night
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <button className={styles.bookNowButton}>Book Now</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>

      {/* ===== GALLERY SECTION (id="gallery") ===== */}
      <section id="gallery" className={styles.galleryPageContainer}> {/* Note the new class name */}
        <header className={styles.galleryPageHeader}>
          <h1 className={styles.galleryPageTitle}>Our Gallery</h1>
          <p className={styles.galleryPageSubtitle}>
            Explore the moments and memories captured at King Sukh Guest House.
          </p>
        </header>

        <main className={styles.fullGalleryGrid}>
          {galleryImages.map((image, i) => (
            <div
              key={image.id}
              className={styles.fullGalleryItem}
              onClick={() => setIndex(i)} // This uses the useState from the top of your component
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.fullGridImage}
              />
              <div className={styles.imageOverlay}>
                <span>View</span>
              </div>
            </div>
          ))}
        </main>
      </section>

      {/* ===== CONTACT SECTION (id="contact") ===== */}
      <section id="contact" className={styles.contactPageContainer}>
        <header className={styles.contactPageHeader}>
          <h1 className={styles.contactPageTitle}>Get In Touch</h1>
          <p className={styles.contactPageSubtitle}>
            We would love to hear from you. Please feel free to contact us with any questions or to make a reservation.
          </p>
        </header>

        <main className={styles.contactLayout}>
          {/* Column 1: Contact Info & Map */}
          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <h3>Our Address</h3>
              <p>Beside Barsol Water Tank Baranti Village, Purulia West Bengal, India - 723159</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Email Us</h3>
              <p>kkghosh0099@gmail.com</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Call Us</h3>
              <p>+91 9007062180</p>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className={styles.formColumn}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </main>
      </section>

      {/* The Lightbox component for the gallery */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={galleryImages.map(img => ({ src: img.src }))}
      />
    </main>
  )
}