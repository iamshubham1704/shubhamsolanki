'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import './CommandPalette.css';

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'info', text: 'Welcome to the System Terminal. Type "help" for commands.' }
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [output]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newOutput = [...output, { type: 'user', text: `> ${input}` }];

            let response = '';
            switch (cmd) {
                case 'help':
                    response = 'Available commands: help, about, projects, experience, contact, clear, exit';
                    break;
                case 'about':
                    document.querySelector('.hero')?.scrollIntoView({ behavior: 'smooth' });
                    response = 'Navigating to About section...';
                    setIsOpen(false);
                    break;
                case 'projects':
                    document.querySelector('.projects')?.scrollIntoView({ behavior: 'smooth' });
                    response = 'Navigating to Projects section...';
                    setIsOpen(false);
                    break;
                case 'experience':
                    document.querySelector('.experience')?.scrollIntoView({ behavior: 'smooth' });
                    response = 'Navigating to Experience section...';
                    setIsOpen(false);
                    break;
                case 'contact':
                    document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
                    response = 'Navigating to Contact section...';
                    setIsOpen(false);
                    break;
                case 'clear':
                    setOutput([]);
                    setInput('');
                    return;
                case 'exit':
                    setIsOpen(false);
                    setInput('');
                    return;
                default:
                    response = `Command not found: ${cmd}. Type "help" for available commands.`;
            }

            setOutput([...newOutput, { type: 'system', text: response }]);
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="command-overlay" onClick={() => setIsOpen(false)}>
                    <motion.div
                        className="command-modal"
                        onClick={e => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    >
                        <div className="command-header">
                            <div className="flex items-center gap-2">
                                <Terminal size={18} />
                                <span>COMMAND PROMPT</span>
                            </div>
                            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
                        </div>
                        <div className="terminal-content">
                            {output.map((line, i) => (
                                <div key={i} className={`line ${line.type}`}>
                                    {line.text}
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>
                        <div className="input-area">
                            <span className="prompt">{">"}</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                placeholder="Type a command..."
                                autoFocus
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
