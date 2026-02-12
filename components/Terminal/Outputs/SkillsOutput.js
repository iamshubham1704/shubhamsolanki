import React from 'react';

export default function SkillsOutput() {
    const skills = [
        "JavaScript", "TypeScript", "Python",
        "React", "Next.js", "MongoDB", "React Native", "IOT","C", "C++","Nodejs"
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {skills.map((s, i) => (
                <span key={i} style={{
                    background: 'rgba(0, 255, 255, 0.1)',
                    color: 'var(--neon-cyan)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 255, 255, 0.2)'
                }}>
                    {s}
                </span>
            ))}
        </div>
    );
}
