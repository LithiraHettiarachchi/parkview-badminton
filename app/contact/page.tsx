"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.subtitle}>
                            Have questions or want to join our club? We'd love to hear from you!
                        </p>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.contactCard}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>✉️</span>
                            </div>
                            <h2 className={styles.cardTitle}>Email Us</h2>
                            <p className={styles.cardText}>
                                For bookings, inquiries, or general information
                            </p>
                            <a
                                href="mailto:parkviewbclub@gmail.com"
                                className={styles.contactLink}
                            >
                                parkviewbclub@gmail.com
                            </a>
                        </div>

                        <div className={styles.contactCard}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>📱</span>
                            </div>
                            <h2 className={styles.cardTitle}>Follow Us</h2>
                            <p className={styles.cardText}>
                                Stay updated with our latest news and events
                            </p>
                            <div className={styles.socialLinks}>
                                <a
                                    href="https://www.facebook.com/share/1C7Dngdu9b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    <span className={styles.socialIcon}>📘</span>
                                    Facebook
                                </a>
                                <a
                                    href="https://instagram.com/parkviewbadminton"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    <span className={styles.socialIcon}>📷</span>
                                    Instagram
                                </a>
                                <a
                                    href="https://twitter.com/parkviewbadminton"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    <span className={styles.socialIcon}>🐦</span>
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h3 className={styles.infoTitle}>Club Information</h3>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <strong>📍 Location:</strong>
                                <p>London, United Kingdom</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>🕐 Session Times:</strong>
                                <div>
                                    <p style={{ margin: 0 }}>Sunday: 10:00 AM</p>
                                    <p style={{ margin: 0 }}>Tuesday: 7:00 PM</p>
                                    <p style={{ margin: 0 }}>Thursday: 7:00 PM</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>🏸 Level:</strong>
                                <p>Intermediate players and keen improvers welcome</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>👥 Capacity:</strong>
                                <p>Limited to ensure everyone gets fair court time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
