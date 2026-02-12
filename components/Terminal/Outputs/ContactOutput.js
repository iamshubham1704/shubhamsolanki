import React from 'react';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

export default function ContactOutput() {
    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="https://github.com/iamshubham1704" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/shubham-solanki-902331321" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0077b5' }}>
                <Linkedin size={18} /> LinkedIn
            </a>
            <a href="mailto:iamshubham1719@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EA4335' }}>
                <Mail size={18} /> Gmail
            </a>

        </div>
    );
}
