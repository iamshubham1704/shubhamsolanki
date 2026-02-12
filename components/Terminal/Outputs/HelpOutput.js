import React from 'react';

export default function HelpOutput() {
    const commands = [
        { cmd: 'about', desc: 'Who am I?' },
        { cmd: 'projects', desc: 'View my work' },
        { cmd: 'experience', desc: 'My journey' },
        { cmd: 'skills', desc: 'Tech stack' },
        { cmd: 'milestones', desc: 'Achievements' },
        { cmd: 'contact', desc: 'Get in touch' },
        { cmd: 'clear', desc: 'Clear terminal' },
    ];

    return (
        <div style={{ paddingLeft: '1rem' }}>
            <div style={{ color: '#ccc', marginBottom: '0.5rem' }}>Available Commands:</div>
            {commands.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: 'var(--neon-green)', minWidth: '100px' }}>{c.cmd}</span>
                    <span style={{ color: '#888' }}>- {c.desc}</span>
                </div>
            ))}
        </div>
    );
}
