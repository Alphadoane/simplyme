import React from 'react';

const DesignThinking = () => {
    const principles = [
        { title: "Scalability", desc: "Designing for growth by choosing the right database architectures (Hybrid SQL/NoSQL)." },
        { title: "Fault Tolerance", desc: "Implementing robust error handling and redundancy, especially in embedded and real-time systems." },
        { title: "Resource Optimization", desc: "Efficient algorithm design to handle constraints in memory or processing power." }
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="mobile-text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Systems & <span className="gradient-text">Architectural Thinking.</span></h2>
                    <p style={{ color: 'var(--text-secondary)' }}>How I approach building reliable software ecosystems.</p>
                </div>
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {principles.map((p, i) => (
                        <div key={i} className="glass-card" style={{ padding: '2rem', borderTop: '4px solid var(--accent-primary)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{p.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignThinking;
