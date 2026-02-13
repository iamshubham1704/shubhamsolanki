import React from 'react';

export default function ExperienceOutput() {
    const exp = [
        { date: "Aug 2025 – Present", role: "Co-Founder", org: "CollegePaglu(formally campusmart", desc: "All in one app for college students" },
        { date: "Sep 2025 – Present", role: "AI Mentor", org: "Google Developer Group, MAIT", desc: "" },
        { date: "Aug 2024 – Present", role: "Co-Head (Venture lab)", org: "Startup sphere", desc: "Won HackwithMait Hackathon. | Provided exclusive Tech guidance to team" },
        { date: "June 2025", role: "Contributor", org: "Social Summer of Code", desc: "" },
        { date: "March 2025 – May 2025", role: "Head of Finance", org: "AnalytixLabs", desc: "" }
    ];

    return (
        <div style={{ paddingLeft: '1rem', borderLeft: '2px solid #333' }}>
            {exp.map((e, i) => (
                <div key={i} style={{ marginBottom: '1.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-1.4rem', top: '0.2rem', color: '#555' }}>●</div>
                    <div style={{ color: 'var(--neon-magenta)', fontSize: '0.85rem' }}>{e.date}</div>
                    <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>{e.role}</div>
                    <div style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>@ {e.org}</div>
                    {e.desc && <div style={{ color: '#888', marginTop: '0.2rem', fontSize: '0.9rem' }}>{e.desc}</div>}
                </div>
            ))}
        </div>
    );
}
