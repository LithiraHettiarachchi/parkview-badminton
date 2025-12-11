"use server";

import { DashifyProduct, DashifyResponse, DashifyOrder, Session } from './types';

const API_BASE_URL = 'https://www.api.dashify.aurbyn.com/api/v1';
const API_KEY = process.env.DASHIFY_API_KEY;

/**
 * Fetch all badminton sessions from Dashify products
 */
export async function fetchSessions(): Promise<Session[]> {
    try {
        if (!API_KEY) {
            console.warn('Dashify API Key not found');
            return [];
        }

        const res = await fetch(`${API_BASE_URL}/products`, {
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 } // Cache for 1 minute
        });

        if (!res.ok) {
            throw new Error(`API error: ${res.status}`);
        }

        const data: DashifyResponse<DashifyProduct[]> = await res.json();

        if (!data.success || !data.data) {
            return [];
        }

        // Filter products tagged as "badminton-session" and convert to Session type
        const sessions: Session[] = data.data
            .filter(product => product.tags?.includes('badminton-session'))
            .map(product => ({
                id: product._id,
                day: (product.metadata?.day || 'Sunday') as 'Sunday' | 'Tuesday' | 'Thursday',
                time: product.metadata?.time || '19:00',
                location: product.metadata?.location || 'Main Court',
                courts: product.metadata?.courts || 4,
                maxAttendees: product.inventory,
                currentAttendees: product.metadata?.currentAttendees || 0,
                price: product.price,
                available: product.inventory > 0,
                date: product.metadata?.date,
            }));

        return sessions;
    } catch (error) {
        console.error('Failed to fetch sessions:', error);
        return [];
    }
}

/**
 * Create a booking (order) in Dashify
 */
export async function createBooking(
    sessionId: string,
    userId: string,
    userName: string,
    email: string
): Promise<DashifyResponse<DashifyOrder>> {
    try {
        if (!API_KEY) {
            return { success: false, error: 'API key not configured' };
        }

        const res = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: sessionId,
                userId,
                quantity: 1,
                metadata: {
                    userName,
                    email,
                    type: 'badminton-booking'
                }
            }),
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Failed to create booking:', error);
        return { success: false, error: 'Failed to create booking' };
    }
}

/**
 * Check session availability
 */
export async function checkAvailability(sessionId: string): Promise<number> {
    try {
        if (!API_KEY) return 0;

        const res = await fetch(`${API_BASE_URL}/products/${sessionId}`, {
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) return 0;

        const data: DashifyResponse<DashifyProduct> = await res.json();
        return data.data?.inventory || 0;
    } catch (error) {
        console.error('Failed to check availability:', error);
        return 0;
    }
}

/**
 * Get user's bookings from Dashify
 */
export async function fetchUserBookings(userId: string): Promise<DashifyOrder[]> {
    try {
        if (!API_KEY) return [];

        const res = await fetch(`${API_BASE_URL}/orders?userId=${userId}`, {
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) return [];

        const data: DashifyResponse<DashifyOrder[]> = await res.json();
        return data.data || [];
    } catch (error) {
        console.error('Failed to fetch user bookings:', error);
        return [];
    }
}

/**
 * Cancel a booking
 */
export async function cancelBooking(orderId: string): Promise<DashifyResponse<any>> {
    try {
        if (!API_KEY) {
            return { success: false, error: 'API key not configured' };
        }

        const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Failed to cancel booking:', error);
        return { success: false, error: 'Failed to cancel booking' };
    }
}
