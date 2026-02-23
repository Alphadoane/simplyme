import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" style={{
            background: 'var(--bg-tertiary)',
            padding: '4rem 0 2rem 0',
            borderTop: '1px solid var(--border-color)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    marginBottom: '4rem',
                    alignItems: 'start'
                }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's Build the <span className="gradient-text">Future of Systems.</span></h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Whether you're looking for a backend engineer, a systems designer, or just want to talk architecture,
                            feel free to reach out.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="#" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>LinkedIn</a>
                            <a href="https://github.com/Alphadoane" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>GitHub</a>
                            <a href="mailto:alphadoane@gmail.com" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Email</a>
                        </div>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Name" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border-color)',
                                padding: '0.8rem',
                                borderRadius: '0.5rem',
                                color: 'white',
                                outline: 'none'
                            }} />
                            <input type="email" placeholder="Email" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border-color)',
                                padding: '0.8rem',
                                borderRadius: '0.5rem',
                                color: 'white',
                                outline: 'none'
                            }} />
                            <textarea placeholder="Message" rows="4" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border-color)',
                                padding: '0.8rem',
                                borderRadius: '0.5rem',
                                color: 'white',
                                outline: 'none',
                                resize: 'none'
                            }}></textarea>
                            <button className="btn btn-primary" style={{ justifyContent: 'center' }}>Send Message</button>
                        </form>
                    </div>
                </div>
                <div style={{
                    textAlign: 'center',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-color)',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    <p>© {new Date().getFullYear()} Doane Wellingtone. Focused on building reliable, scalable, and intelligent software systems.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
