import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('qemerald1@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const links = [
        {
            label: 'Email',
            value: 'qemerald1@gmail.com',
            href: 'mailto:qemerald1@gmail.com',
            icon: '✉',
            color: 'var(--accent)',
            action: copyEmail,
            actionLabel: copied ? 'Copied!' : 'Copy',
        },
        {
            label: 'Phone',
            value: '+92 305 165 6905',
            href: 'tel:+923051656905',
            icon: '📞',
            color: 'var(--green)',
        },
        {
            label: 'LinkedIn',
            value: 'ayesha-saeed-6aaa2a284',
            href: 'https://www.linkedin.com/in/ayesha-saeed-6aaa2a284/',
            icon: '💼',
            color: 'var(--blue)',
        },
        {
            label: 'GitHub',
            value: 'github.com/ayesha',
            href: 'https://github.com/ayesha-Saeed-0',
            icon: '🐙',
            color: 'var(--pink)',
        },
    ];

    return (
        <div className="container">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'center',
            }}>
                {/* Left text */}
                <div>
                    <div className="section-label">Let's connect</div>
                    <h2 className="section-title">Get in Touch</h2>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '16px',
                        lineHeight: 1.8,
                        marginBottom: '32px',
                    }}>
                        I'm currently looking for opportunities in Frontend Development and AI/ML Engineering.
                        Whether it's a full-time role, internship, or collaboration — I'd love to hear from you.
                    </p>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(74,222,128,0.08)',
                        border: '1px solid rgba(74,222,128,0.2)',
                        borderRadius: '100px',
                        padding: '8px 18px',
                        fontSize: '14px',
                        color: 'var(--green)',
                        fontFamily: 'var(--font-mono)',
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'var(--green)',
                            animation: 'pulse-ring 2s infinite',
                            display: 'inline-block',
                        }} />
                        Available for opportunities
                    </div>
                </div>

                {/* Right contact cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {links.map((link, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid rgba(167,139,250,0.1)',
                                borderRadius: '12px',
                                padding: '16px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                transition: 'all 0.2s',
                            }}
                            onMouseOver={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(167,139,250,0.25)';
                                (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-card-hover)';
                            }}
                            onMouseOut={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(167,139,250,0.1)';
                                (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-card)';
                            }}
                        >
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'rgba(167,139,250,0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                flexShrink: 0,
                            }}>
                                {link.icon}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginBottom: '3px' }}>
                                    {link.label.toUpperCase()}
                                </div>
                                <div style={{
                                    fontSize: '14px',
                                    color: 'var(--text-primary)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {link.value}
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                                {link.action && (
                                    <button
                                        onClick={link.action}
                                        style={{
                                            background: 'rgba(167,139,250,0.08)',
                                            border: '1px solid rgba(167,139,250,0.15)',
                                            color: link.color,
                                            cursor: 'pointer',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '11px',
                                            padding: '5px 10px',
                                            borderRadius: '6px',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {link.actionLabel}
                                    </button>
                                )}
                                <a
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    style={{
                                        background: 'rgba(167,139,250,0.08)',
                                        border: '1px solid rgba(167,139,250,0.15)',
                                        color: link.color,
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                        padding: '5px 10px',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {link.href.startsWith('http') ? 'Open ↗' : 'Open'}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div style={{
                marginTop: '80px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(167,139,250,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
            }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)' }}>
                    © 2025 Ayesha Saeed — Built with React & TypeScript
                </span>
                <div style={{ display: 'flex', gap: '16px' }}>
                    {['FAST-NUCES', 'Faisalabad', 'Pakistan'].map((item, i) => (
                        <span key={i} style={{
                            fontSize: '12px',
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-mono)',
                        }}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;