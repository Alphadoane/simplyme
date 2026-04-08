import React, { FC, useState } from 'react';

interface Insight {
    title: string;
    category: string;
    summary: string;
    problem: string;
    decision: string;
    impact: string;
}

const TechnicalInsights: FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const insights: Insight[] = [
        { 
            title: "PostgreSQL vs. MongoDB", 
            category: "Data Architecture",
            summary: "Prioritizing ACID compliance over horizontal scalability.",
            problem: "University financial records require absolute consistency; a 'lost update' during a fee payment is unacceptable.",
            decision: "Switched from a NoSQL prototype to PostgreSQL with strict relational constraints and row-level locking.",
            impact: "Zero data corruption incidents and audit-ready transaction logs."
        },
        { 
            title: "Scaling Concurrent Connections", 
            category: "System Performance",
            summary: "Solving the 5,000+ simultaneous student session bottleneck.",
            problem: "Initial Django deployment choked during live examinations when session traffic spiked 400%.",
            decision: "Implemented Redis-backed session caching and Nginx Load Balancing with Gunicorn worker optimization.",
            impact: "Stable 99.9% uptime during peak university registration and class windows."
        },
        { 
            title: "Clean Architecture in React", 
            category: "Maintainability",
            summary: "Minimizing technical debt through strict domain separation.",
            problem: "Increasing UI complexity led to 'prop drilling' and logic leaks across components.",
            decision: "Enforced a layered architecture: UI Components -> Custom Hooks (Logic) -> Service Layer (API).",
            impact: "Reduced bug surface area and decreased manual QA time by 30% per release cycle."
        }
    ];

    return (
        <section id="technical-insights" className="section-padding">
            <div className="container">
                <div className="mobile-text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Technical <span className="gradient-text">Insights.</span></h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Decision-making patterns and architectural discoveries.</p>
                </div>
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                    {insights.map((insight, i) => (
                        <div 
                            key={i} 
                            className={`glass-card insight-card ${activeId === i ? 'active' : ''}`}
                            onMouseEnter={() => setActiveId(i)}
                            onMouseLeave={() => setActiveId(null)}
                            onClick={() => setActiveId(activeId === i ? null : i)}
                            style={{ 
                                padding: '2rem', 
                                cursor: 'pointer',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: 'auto',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Category Badge */}
                            <div style={{ 
                                color: 'var(--accent-primary)', 
                                fontSize: '0.75rem', 
                                fontWeight: 600, 
                                textTransform: 'uppercase', 
                                letterSpacing: '0.1rem',
                                marginBottom: '1.5rem'
                            }}>
                                {insight.category}
                            </div>

                            {/* Header always visible */}
                            <h3 style={{ 
                                fontSize: activeId === i ? '1.4rem' : '1.6rem', 
                                marginBottom: '1rem',
                                transition: 'all 0.4s ease',
                                color: activeId === i ? 'var(--accent-secondary)' : 'var(--text-primary)'
                            }}>
                                {insight.title}
                            </h3>

                            {/* Initial Summary - Fades out on expand */}
                            <div style={{ 
                                maxHeight: activeId === i ? '0' : '100px',
                                opacity: activeId === i ? 0 : 1,
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                                marginBottom: activeId === i ? '0' : '1.5rem'
                            }}>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>{insight.summary}</p>
                            </div>

                            {/* Deep Dive - Expands on active */}
                            <div style={{ 
                                maxHeight: activeId === i ? '600px' : '0',
                                opacity: activeId === i ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem'
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>The Problem</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{insight.problem}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Engineering Decision</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{insight.decision}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>The Outcome</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: '1.5' }}>{insight.impact}</p>
                                </div>
                            </div>
                            
                            {/* Interaction Indicator */}
                            <div style={{ 
                                fontSize: '0.7rem', 
                                color: 'var(--text-muted)', 
                                marginTop: '1.5rem',
                                opacity: activeId === i ? 0.5 : 1,
                                transition: 'all 0.3s ease'
                            }}>
                                {activeId === i ? '[ Click/Tap to close ]' : '[ Hover to expand ]'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .insight-card:hover {
                    border-color: var(--accent-primary) !important;
                    background: rgba(255, 255, 255, 0.08) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
                    transform: translateY(-5px);
                }
                .insight-card.active {
                    border-color: var(--accent-secondary) !important;
                    background: rgba(255, 255, 255, 0.1) !important;
                    transform: translateY(-2px);
                }
            `}} />
        </section>
    );
};

export default TechnicalInsights;
