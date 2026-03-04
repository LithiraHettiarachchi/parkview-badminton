import Link from 'next/link';
import Image from 'next/image';
import { Session } from '@/lib/types';
import styles from './SessionTile.module.css';

interface SessionTileProps {
    session: Session;
}

export default function SessionTile({ session }: SessionTileProps) {
    const availableSlots = session.maxAttendees - session.currentAttendees;
    const percentageFull = (session.currentAttendees / session.maxAttendees) * 100;

    return (
        <Link href={`/sessions/${session.id}`} className={styles.tile}>
            <div className={styles.imageContainer}>
                {session.imageUrl ? (
                    <Image
                        src={session.imageUrl}
                        alt={session.title || `${session.day} session`}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderIcon}>🏸</span>
                    </div>
                )}
                <div className={styles.badge}>
                    {session.day}
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>
                    {session.title || `${session.day} Badminton Session`}
                </h3>

                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <span className={styles.icon}>🕐</span>
                        <span>{session.time}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span className={styles.icon}>📍</span>
                        <span>{session.location}</span>
                    </div>
                    {session.level && (
                        <div className={styles.detailItem}>
                            <span className={styles.icon}>⭐</span>
                            <span>{session.level}</span>
                        </div>
                    )}
                </div>

                <div className={styles.footer}>
                    <div className={styles.price}>
                        <span className={styles.priceAmount}>£{session.price.toFixed(2)}</span>
                        <span className={styles.priceLabel}>per session</span>
                    </div>

                    <div className={styles.slots}>
                        <div className={styles.slotsBar}>
                            <div
                                className={styles.slotsBarFill}
                                style={{ width: `${percentageFull}%` }}
                            />
                        </div>
                        <span className={styles.slotsText}>
                            {availableSlots > 0
                                ? `${availableSlots} slots left`
                                : 'Fully booked'}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
