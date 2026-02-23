import React from 'react';

const Skills = () => {
    const skillGroups = [
        {
            title: "Programming",
            skills: ["C", "C++", "C#", "Python", "JavaScript"]
        },
        {
            title: "Backend & Frameworks",
            skills: ["Django", ".NET", "Node.js", "REST APIs"]
        },
        {
            title: "Embedded Systems",
            skills: ["AVR", "Microcontrollers", "Low-level C", "Interrupt Logic"]
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "SQLite", "Firebase"]
        },
        {
            title: "Design Concepts",
            skills: ["System Design", "Algorithms", "OOP", "Architecture"]
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <div className="mobile-text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Technical <span className="gradient-text">Stack.</span></h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Categorized expertise across the software and hardware spectrum.</p>
                </div>
                <div className="mobile-grid-1" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillGroups.map((group, i) => (
                        <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
                                {group.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {group.skills.map((skill, si) => (
                                    <span key={si} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '2rem',
                                        fontSize: '0.85rem',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
