import React, { FC } from 'react';

const About: FC = () => {
    const points = [
        { title: "Clean Architecture", desc: "Clean, maintainable code with a strong focus on structured system design." },
        { title: "Performance", desc: "Prioritizing performance, reliability, and clear separation of concerns in every project." },
        { title: "Fullstack Systems", desc: "Building systems where frontend UI and backend logic work seamlessly together." }
    ];

    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="mobile-text-center">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Building Systems — <span className="gradient-text">Not Just Interfaces.</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            I am a software engineer focused on building systems. My approach to development is rooted in understanding problems deeply, designing efficient architectures, and delivering solutions that scale.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {points.map((point, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '4px',
                                        height: 'auto',
                                        background: 'var(--accent-gradient)',
                                        borderRadius: '2px'
                                    }}></div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{point.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20%',
                            right: '-20%',
                            width: '60%',
                            height: '60%',
                            background: 'var(--accent-primary)',
                            filter: 'blur(100px)',
                            opacity: 0.1
                        }}></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>My Philosophy</h3>
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>
                            "I believe in creating fullstack systems where clean code, robust backend logic, and dynamic frontend experiences come together to solve real-world problems efficiently."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
