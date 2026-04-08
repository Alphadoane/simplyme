import React, { FC } from 'react';

interface Project {
    title: string;
    category: string;
    problem: string;
    solution: string;
    role: string;
    tech: string[];
    decisions: string;
    challenges: string;
    outcome: string;
    githubUrl: string;
}

const Projects: FC = () => {
    const projects: Project[] = [
        {
            title: "SimplyMe (Portfolio)",
            category: "Identity System",
            problem: "Most developer portfolios focus on aesthetics rather than demonstrating real engineering capability.",
            solution: "A portfolio platform that not only presents my work but also communicates my engineering thinking, system design approach, and technical decision-making.",
            role: "Designed and implemented the full frontend architecture, structuring content to reflect engineering depth instead of purely visual appeal.",
            tech: ["React / Vite", "CSS", "Vercel"],
            decisions: "Component-based architecture for reusability; Structured content for recruiter readability.",
            challenges: "Translating technical depth into a clean UI.",
            outcome: "A structured platform serving as both a portfolio and a professional identity system.",
            githubUrl: "https://github.com/Alphadoane/simplyme"
        },
        {
            title: "Intellysinc-ioa",
            category: "Flagship Web System",
            problem: "Complex web applications often lack strong integration between user interfaces and backend performance.",
            solution: "A comprehensive JavaScript-based system emphasizing structured data control and scalable client-side logic.",
            role: "Engineered the full application lifecycle from component design to deployment.",
            tech: ["JavaScript", "React", "Frontend Tooling"],
            decisions: "Clean UI separation to ensure high maintainability; performance-first rendering.",
            challenges: "Managing dynamic state and ensuring fast loading times across different components.",
            outcome: "A robust web application acting as a core demonstration of frontend mastery.",
            githubUrl: "https://github.com/Alphadoane/Intellysinc-ioa"
        },
        {
            title: "ICMS Student Portal",
            category: "Full-Stack Development",
            problem: "Fragmented systems for grades, finance, and learning at a university level.",
            solution: "Integrated Android + Django platform with Agora Video for classes and M-Pesa for finance.",
            role: "Fullstack Developer managing the Android client and backend APIs.",
            tech: ["Kotlin", "Django", "PostgreSQL", "Firebase"],
            decisions: "Used APIs for decoupling client and server; Implemented real-time synchronization.",
            challenges: "Handling concurrent connections during live virtual classes.",
            outcome: "Streamlined administrative tasks and improved student engagement through a unified portal.",
            githubUrl: "https://github.com/Alphadoane/student"
        }
    ];

    return (
        <section id="projects" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="mobile-text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Engineering <span className="gradient-text">Case Studies.</span></h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Deep dives into system architecture and technical decisions.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {projects.map((project, i) => (
                        <div key={i} className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '0.5rem' }}>
                                <span style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '0.85rem',
                                    fontWeight: 600 as const,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1rem'
                                }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{project.title}</h3>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Problem</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.problem}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Solution</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.solution}</p>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>My Role</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.role}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Engineering Decisions</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.decisions}</p>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Challenges</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.challenges}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Outcome</h4>
                                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.outcome}</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tech.map((t, ti) => (
                                        <span key={ti} style={{ color: 'var(--accent-secondary)', background: 'rgba(59, 130, 246, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 500 }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
