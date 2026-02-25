import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "ICMS Student Portal",
            category: "Full-Stack Development",
            problem: "Fragmented systems for grades, finance, and learning at KCA University.",
            solution: "Integrated Android + Django platform with Agora Video for classes and M-Pesa for finance.",
            tech: ["Kotlin", "Django", "PostgreSQL", "Agora SDK", "Firebase"],
            highlights: "Real-time e-voting, virtual classroom integration, automated billing.",
            githubUrl: "https://github.com/Alphadoane/android"
        },
        {
            title: "Jarvis: Cognitive Engine",
            category: "Intelligent Systems",
            problem: "Reliance on cloud AI APIs and manual interaction for administrative tasks.",
            solution: "Local LLM-driven assistant with face recognition and voice interaction for device control.",
            tech: ["Python", "Ollama (Llama 3.2)", "OpenCV", "PyTTSX3"],
            highlights: "Privacy-focused local execution, multi-modal interaction (voice/vision).",
            githubUrl: "https://github.com/Alphadoane/doane"
        },
        {
            title: "Smart Traffic Management",
            category: "Ambient Intelligence",
            problem: "Severe traffic congestion in Nairobi CBD due to rigid signaling systems.",
            solution: "Adaptive signaling algorithms driven by real-time traffic data modeling.",
            tech: ["Python", "Django", "Data Modeling", "Optimization Algorithms"],
            highlights: "Simulated sensor input, decision engine logic, real-time optimization.",
            githubUrl: "https://github.com/Alphadoane/schoolwork.git"
        },
        {
            title: "Result Slip Management",
            category: "Backend Automation",
            problem: "Inefficient manual computation and PDF report generation for student results.",
            solution: "Automated grading system with role-based access and precise computation logic.",
            tech: ["Django", "PostgreSQL", "PDF Automation"],
            highlights: "Automated grade calculation, batch PDF generation, secure faculty access.",
            githubUrl: "https://github.com/Alphadoane/schoolwork.git"
        },
        {
            title: "Embedded LED Controller",
            category: "Embedded Systems",
            problem: "Precise timing-based control of hardware components using microcontrollers.",
            solution: "C-based embedded program for AVR architecture controlling hardware interrupts.",
            tech: ["Embedded C", "AVR Architecture", "Interrupt Logic"],
            highlights: "Low-level register manipulation, 2-second interval precision.",
            githubUrl: "https://github.com/Alphadoane/schoolwork.git"
        }
    ];

    return (
        <section id="projects" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="mobile-text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Selected <span className="gradient-text">Projects.</span></h2>
                    <p style={{ color: 'var(--text-secondary)' }}>A showcase of systems-oriented engineering projects.</p>
                </div>
                <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, i) => (
                        <div key={i} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <span style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1rem'
                                }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem' }}>{project.title}</h3>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Problem</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.problem}</p>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Solution</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.solution}</p>
                            </div>

                            <div style={{ marginTop: 'auto' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tech.map((t, ti) => (
                                        <span key={ti} style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', fontWeight: 500 }}>
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ width: '100%', justifyContent: 'center' }}
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
