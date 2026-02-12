import React from 'react';

export default function MilestonesOutput() {
    const milestones = [
        {
            date: "Sept 2024",
            title: "Won HackwithMait 5.0",
            desc: "Secured 1st position in the college-wide hackathon (1st Semester)."
        },
        {
            date: "2024",
            title: "Won GDG SRCASW Hackathon",
            desc: "Recognized for innovative problem solving."
        },
        {
            date: "2024-2025",
            title: "5+ Hackathon Finalist",
            desc: "Consistently delivering high-quality prototypes in competitive environments."
        },
        {
            date: "2025",
            title: "Created Campusmart",
            desc: "Built and launched the biggest marketplace for MAIT campus."
        }
    ];

    const images = [
        "/milestones/featured.png",
        "/milestones/1.jpg",
        "/milestones/4.png",
        "/milestones/5.png"
    ];

    const [selectedImg, setSelectedImg] = React.useState(null);

    return (
        <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--neon-cyan)' }}>
            <h3 style={{ color: 'var(--neon-magenta)', marginBottom: '1rem' }}>// MILESTONES & ACHIEVEMENTS</h3>

            <div style={{ marginBottom: '2rem' }}>
                {milestones.map((m, i) => (
                    <div key={i} style={{ marginBottom: '1.5rem', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '-1.4rem', top: '0.2rem', color: 'var(--neon-cyan)' }}>★</div>
                        <div style={{ color: '#888', fontSize: '0.85rem' }}>[{m.date}]</div>
                        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>{m.title}</div>
                        <div style={{ color: '#ccc', marginTop: '0.2rem', fontSize: '0.9rem' }}>{m.desc}</div>
                    </div>
                ))}
            </div>

            {selectedImg ? (
                <div style={{ position: 'relative', border: '1px solid var(--neon-cyan)', padding: '0.5rem', borderRadius: '4px', background: 'rgba(0,0,0,0.8)' }}>
                    <button
                        onClick={() => setSelectedImg(null)}
                        style={{
                            position: 'absolute', top: '10px', right: '10px',
                            background: 'red', color: 'white', border: 'none',
                            padding: '0.2rem 0.5rem', cursor: 'pointer', fontWeight: 'bold'
                        }}
                    >
                        [X] CLOSE
                    </button>
                    <img
                        src={selectedImg}
                        alt="Expanded"
                        style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'contain' }}
                    />
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {images.map((src, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedImg(src)}
                            style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '4px', border: '1px solid #333', transition: 'transform 0.2s' }}
                            className="gallery-item"
                        >
                            <img
                                src={src}
                                alt={`Milestone ${i + 1}`}
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                    opacity: 0.9,
                                    transition: 'opacity 0.3s'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.opacity = 1;
                                    e.currentTarget.parentElement.style.transform = 'scale(1.02)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.opacity = 0.9;
                                    e.currentTarget.parentElement.style.transform = 'scale(1)';
                                }}
                            />
                            <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888', padding: '0.2rem', background: '#111' }}>
                                [IMG_00{i + 1}.JPG]
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
