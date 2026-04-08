import React from 'react';

const EngineeringThinking = () => {
    const principles = [
        { title: "System Design", desc: "I break down problems into components, define data flow, and design systems that are scalable and maintainable." },
        { title: "Performance", desc: "I consider performance early—optimizing rendering, minimizing unnecessary computations, and structuring efficient data handling." },
        { title: "Problem Solving", desc: "I approach development by first understanding the problem domain, then designing solutions that are both practical and extensible." },
        { title: "Code Philosophy", desc: "Clarity over cleverness. Structure over shortcuts. Maintainability over quick fixes." }
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="mobile-text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How I Think as an <span className="gradient-text">Engineer.</span></h2>
                    <p style={{ color: 'var(--text-secondary)' }}>My core philosophy and technical approach.</p>
                </div>
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {principles.map((p, i) => (
                        <div key={i} className="glass-card" style={{ padding: '2rem', borderTop: '4px solid var(--accent-primary)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{p.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeringThinking;
