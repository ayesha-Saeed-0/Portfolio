import React from 'react';


const Hero: React.FC = () => {
    const roles = ['Frontend Developer', 'AI / ML Engineer', 'NLP Enthusiast', 'React & TypeScript'];

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(167,139,250,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(167,139,250,0.03) 1px, transparent 1px)
        `,
                backgroundSize: '60px 60px',
                pointerEvents: 'none',
            }} />

            {/* Glow blobs */}
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
                top: '-100px',
                right: '-100px',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
                bottom: '100px',
                left: '-50px',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ width: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '60px',
                    alignItems: 'center',
                }}>
                    {/* Text content */}
                    <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(167,139,250,0.08)',
                            border: '1px solid rgba(167,139,250,0.2)',
                            borderRadius: '100px',
                            padding: '6px 16px',
                            marginBottom: '28px',
                        }}>
                            <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'var(--green)',
                                animation: 'pulse-ring 2s infinite',
                                display: 'inline-block',
                            }} />
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '13px',
                                color: 'var(--accent)',
                                letterSpacing: '0.05em',
                            }}>
                                Open to opportunities
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(36px, 5.5vw, 64px)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            marginBottom: '8px',
                        }}>
                            Ayesha{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #f472b6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundSize: '200% auto',
                                animation: 'shimmer 4s linear infinite',
                            }}>
                                Saeed
                            </span>
                        </h1>

                        <h2 style={{
                            fontSize: 'clamp(16px, 2.5vw, 22px)',
                            fontWeight: 400,
                            color: 'var(--text-secondary)',
                            marginBottom: '24px',
                            letterSpacing: '-0.01em',
                        }}>
                            Software Engineer · Web & AI/ML
                        </h2>

                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '16px',
                            lineHeight: 1.8,
                            maxWidth: '480px',
                            marginBottom: '40px',
                        }}>
                            Final-year Software Engineering student at FAST-NUCES building
                            intelligent web experiences — from NLP pipelines to responsive React UIs.
                            Passionate about the intersection of AI and human-centered design.
                        </p>

                        {/* Role chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                            {roles.map((role, i) => (
                                <span key={i} style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '12px',
                                    color: 'var(--accent)',
                                    background: 'rgba(167,139,250,0.08)',
                                    border: '1px solid rgba(167,139,250,0.18)',
                                    borderRadius: '6px',
                                    padding: '5px 12px',
                                    letterSpacing: '0.03em',
                                }}>
                                    {role}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                style={{
                                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                    border: 'none',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-main)',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    padding: '13px 28px',
                                    borderRadius: '10px',
                                    transition: 'transform 0.2s, opacity 0.2s',
                                }}
                                onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                                onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
                            >
                                View Projects →
                            </button>
                            <a
                                href="mailto:qemerald1@gmail.com"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(167,139,250,0.3)',
                                    color: 'var(--accent-bright)',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-main)',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    padding: '13px 28px',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    transition: 'border-color 0.2s, background 0.2s',
                                    display: 'inline-block',
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.borderColor = 'rgba(167,139,250,0.6)';
                                    e.currentTarget.style.background = 'rgba(167,139,250,0.06)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)';
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                Get in Touch
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ayesha-saeed-6aaa2a284/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(96,165,250,0.3)',
                                    color: 'var(--blue)',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-main)',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    padding: '13px 20px',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    transition: 'border-color 0.2s',
                                }}
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>

                    {/* Profile Picture */}
                    <div style={{
                        animation: 'fadeInUp 1s ease 0.2s both',
                        flexShrink: 0,
                    }}>
                        <div style={{
                            position: 'relative',
                            width: '220px',
                            height: '220px',
                        }}>





                        </div>
                    </div>
                </div>

                {/* Stats row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '16px',
                    marginTop: '80px',
                    padding: '32px',
                    background: 'rgba(167,139,250,0.04)',
                    border: '1px solid rgba(167,139,250,0.1)',
                    borderRadius: '16px',
                    animation: 'fadeInUp 0.8s ease 0.4s both',
                }}>
                    {[
                        { label: 'Projects Built', value: '10+', color: 'var(--accent)' },
                        { label: 'Languages Known', value: '7+', color: 'var(--blue)' },
                        { label: 'Frameworks Used', value: '8+', color: 'var(--green)' },
                        { label: 'Years Studying', value: '4', color: 'var(--pink)' },
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: '32px',
                                fontWeight: 800,
                                color: stat.color,
                                fontFamily: 'var(--font-mono)',
                                letterSpacing: '-0.02em',
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '13px',
                                color: 'var(--text-muted)',
                                marginTop: '4px',
                                letterSpacing: '0.03em',
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
          .container > div:first-child > div:last-child {
            display: none;
          }
        }
      `}</style>
        </div>
    );
};

export default Hero;