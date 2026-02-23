import React from 'react';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--glass-border)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>
          DW<span className="gradient-text">.</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <a href="#about" style={{ color: 'var(--text-secondary)' }}>About</a>
          <a href="#skills" style={{ color: 'var(--text-secondary)' }}>Skills</a>
          <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projects</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact</a>
        </nav>
        <a href="/CV.pdf" download className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
