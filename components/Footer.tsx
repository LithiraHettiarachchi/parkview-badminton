"use client";

export default function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(135deg, #212121 0%, #424242 100%)',
            color: 'white',
            padding: '3rem 1.5rem 2rem',
            marginTop: '4rem'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                            🏸 Parkview Badminton Club
                        </h3>
                        <p style={{ color: '#B0B0B0', lineHeight: '1.7' }}>
                            A long-established, sociable group enjoying badminton at an intermediate level.
                            Come play, learn, and enjoy the vibe!
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="/sessions" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Book Sessions</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="/gallery" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Gallery</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="/discussions" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Discussions</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="/contact" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Session Times</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#B0B0B0' }}>
                            <li style={{ marginBottom: '0.5rem' }}>📅 Sunday: 10:00 AM</li>
                            <li style={{ marginBottom: '0.5rem' }}>📅 Tuesday: 7:00 PM</li>
                            <li style={{ marginBottom: '0.5rem' }}>📅 Thursday: 7:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '1.5rem',
                    textAlign: 'center',
                    color: '#B0B0B0',
                    fontSize: '0.9375rem'
                }}>
                    <p suppressHydrationWarning>© {new Date().getFullYear()} Parkview Badminton Club. All rights reserved.</p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                        Built by <a href="https://aurbyn.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>Aurbyn</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
