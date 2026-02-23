import React, { useState } from 'react';

const Footer = () => {
    const [state, setState] = useState({
        submitting: false,
        succeeded: false,
        error: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState({ ...state, submitting: true });

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xzzbeovv", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitting: false, succeeded: true, error: null });
                form.reset();
            } else {
                const result = await response.json();
                setState({ submitting: false, succeeded: false, error: result.errors[0].message });
            }
        } catch (err) {
            setState({ submitting: false, succeeded: false, error: "Something went wrong. Please try again." });
        }
    };

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
                        {state.succeeded ? (
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Success!</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Your message has been sent. Doane will get back to you soon.</p>
                                <button
                                    onClick={() => setState({ ...state, succeeded: false })}
                                    className="btn btn-outline"
                                    style={{ marginTop: '1.5rem' }}
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <input name="name" type="text" placeholder="Name" required style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border-color)',
                                    padding: '0.8rem',
                                    borderRadius: '0.5rem',
                                    color: 'white',
                                    outline: 'none'
                                }} />
                                <input name="email" type="email" placeholder="Email" required style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border-color)',
                                    padding: '0.8rem',
                                    borderRadius: '0.5rem',
                                    color: 'white',
                                    outline: 'none'
                                }} />
                                <textarea name="message" placeholder="Message" rows="4" required style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border-color)',
                                    padding: '0.8rem',
                                    borderRadius: '0.5rem',
                                    color: 'white',
                                    outline: 'none',
                                    resize: 'none'
                                }}></textarea>
                                {state.error && <p style={{ color: '#ff4b4b', fontSize: '0.8rem' }}>{state.error}</p>}
                                <button
                                    disabled={state.submitting}
                                    className="btn btn-primary"
                                    style={{ justifyContent: 'center', opacity: state.submitting ? 0.7 : 1 }}
                                >
                                    {state.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
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
