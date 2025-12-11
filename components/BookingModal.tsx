"use client";

import { useState } from 'react';
import { Session } from '@/lib/types';
import styles from './BookingModal.module.css';

interface BookingModalProps {
    session: Session | null;
    onClose: () => void;
    onConfirm: (userData: { name: string, email: string, phone: string }) => void;
}

export default function BookingModal({ session, onClose, onConfirm }: BookingModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!session) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await onConfirm({ name, email, phone });

        setIsSubmitting(false);
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {session.available ? 'Book Session' : 'Join Waitlist'}
                    </h2>
                    <p className={styles.subtitle}>
                        {session.day} at {session.time}
                    </p>
                </div>

                <div className={styles.sessionInfo}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Location:</span>
                        <span className={styles.infoValue}>{session.location}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Courts:</span>
                        <span className={styles.infoValue}>{session.courts} courts</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Price:</span>
                        <span className={styles.infoValue}>£{session.price.toFixed(2)}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Available:</span>
                        <span className={styles.infoValue}>
                            {session.currentAttendees}/{session.maxAttendees} players
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email *</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            className={styles.input}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+44 7700 900000"
                        />
                    </div>

                    <div className={styles.notice}>
                        <p>💳 <strong>Payment:</strong> Payment will be processed separately via Stripe after booking confirmation.</p>
                    </div>

                    <div className={styles.actions}>
                        <button
                            type="button"
                            className={styles.btnCancel}
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={styles.btnConfirm}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Processing...' : session.available ? 'Confirm Booking' : 'Join Waitlist'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
