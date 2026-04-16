import React, { useState } from 'react';

interface SkillGroup {
    category: string;
    icon: string;
    color: string;
    skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
    {
        category: 'Frontend',
        icon: '🎨',
        color: 'var(--accent)',
        skills: [
            { name: 'React', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'JavaScript', level: 90 },
            { name: 'HTML5 / CSS3', level: 92 },
            { name: 'Tailwind CSS', level: 88 },
            { name: 'Bootstrap', level: 85 },
        ],
    },
    {
        category: 'AI & NLP',
        icon: '🧠',
        color: 'var(--pink)',
        skills: [
            { name: 'Semantic Embeddings', level: 82 },
            { name: 'Sentiment Analysis', level: 85 },
            { name: 'TF-IDF / Word2Vec', level: 80 },
            { name: 'POS Tagging', level: 78 },
            { name: 'Lemmatization / Stemming', level: 80 },
            { name: 'Transliteration', level: 75 },
        ],
    },
    {
        category: 'ML & Deep Learning',
        icon: '⚡',
        color: 'var(--yellow)',
        skills: [
            { name: 'TensorFlow', level: 80 },
            { name: 'PyTorch', level: 78 },
            { name: 'Model Training', level: 82 },
            { name: 'Few-Shot Learning', level: 75 },
            { name: 'Logistic Regression', level: 83 },
            { name: 'Data Annotation', level: 85 },
        ],
    },
    {
        category: 'Backend & APIs',
        icon: '🔗',
        color: 'var(--teal)',
        skills: [
            { name: 'Node.js', level: 78 },
            { name: 'REST APIs', level: 82 },
            { name: 'Gemini API', level: 80 },
            { name: 'Big Data Processing', level: 75 },
        ],
    },
    {
        category: 'Languages',
        icon: '💻',
        color: 'var(--blue)',
        skills: [
            { name: 'Python', level: 90 },
            { name: 'JavaScript', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'Java', level: 78 },
            { name: 'C / C++', level: 75 },
            { name: 'C#', level: 70 },
            { name: 'Haskell', level: 60 },
        ],
    },
    {
        category: 'Tools & Practices',
        icon: '🛠',
        color: 'var(--orange)',
        skills: [
            { name: 'Git & Version Control', level: 88 },
            { name: 'Software Architecture', level: 80 },
            { name: 'Test Automation', level: 78 },
            { name: 'Documentation', level: 85 },
            { name: 'Graphic Design', level: 72 },
        ],
    },
];

const Skills: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);

    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <div className="section-label">What I know</div>
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                    A full-stack skill set spanning modern frontend, ML engineering, and NLP — covering the whole pipeline from raw data to polished UI.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '20px',
            }}>
                {skillGroups.map((group, gi) => (
                    <div
                        key={gi}
                        onClick={() => setActive(active === gi ? null : gi)}
                        style={{
                            background: 'var(--bg-card)',
                            border: `1px solid ${active === gi ? group.color.replace('var(', '').replace(')', '') === '--accent' ? 'rgba(167,139,250,0.4)' : 'rgba(244,114,182,0.4)' : 'rgba(167,139,250,0.1)'}`,
                            borderRadius: '16px',
                            padding: '24px',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease',
                            transform: active === gi ? 'translateY(-4px)' : 'none',
                        }}
                        onMouseOver={e => {
                            if (active !== gi) {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(167,139,250,0.25)';
                                (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-card-hover)';
                            }
                        }}
                        onMouseOut={e => {
                            if (active !== gi) {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(167,139,250,0.1)';
                                (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-card)';
                            }
                        }}
                    >
                        {/* Card header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                background: 'rgba(167,139,250,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                flexShrink: 0,
                            }}>
                                {group.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                }}>
                                    {group.category}
                                </div>
                                <div style={{
                                    fontSize: '12px',
                                    color: 'var(--text-muted)',
                                    fontFamily: 'var(--font-mono)',
                                }}>
                                    {group.skills.length} skills
                                </div>
                            </div>
                            <span style={{
                                color: 'var(--text-muted)',
                                fontSize: '14px',
                                transition: 'transform 0.2s',
                                transform: active === gi ? 'rotate(180deg)' : 'none',
                            }}>▼</span>
                        </div>

                        {/* Skill pills (always visible) */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: active === gi ? '20px' : '0' }}>
                            {group.skills.map((skill, si) => (
                                <span key={si} style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '11px',
                                    color: group.color,
                                    background: 'rgba(167,139,250,0.07)',
                                    border: `1px solid rgba(167,139,250,0.15)`,
                                    borderRadius: '6px',
                                    padding: '4px 10px',
                                    letterSpacing: '0.02em',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {skill.name}
                                </span>
                            ))}
                        </div>

                        {/* Expanded proficiency bars */}
                        {active === gi && (
                            <div style={{ borderTop: '1px solid rgba(167,139,250,0.1)', paddingTop: '20px' }}>
                                {group.skills.map((skill, si) => (
                                    <div key={si} style={{ marginBottom: '14px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                                                {skill.name}
                                            </span>
                                            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div style={{
                                            height: '4px',
                                            background: 'rgba(255,255,255,0.06)',
                                            borderRadius: '2px',
                                            overflow: 'hidden',
                                        }}>
                                            <div style={{
                                                height: '100%',
                                                width: `${skill.level}%`,
                                                background: group.color,
                                                borderRadius: '2px',
                                                transition: 'width 0.6s ease',
                                                opacity: 0.85,
                                            }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <p style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                marginTop: '32px',
            }}>
                ↑ Click any card to see proficiency levels
            </p>
        </div>
    );
};

export default Skills;