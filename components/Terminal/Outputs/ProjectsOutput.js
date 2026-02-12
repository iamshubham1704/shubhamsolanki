import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function ProjectsOutput() {
    const projects = [
        {
            title: "Blockchain Voting System",
            tech: "Ethereum, MetaMask, Solidity",
            desc: "Solving the problem of Nation Wide Low voting turnout percentage. Decentralized and secure.",
            link: "https://github.com/iamshubham1704/Blockchain-Indian-Voting-System",
        },
        {
            title: "AI HR Assistance - Cheat Detection",
            tech: "Python, Flask, Socket.io, OpenCV",
            desc: "Helps HR conduct cheat-free interviews with real-time detection.",
            link: "https://github.com/iamshubham1704/Cheating",
        },
        {
            title: "Stock Market Analyser",
            tech: "Next.js, API, AI",
            desc: "Fetching Graphs of Stocks using API and providing Trends. Includes AI assistant Stocky.",
            link: "https://github.com/iamshubham1704/stock-market-analyser",
        },

    ];

    const freelance = [
        {
            title: "Microkahani.com",
            role: "Micro Drama App | React Native, Node.js, AWS",
            desc: "A mobile application for micro dramas. Built the entire backend on Node.js and hosted on AWS.",
            link: "https://microkahani.com"
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3 style={{ color: 'var(--neon-magenta)', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>// OPEN_SOURCE_PROJECTS</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {projects.map((p, i) => (
                        <div key={i} className="terminal-card" style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <h4 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>{p.title}</h4>
                            <div style={{ color: 'var(--neon-cyan)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>[{p.tech}]</div>
                            <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem' }}>{p.desc}</p>
                            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.9rem' }}>
                                View Source <ExternalLink size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 style={{ color: 'var(--neon-magenta)', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>// FREELANCE_WORK</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {freelance.map((p, i) => (
                        <div key={i} className="terminal-card" style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <h4 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>{p.title}</h4>
                            <div style={{ color: 'var(--neon-cyan)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>[{p.role}]</div>
                            <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem' }}>{p.desc}</p>
                            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.9rem' }}>
                                Visit Site <ExternalLink size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
