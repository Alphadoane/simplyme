import React from 'react';

const About = () => {
    const points = [
        { title: "Systems Thinking", desc: "Approaching problems with an architectural first mindset, considering the interplay between hardware and software." },
        { title: "Technical Focus", desc: "Expertise in backend systems, REST APIs, and embedded C programming for low-level hardware control." },
        { title: "Full Lifecycle", desc: "Capable of taking a system from initial design through development to cloud or embedded deployment." }
    ];

    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Engineering Systems That <span className="gradient-text">Matter.</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            I am a Software Engineering student with a passion for architectural efficiency and intelligent automation.
                            Whether it's optimizing traffic flow with Ambient Intelligence or managing student data in a
                            high-concurrency portal, I build with scalability and reliability in mind.
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
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Career Objective</h3>
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>
                            "To leverage my expertise in backend architecture and embedded systems to build intelligent,
                            real-world solutions as a Systems Engineer or Backend Developer."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
