"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';
import { Session } from '@/lib/types';
import { mockSessions } from '@/data/mockSessions';
import styles from './page.module.css';

export default function Home() {
    // Show only first 3 sessions
    const [sessions] = useState<Session[]>(mockSessions.slice(0, 3));
    const [loading] = useState(false);
    const router = useRouter();

    const handleBookSession = () => {
        router.push('/contact');
    };

    return (
        <>
            <Navbar />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <h1 className={styles.heroTitle}>
                                Welcome to <span className={styles.highlight}>Parkview Badminton Club</span>
                            </h1>
                            <p className={styles.heroSubtitle}>
                                A long-established, sociable group who enjoy badminton at an intermediate level.
                                We're open to improvers who are willing and ready to learn.
                            </p>
                            <div className={styles.heroButtons}>
                                <a href="#sessions" className={styles.btnPrimary}>
                                    Book a Session
                                </a>
                                <a href="/contact" className={styles.btnSecondary}>
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className={styles.heroImage}>
                            <div className={styles.heroImagePlaceholder}>🏸</div>
                        </div>
                    </div>
                </section>

                {/* Sessions Section */}
                <section id="sessions" className={styles.sessions}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Upcoming Sessions</h2>
                        <p className={styles.sectionSubtitle}>
                            We play Sundays, Tuesdays, and Thursdays with four courts
                        </p>
                    </div>

                    {loading ? (
                        <div className={styles.loading}>
                            <div className="spinner"></div>
                            <p>Loading sessions...</p>
                        </div>
                    ) : sessions.length > 0 ? (
                        <div className={styles.sessionsGrid}>
                            {sessions.map(session => (
                                <SessionCard
                                    key={session.id}
                                    session={session}
                                    onBook={handleBookSession}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noSessions}>
                            <p>No sessions available at the moment. Please check back later!</p>
                        </div>
                    )}
                </section>

                {/* About Section */}
                <section id="about" className={styles.about}>
                    <div className={styles.aboutContent}>
                        <h2 className={styles.sectionTitle}>About Our Club</h2>
                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutCard}>
                                <div className={styles.aboutIcon}>🏸</div>
                                <h3>Intermediate Level</h3>
                                <p>We welcome players at an intermediate level and improvers ready to learn</p>
                            </div>
                            <div className={styles.aboutCard}>
                                <div className={styles.aboutIcon}>🎓</div>
                                <h3>In-House Coaches</h3>
                                <p>We have dedicated coaches who run training sessions when time allows</p>
                            </div>
                            <div className={styles.aboutCard}>
                                <div className={styles.aboutIcon}>👥</div>
                                <h3>Friendly Community</h3>
                                <p>A sociable group focused on enjoying badminton with like-minded enthusiasts</p>
                            </div>
                            <div className={styles.aboutCard}>
                                <div className={styles.aboutIcon}>🎯</div>
                                <h3>Fair Play</h3>
                                <p>Limited attendees ensure everyone gets a fair number of games on four courts</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
