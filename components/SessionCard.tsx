"use client";

import { Session } from '@/lib/types';
import styles from './SessionCard.module.css';

interface SessionCardProps {
    session: Session;
    onBook: (session: Session) => void;
}

export default function SessionCard({ session, onBook }: SessionCardProps) {
    const availabilityPercentage = (session.currentAttendees / session.maxAttendees) * 100;

    let statusClass = styles.statusAvailable;
    let statusText = 'Available';
    let statusBadge = '✓';

    if (availabilityPercentage >= 100) {
        statusClass = styles.statusFull;
        statusText = 'Full';
        statusBadge = '✕';
    } else if (availabilityPercentage >= 75) {
        statusClass = styles.statusLimited;
        statusText = 'Limited';
        statusBadge = '!';
    }

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.day}>{session.day}</h3>
                    <p className={styles.time}>🕐 {session.time}</p>
                </div>
                <div className={`${styles.statusBadge} ${statusClass}`}>
                    <span className={styles.statusIcon}>{statusBadge}</span>
                    <span>{statusText}</span>
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <span className={styles.icon}>📍</span>
                    <span>{session.location}</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.icon}>🏸</span>
                    <span>{session.courts} Courts</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.icon}>👥</span>
                    <span>{session.currentAttendees}/{session.maxAttendees} Players</span>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.icon}>💷</span>
                    <span>£{session.price.toFixed(2)}</span>
                </div>
            </div>

            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{
                        width: `${Math.min(availabilityPercentage, 100)}%`,
                        background: availabilityPercentage >= 100
                            ? 'var(--color-error)'
                            : availabilityPercentage >= 75
                                ? 'var(--color-warning)'
                                : 'var(--color-success)'
                    }}
                />
            </div>

            <button
                className={`${styles.bookButton} ${!session.available ? styles.bookButtonDisabled : ''}`}
                onClick={() => onBook(session)}
                disabled={!session.available}
            >
                {session.available ? 'Book Session' : 'Join Waitlist'}
            </button>
        </div>
    );
}
