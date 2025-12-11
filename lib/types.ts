export type DayOfWeek = 'Sunday' | 'Tuesday' | 'Thursday';

export interface Session {
    id: string;
    day: DayOfWeek;
    time: string;
    location: string;
    courts: number;
    maxAttendees: number;
    currentAttendees: number;
    price: number;
    available: boolean;
    date?: string; // Specific date for the session
}

export interface Booking {
    id: string;
    userId: string;
    sessionId: string;
    userName: string;
    email: string;
    phone?: string;
    status: 'confirmed' | 'waitlist' | 'cancelled';
    paymentStatus: 'pending' | 'paid';
    bookedAt: Date;
}

export interface WaitlistEntry {
    id: number;
    sessionId: string;
    userId?: number;
    userName: string;
    email: string;
    phone?: string;
    position: number;
    notified: boolean;
    createdAt: Date;
}

export interface User {
    id: number;
    name: string;
    email: string;
    phone?: string;
    memberId?: string;
    createdAt: Date;
}

export interface DiscussionPost {
    id: number;
    userId: number;
    title: string;
    content: string;
    category: string;
    createdAt: Date;
    userName?: string;
}

export interface DiscussionReply {
    id: number;
    postId: number;
    userId: number;
    content: string;
    createdAt: Date;
    userName?: string;
}

export interface GalleryPhoto {
    id: number;
    url: string;
    thumbnailUrl?: string;
    caption?: string;
    uploadedBy?: number;
    eventName?: string;
    uploadedAt: Date;
}

// Dashify API Response types
export interface DashifyProduct {
    _id: string;
    name: string;
    description?: string;
    price: number;
    inventory: number;
    tags?: string[];
    metadata?: Record<string, any>;
}

export interface DashifyOrder {
    _id: string;
    productId: string;
    userId: string;
    quantity: number;
    status: string;
    createdAt: Date;
}

export interface DashifyResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}
