import React from 'react';

export default function AboutOutput() {
    return (
        <div style={{ padding: '1rem', border: '1px dashed #333', borderRadius: '8px' }}>
            <h2 style={{ color: 'var(--neon-magenta)' }}>// ABOUT_ME</h2>
            <p style={{ marginTop: '0.5rem', lineHeight: '1.6', color: '#ccc' }}>
                Hi, I'm <span style={{ color: 'var(--neon-cyan)' }}>Shubham Solanki</span>.
                <br />
                I don’t just write code — I build products.
                <br />
                From AI automation tools to scalable digital platforms, I turn ideas into production-ready systems.
            </p>
        </div>
    );
}
