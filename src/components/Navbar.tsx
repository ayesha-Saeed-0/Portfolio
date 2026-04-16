import React, { useState, useEffect } from 'react';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { id: 'home', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(5,5,8,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(167,139,250,0.1)' : '1px solid transparent',
            padding: '0 24px',
        }}>
            <div style={{
                maxWidth: '1100px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '64px',
            }}>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '18px',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                }}>
                    ayesha.dev
                </span>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', gap: '8px' }} className="desktop-nav">
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            style={{
                                background: activeSection === link.id ? 'rgba(167,139,250,0.12)' : 'transparent',
                                border: 'none',
                                color: activeSection === link.id ? 'var(--accent-bright)' : 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-main)',
                                fontSize: '14px',
                                fontWeight: activeSection === link.id ? 600 : 400,
                                padding: '8px 16px',
                                borderRadius: '8px',
                                transition: 'all 0.2s',
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                    <a
                        href="https://github.com/ayesha-Saeed-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                            border: 'none',
                            color: '#fff',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-main)',
                            fontSize: '14px',
                            fontWeight: 500,
                            padding: '8px 18px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'opacity 0.2s',
                        }}
                    >
                        GitHub ↗
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        fontSize: '24px',
                    }}
                    className="hamburger"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{
                    background: 'rgba(13,13,20,0.98)',
                    backdropFilter: 'blur(20px)',
                    borderTop: '1px solid var(--border)',
                    padding: '16px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                }}>
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            style={{
                                background: activeSection === link.id ? 'rgba(167,139,250,0.1)' : 'transparent',
                                border: 'none',
                                color: activeSection === link.id ? 'var(--accent-bright)' : 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-main)',
                                fontSize: '15px',
                                padding: '12px 16px',
                                borderRadius: '8px',
                                textAlign: 'left',
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;