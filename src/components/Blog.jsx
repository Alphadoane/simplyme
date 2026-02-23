import React from 'react';

const Blog = () => {
    const posts = [
        { title: "Designing Intelligent Traffic Systems", date: "Feb 2026", excerpt: "Exploring ambient intelligence and adaptive signaling for urban congestion." },
        { title: "Embedded vs Backend Design", date: "Jan 2026", excerpt: "Bridging the gap between low-level hardware constraints and high-level logic." },
        { title: "REST API Best Practices in Django", date: "Dec 2025", excerpt: "Building secure, scalable, and documented endpoints for mobile apps." }
    ];

    return (
        <section id="blog" className="section-padding">
            <div className="container">
                <div className="mobile-text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Technical <span className="gradient-text">Insights.</span></h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Writing about systems, architecture, and engineering challenges.</p>
                </div>
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {posts.map((post, i) => (
                        <div key={i} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.date}</div>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                                {post.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{post.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
