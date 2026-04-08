import React from 'react';

const Hero = () => {
    return (
        <section className="section-padding" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
        }}>
            <div className="container animate-fade-in">
                <div className="mobile-grid-1" style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div className="mobile-text-center">
                        <h2 style={{
                            color: 'var(--accent-primary)',
                            fontSize: '1.1rem',
                            letterSpacing: '0.2rem',
                            textTransform: 'uppercase',
                            marginBottom: '1rem'
                        }}>
                            Doane Wellingtone
                        </h2>
                        <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Fullstack Engineer building scalable <span className="gradient-text">Systems.</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2.5rem',
                            maxWidth: '600px'
                        }}>
                            I design and develop applications that solve real-world problems through clean architecture, efficient data flow, and reliable user experiences. <br /><br />
                            <strong>Focused on:</strong> System Design &bull; Backend Logic &bull; Performance Optimization
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="#projects" className="btn btn-primary">
                                View Projects
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            inset: '-20px',
                            border: '1px solid var(--accent-primary)',
                            borderRadius: '2rem',
                            opacity: 0.2,
                            zIndex: 0
                        }}></div>
                        <img
                            src="/Doane2.jpeg"
                            alt="Doane Wellingtone"
                            style={{
                                width: '100%',
                                borderRadius: '2rem',
                                zIndex: 1,
                                position: 'relative',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
