import React, { useState } from 'react';

type Category = 'All' | 'Web' | 'AI / ML' | 'NLP' | 'Systems';

interface Project {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    categories: Category[];
    github?: string;
    highlights: string[];
    accent: string;
    icon: string;
}

const projects: Project[] = [
    {
        title: 'Hadith Compendium',
        subtitle: 'Final Year Project',
        icon: '📖',
        accent: 'var(--accent)',
        categories: ['AI / ML', 'NLP', 'Web'],
        description:
            'End-to-end NLP platform for Islamic textual analysis — semantic Hadith search, ML-based authenticity classification, and a full scholarly dashboard.',
        tags: ['Python', 'NLP', 'ML', 'Sentiment Analysis', 'Semantic Embeddings', 'React', 'Data Visualization'],
        highlights: [
            'Variant detection via semantic embeddings & dynamic-programming alignment',
            'ML classifier for Sahih / Hasan / Da\'if authenticity categorization',
            'Narrator trust scores via sentiment analysis on Arabic scholarly sources',
            'Color-coded UI: Green / Yellow / Red trust ratings',
            'Dashboard with project management, CSV import/export & reviewer feedback loop',
            'Handles thousands of Hadith records and scholarly datasets',
        ],
        github: 'https://github.com/',
    },
    {
        title: 'Empathetic Chatbot',
        subtitle: 'Emotion-Aware Conversational AI',
        icon: '💬',
        accent: 'var(--pink)',
        categories: ['AI / ML', 'NLP'],
        description:
            'Emotion-detection AI trained from scratch on 50,000 labeled samples. Detects emotional states from text and generates contextually empathetic responses.',
        tags: ['Python', 'Emotion Detection', 'ML', 'NLP', 'Chatbot'],
        highlights: [
            'Trained entirely from scratch — no pretrained base model',
            '50,000 labeled samples with strong classification accuracy',
            'Classifies: joy, sadness, anger, fear, surprise, and more',
            'Generates responses tailored to the detected emotional state',
        ],
        github: 'https://github.com/',
    },
    {
        title: 'Voice Cloning System',
        subtitle: 'Neural Speech Synthesis',
        icon: '🎙',
        accent: 'var(--teal)',
        categories: ['AI / ML'],
        description:
            'Neural speech synthesis system that clones human voices using few-shot learning from minimal audio samples.',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'Speech Synthesis', 'Few-Shot Learning', 'Deep Learning'],
        highlights: [
            'Few-shot voice cloning from minimal audio samples',
            'Deep learning architectures for high-fidelity waveform generation',
            'End-to-end pipeline from raw audio to synthesized speech',
        ],
        github: 'https://github.com/',
    },
    {
        title: 'Arabic Text Editor',
        subtitle: 'Computational Linguistics Toolkit',
        icon: '🔤',
        accent: 'var(--orange)',
        categories: ['NLP'],
        description:
            'A Java-based NLP toolkit for Arabic text processing including POS tagging, lemmatization, stemming, and statistical language measures.',
        tags: ['Java', 'POS Tagging', 'Lemmatization', 'Stemming', 'TF-IDF', 'PMI', 'KL Divergence'],
        highlights: [
            'POS Tagging, Lemmatization, Stemming & Transliteration',
            'Statistical NLP: TF-IDF, Pointwise Mutual Information (PMI)',
            'KL Divergence for language model comparison',
            'Built for processing classical Arabic text sources',
        ],
        github: 'https://github.com/',
    },
    {
        title: 'AI Cancer Recipe Generator',
        subtitle: 'Personalized Nutrition with Gemini AI',
        icon: '🥗',
        accent: 'var(--green)',
        categories: ['Web', 'AI / ML'],
        description:
            'AI-powered responsive web app generating personalized meal plans for cancer patients using the Gemini API — ingredient-based and appetite-based generation.',
        tags: ['React', 'Node.js', 'Gemini API', 'Tailwind CSS', 'Bootstrap'],
        highlights: [
            'Dynamic recipe generation from ingredients and appetite level',
            'Accessible, clean UI fully responsive across all devices',
            'Personalized nutrition suggestions for medical dietary needs',
        ],
        github: 'https://github.com/',
    },
    {
        title: 'Bear — Clothing Web',
        subtitle: 'Full E-Commerce Platform',
        icon: '🐻',
        accent: 'var(--blue)',
        categories: ['Web'],
        description:
            'Led frontend development of a full-featured e-commerce platform with product listings, shopping cart, and complete user flows in React + TypeScript.',
        tags: ['React', 'TypeScript', 'E-Commerce', 'Component Architecture'],
        highlights: [
            'Type-safe component architecture using TypeScript',
            'Product listings, cart management, and user authentication flows',
            'Scalable and maintainable codebase using React best practices',
        ],
        github: 'https://github.com/',
    },
    {
        title: 'Big Data Projects',
        subtitle: 'ML Data Pipelines & Analytics',
        icon: '📊',
        accent: 'var(--yellow)',
        categories: ['AI / ML', 'NLP'],
        description:
            'Web scraping pipelines for collecting and annotating large-scale ML training datasets, plus logistic regression models for predictive analytics.',
        tags: ['Python', 'Web Scraping', 'Data Annotation', 'Logistic Regression', 'Big Data'],
        highlights: [
            'Engineered automated web scraping pipelines',
            'Large-scale dataset collection and annotation for ML training',
            'Logistic regression models on high-volume tabular data',
        ],
        github: 'https://github.com/',
    },
    {
        title: '24-Puzzle Game',
        subtitle: 'Interactive C++ Game',
        icon: '🎮',
        accent: '#e879f9',
        categories: ['Systems'],
        description:
            'Co-developed an interactive puzzle game in C++ featuring advanced file handling, game state persistence, and a rich color-scheme UI.',
        tags: ['C++', 'File Handling', 'Game Development', 'UI'],
        highlights: [
            'Advanced file I/O for game state persistence',
            'Dynamic board rendering with rich color schemes',
            'Engaging gameplay loop with save/load functionality',
        ],
        github: 'https://github.com/',
    },
];

const categories: Category[] = ['All', 'Web', 'AI / ML', 'NLP', 'Systems'];

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [expanded, setExpanded] = useState<number | null>(null);

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.categories.includes(activeCategory));

    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <div className="section-label">What I've built</div>
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                    Spanning ML pipelines, NLP research tools, AI-powered web apps, and full-stack platforms.
                </p>
            </div>

            {/* Category tabs */}
            <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '40px',
            }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                            background: activeCategory === cat ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'transparent',
                            border: `1px solid ${activeCategory === cat ? 'transparent' : 'rgba(167,139,250,0.2)'}`,
                            color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-main)',
                            fontSize: '14px',
                            fontWeight: activeCategory === cat ? 600 : 400,
                            padding: '8px 20px',
                            borderRadius: '100px',
                            transition: 'all 0.2s',
                        }}
                    >
                        {cat}
                        <span style={{
                            marginLeft: '6px',
                            fontSize: '11px',
                            opacity: 0.7,
                            fontFamily: 'var(--font-mono)',
                        }}>
                            {cat === 'All' ? projects.length : projects.filter(p => p.categories.includes(cat)).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '20px',
            }}>
                {filtered.map((project, i) => (
                    <div
                        key={project.title}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(167,139,250,0.1)',
                            borderRadius: '16px',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            transition: 'all 0.25s ease',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        onMouseOver={e => {
                            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(167,139,250,0.25)';
                            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                            (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-card-hover)';
                        }}
                        onMouseOut={e => {
                            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(167,139,250,0.1)';
                            (e.currentTarget as HTMLDivElement).style.transform = 'none';
                            (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-card)';
                        }}
                    >
                        {/* Subtle top accent line */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: `linear-gradient(90deg, ${project.accent}, transparent)`,
                            opacity: 0.6,
                        }} />

                        {/* Header */}
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'rgba(167,139,250,0.08)',
                                border: '1px solid rgba(167,139,250,0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '22px',
                                flexShrink: 0,
                            }}>
                                {project.icon}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                                    {project.title}
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '3px' }}>
                                    {project.subtitle}
                                </div>
                            </div>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    style={{
                                        color: 'var(--text-muted)',
                                        textDecoration: 'none',
                                        fontSize: '20px',
                                        lineHeight: 1,
                                        flexShrink: 0,
                                        padding: '4px',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={e => (e.currentTarget.style.color = 'var(--accent-bright)')}
                                    onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                                    title="View on GitHub"
                                >
                                    ↗
                                </a>
                            )}
                        </div>

                        {/* Description */}
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '14px',
                            lineHeight: 1.7,
                            margin: 0,
                        }}>
                            {project.description}
                        </p>

                        {/* Category chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {project.categories.map(cat => (
                                <span key={cat} style={{
                                    fontSize: '11px',
                                    fontFamily: 'var(--font-mono)',
                                    color: project.accent,
                                    background: 'rgba(167,139,250,0.06)',
                                    border: `1px solid rgba(167,139,250,0.15)`,
                                    borderRadius: '4px',
                                    padding: '3px 8px',
                                }}>
                                    {cat}
                                </span>
                            ))}
                        </div>

                        {/* Tag pills */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '11px',
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--text-muted)',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: '4px',
                                    padding: '3px 8px',
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Expand highlights */}
                        <button
                            onClick={() => setExpanded(expanded === i ? null : i)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--accent)',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                textAlign: 'left',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                marginTop: '-4px',
                            }}
                        >
                            <span style={{
                                transform: expanded === i ? 'rotate(90deg)' : 'none',
                                transition: 'transform 0.2s',
                                display: 'inline-block',
                            }}>▶</span>
                            {expanded === i ? 'Hide details' : 'View highlights'}
                        </button>

                        {expanded === i && (
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                borderTop: '1px solid rgba(167,139,250,0.1)',
                                paddingTop: '14px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                            }}>
                                {project.highlights.map((h, hi) => (
                                    <li key={hi} style={{
                                        display: 'flex',
                                        gap: '10px',
                                        fontSize: '13px',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.5,
                                    }}>
                                        <span style={{ color: project.accent, flexShrink: 0, marginTop: '2px' }}>→</span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;