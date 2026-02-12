'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';
import HelpOutput from './Outputs/HelpOutput';
import AboutOutput from './Outputs/AboutOutput';
import ProjectsOutput from './Outputs/ProjectsOutput';
import ExperienceOutput from './Outputs/ExperienceOutput';
import SkillsOutput from './Outputs/SkillsOutput';
import ContactOutput from './Outputs/ContactOutput';
import MilestonesOutput from './Outputs/MilestonesOutput';

export default function Terminal() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'HELLO WORLD. SYSTEM ONLINE.' },
        { type: 'system', content: 'TYPE "help" TO START.' },
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const rawCmd = input.trim().toLowerCase();
            // Remove "show " prefix if present to allow "show projects"
            const cmd = rawCmd.replace(/^show\s+/, '');

            const newHistory = [...history, { type: 'user', content: `visitor@portfolio:~$ ${input}` }];

            let outputComponent = null;

            switch (cmd) {
                case 'help':
                    outputComponent = <HelpOutput />;
                    break;
                case 'about':
                case 'about me':
                    outputComponent = <AboutOutput />;
                    break;
                case 'projects':
                case 'work':
                    outputComponent = <ProjectsOutput />;
                    break;
                case 'experience':
                case 'exp':
                    outputComponent = <ExperienceOutput />;
                    break;
                case 'skills':
                case 'stack':
                    outputComponent = <SkillsOutput />;
                    break;
                case 'contact':
                case 'socials':
                    outputComponent = <ContactOutput />;
                    break;
                case 'milestones':
                case 'achievements':
                    outputComponent = <MilestonesOutput />;
                    break;
                case 'hello':
                case 'hi':
                case 'hey':
                    outputComponent = <div style={{ color: '#fff' }}>Hello! Welcome to my interactive resume.</div>;
                    break;
                case 'clear':
                case 'cls':
                    setHistory([]);
                    setInput('');
                    return;
                case '':
                    break;
                default:
                    outputComponent = <div className="error-msg">Command not found: "{rawCmd}". Try "help", "show projects", or "about".</div>;
            }

            if (outputComponent) {
                newHistory.push({ type: 'component', content: outputComponent });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <div className="terminal-container" onClick={() => inputRef.current?.focus()}>
            <div className="terminal-history">
                {history.map((item, index) => (
                    <div key={index} className="history-item">
                        {item.type === 'user' ? (
                            <div className="user-cmd">{item.content}</div>
                        ) : item.type === 'system' ? (
                            <div className="system-msg">{item.content}</div>
                        ) : (
                            <div className="component-output">{item.content}</div>
                        )}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            <div className="terminal-input-area">
                <span className="prompt">visitor@portfolio:~$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="terminal-input"
                    autoFocus
                />
                <div className="cursor-block"></div>
            </div>
        </div>
    );
}
