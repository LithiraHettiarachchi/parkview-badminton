"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🏸</span>
                    <span className={styles.logoText}>Parkview Badminton</span>
                </Link>

                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/sessions" className={styles.navLink}>Sessions</Link>
                    <Link href="/gallery" className={styles.navLink}>Gallery</Link>
                    <Link href="/discussions" className={styles.navLink}>Discussions</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                    <Link href="/sessions" className={`${styles.navLink} ${styles.btnCta}`}>
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
