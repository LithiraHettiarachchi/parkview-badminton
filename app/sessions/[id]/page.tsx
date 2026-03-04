"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockSessions } from '@/data/mockSessions';
import styles from './page.module.css';

export default function SessionDetailPage() {
    const params = useParams();
    const router = useRouter();
    const sessionId = params.id as string;

    const session = mockSessions.find(s => s.id === sessionId);

    if (!session) {
        return (
            <>
                <Navbar />
                <main className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.notFound}>
                            <h1>Session Not Found</h1>
                            <p>The session you're looking for doesn't exist.</p>
                            <button
                                onClick={() => router.push('/sessions')}
                                className={styles.backBtn}
                            >
                                ← Back to Sessions
                            </button>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const availableSlots = session.maxAttendees - session.currentAttendees;
    const percentageFull = (session.currentAttendees / session.maxAttendees) * 100;

    const handleBookNow = () => {
        router.push('/contact');
    };

    return (
        <>
            <Navbar />

            <main className={styles.main}>
                {/* Hero Image Section */}
                <section className={styles.hero}>
                    {session.imageUrl ? (
                        <div className={styles.heroImage}>
                            <Image
                                src={session.imageUrl}
                                alt={session.title || `${session.day} session`}
                                fill
                                className={styles.image}
                                priority
                            />
                            <div className={styles.overlay} />
                        </div>
                    ) : (
                        <div className={styles.heroPlaceholder}>
                            <span className={styles.heroIcon}>🏸</span>
                        </div>
                    )}

                    <div className={styles.heroContent}>
                        <div className={styles.badge}>{session.day}</div>
                        <h1 className={styles.heroTitle}>
                            {session.title || `${session.day} Badminton Session`}
                        </h1>
                    </div>
                </section>

                {/* Session Details */}
                <section className={styles.detailsSection}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            {/* Main Content */}
                            <div className={styles.mainContent}>
                                <div className={styles.section}>
                                    <h2 className={styles.sectionTitle}>About This Session</h2>
                                    <p className={styles.description}>
                                        {session.description || 'Join us for an exciting badminton session!'}
                                    </p>
                                    <p className={styles.description}>
                                        Day: {session.day} | Time: {session.time} | Duration: {session.duration || '2 hours'} | Location: {session.location} | Level: {session.level || 'Intermediate'} | Courts: {session.courts} courts available
                                    </p>
                                </div>

                                {session.includes && session.includes.length > 0 && (
                                    <div className={styles.section}>
                                        <h2 className={styles.sectionTitle}>What's Included</h2>
                                        <ul className={styles.includesList}>
                                            {session.includes.map((item, index) => (
                                                <li key={index} className={styles.includesItem}>
                                                    <span className={styles.checkIcon}>✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className={styles.sidebar}>
                                <div className={styles.bookingCard}>
                                    <div className={styles.priceSection}>
                                        <div className={styles.price}>£{session.price.toFixed(2)}</div>
                                        <div className={styles.priceLabel}>per session</div>
                                    </div>

                                    <div className={styles.availabilitySection}>
                                        <div className={styles.availabilityHeader}>
                                            <span className={styles.availabilityLabel}>Availability</span>
                                            <span className={styles.availabilityCount}>
                                                {session.currentAttendees}/{session.maxAttendees}
                                            </span>
                                        </div>
                                        <div className={styles.progressBar}>
                                            <div
                                                className={styles.progressBarFill}
                                                style={{ width: `${percentageFull}%` }}
                                            />
                                        </div>
                                        <div className={styles.slotsInfo}>
                                            {availableSlots > 0
                                                ? `${availableSlots} ${availableSlots === 1 ? 'slot' : 'slots'} remaining`
                                                : 'Fully booked'}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleBookNow}
                                        className={styles.bookBtn}
                                    >
                                        Book Now
                                    </button>

                                    <div className={styles.contactNote}>
                                        Clicking "Book Now" will take you to our contact page where you can get in touch to reserve your spot.
                                    </div>
                                </div>

                                <button
                                    onClick={() => router.push('/sessions')}
                                    className={styles.backLink}
                                >
                                    ← Back to all sessions
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
