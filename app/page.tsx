"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SessionCard from '@/components/SessionCard';
import BookingModal from '@/components/BookingModal';
import { Session } from '@/lib/types';
import { fetchSessions, createBooking, checkAvailability } from '@/lib/dashify';
import styles from './page.module.css';

export default function Home() {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedSession, setSelectedSession] = useState<Session | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadSessions();
    }, []);

    const loadSessions = async () => {
        setLoading(true);
        const data = await fetchSessions();
        setSessions(data);
        setLoading(false);
    };

    const handleBookSession = (session: Session) => {
        setSelectedSession(session);
        setShowModal(true);
    };

    const handleConfirmBooking = async (userData: { name: string, email: string, phone: string }) => {
        if (!selectedSession) return;

        try {
            // Check availability one more time
            const availability = await checkAvailability(selectedSession.id);

            if (availability > 0) {
                // Create booking in Dashify
                const result = await createBooking(
                    selectedSession.id,
                    userData.email, // Using email as userId for now
                    userData.name,
                    userData.email
                );

                if (result.success) {
                    alert(`✅ Booking confirmed for ${selectedSession.day}! You'll receive a confirmation email shortly.`);
                    setShowModal(false);
                    loadSessions(); // Refresh sessions
                } else {
                    alert('❌ Booking failed: ' + (result.error || 'Unknown error'));
                }
            } else {
                // Add to waitlist
                alert(`Session is full. You've been added to the waitlist for ${selectedSession.day}.`);
                setShowModal(false);
            }
        } catch (error) {
            console.error('Booking error:', error);
            alert('❌ An error occurred during booking. Please try again.');
        }
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

            {showModal && (
                <BookingModal
                    session={selectedSession}
                    onClose={() => setShowModal(false)}
                    onConfirm={handleConfirmBooking}
                />
            )}
        </>
    );
}
