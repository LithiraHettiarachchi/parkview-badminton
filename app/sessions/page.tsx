"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SessionTile from '@/components/SessionTile';
import { mockSessions } from '@/data/mockSessions';
import styles from './page.module.css';

export default function SessionsPage() {
    const [filter, setFilter] = useState<'all' | 'Sunday' | 'Tuesday' | 'Thursday'>('all');

    const filteredSessions = filter === 'all'
        ? mockSessions
        : mockSessions.filter(session => session.day === filter);

    return (
        <>
            <Navbar />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>
                            Badminton <span className={styles.highlight}>Sessions</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Join our regular badminton sessions every Sunday, Tuesday, and Thursday.
                            Book your spot and play with our friendly community!
                        </p>
                    </div>
                </section>

                {/* Filter Section */}
                <section className={styles.filterSection}>
                    <div className={styles.container}>
                        <div className={styles.filters}>
                            <button
                                className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All Sessions
                            </button>
                            <button
                                className={`${styles.filterBtn} ${filter === 'Sunday' ? styles.filterBtnActive : ''}`}
                                onClick={() => setFilter('Sunday')}
                            >
                                Sunday
                            </button>
                            <button
                                className={`${styles.filterBtn} ${filter === 'Tuesday' ? styles.filterBtnActive : ''}`}
                                onClick={() => setFilter('Tuesday')}
                            >
                                Tuesday
                            </button>
                            <button
                                className={`${styles.filterBtn} ${filter === 'Thursday' ? styles.filterBtnActive : ''}`}
                                onClick={() => setFilter('Thursday')}
                            >
                                Thursday
                            </button>
                        </div>
                    </div>
                </section>

                {/* Sessions Grid */}
                <section className={styles.sessionsSection}>
                    <div className={styles.container}>
                        {filteredSessions.length > 0 ? (
                            <div className={styles.grid}>
                                {filteredSessions.map(session => (
                                    <SessionTile key={session.id} session={session} />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.noSessions}>
                                <p>No sessions available for the selected day.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
