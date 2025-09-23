'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import './home.css';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const faceRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const face = faceRef.current;
      if (!face) return;

      const { left, top, width, height } = face.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      const angle = Math.atan2(y, x) * (180 / Math.PI);
      face.style.transform = `rotate(${angle}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <img
            src="/face.png"
            alt="Face"
            ref={faceRef}
            className="face-img"
          />
          <h1 className="fade-in">Hi, I'm <span className="highlight">Shubham Solanki</span></h1>
          <p className="fade-in delay-1">A passionate Web Developer & Designer & Founder</p>
        </div>
      </section>

      <section className="important-links">
        <h2>Important Links</h2>
        <div className="links-grid">
          <a href="https://github.com/iamshubham1704" target="_blank" rel="noopener noreferrer" className="link-card">GitHub</a>
          <a href="https://linkedin.com/in/shubham-solanki-902331321" target="_blank" rel="noopener noreferrer" className="link-card">LinkedIn</a>
          <a href="https://www.campusmart.store/" target="_blank" rel="noopener noreferrer" className="link-card">Campusmart</a>
        </div>
      </section>

      <section className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/project1.png" alt="Project 1" className="project-img" />
            <div className="project-info">
              <h3>Stock Market Analyser</h3>
              <p>●Full stack Project : Next js , css , API
                ●Fetching Graphs of Stocks using API and providing Trends. There is also a AI assistant Stocky for any stock market related Query.
              </p>
              <a href="https://github.com/iamshubham1704/stock-market-analyser" target="_blank" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/project2.jpg" alt="Project 2" className="project-img" />
            <div className="project-info">
              <h3>URL - Shortener</h3>
              <p> ● Full stack Project : Next js , tailwind , mongodb , express
                ● Gives a short URL of your long URL in a customized way</p>
              <a href="https://github.com/iamshubham1704/Url-shortner" target="_blank" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/project3.png" alt="Project 2" className="project-img" />
            <div className="project-info">
              <h3>Resume-Builder</h3>
              <p> ● Full stack Project : Next js, CSS , mongodb , express
                ● Use of Next Auth for Authentication. AI powered resume making by providing Details of yours</p>
              <a href="https://github.com/iamshubham1704/Resume-Builder" target="_blank" className="project-link">View Project</a>
            </div>
          </div>

        </div>
      </section>
      <section className="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-date">Aug 2025 – Present</div>
            <div className="experience-content">
              <h3>Co-Founder</h3>
              <h4>Campusmart</h4>
              <p>Biggest Marketplace of MAIT</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">Feb 2025 – Present</div>
            <div className="experience-content">
              <h3>Co-Founder</h3>
              <h4>Pyice</h4>
              <p>AI powered Extension</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">Sep 2025 – Present</div>
            <div className="experience-content">
              <h3>AI Mentor</h3>
              <h4>Google Developer Group, MAIT</h4>
              <p></p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">Aug 2024 – Present</div>
            <div className="experience-content">
              <h3>Member</h3>
              <h4>Startup Shpere</h4>
              <p>Won HackwithMait Hackathon.</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">April 2025 – Present</div>
            <div className="experience-content">
              <h3>ISP</h3>
              <h4>Internshala</h4>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">June 2025 – Present</div>
            <div className="experience-content">
              <h3>Contributor</h3>
              <h4>Socail Summer of Code</h4>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">March 2025 – May 2025</div>
            <div className="experience-content">
              <h3>Head of Finance</h3>
              <h4>AnalytixLabs</h4>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">Jan 2025 – April 2025</div>
            <div className="experience-content">
              <h3>Startup Development Head</h3>
              <h4>Bizbyte</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/html.png" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill-card">
            <img src="/css.png" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill-card">
            <img src="/js.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-card">
            <img src="/typescript.svg" alt="JavaScript" />
            <span>TypeScript</span>
          </div>
          <div className="skill-card">
            <img src="/Python.svg" alt="JavaScript" />
            <span>Python</span>
          </div>
          <div className="skill-card">
            <img src="/react.png" alt="React" />
            <span>React</span>
          </div>
          <div className="skill-card">
            <img src="/nextjs.png" alt="Next.js" />
            <span>Next.js</span>
          </div>
          <div className="skill-card">
            <img src="/mongo.png" alt="MongoDB" />
            <span>MongoDB</span>
          </div>
          <div className="skill-card">
            <img src="/android.svg" alt="Android" />
            <span>Android</span>
          </div>
          <div className="skill-card">
            <img src="/Aurdino.svg" alt="MongoDB" />
            <span>Aurdino</span>
          </div>
          <div className="skill-card">
            <img src="/aws.svg" alt="MongoDB" />
            <span>AWS</span>
          </div>
          <div className="skill-card">
            <img src="/c.svg" alt="MongoDB" />
            <span>C</span>
          </div>
          <div className="skill-card">
            <img src="/chatjs.svg" alt="MongoDB" />
            <span>Chart.js</span>
          </div>
          <div className="skill-card">
            <img src="/dart.svg" alt="MongoDB" />
            <span>Dart</span>
          </div>
          <div className="skill-card">
            <img src="/figma.svg" alt="MongoDB" />
            <span>Figma</span>
          </div>
          <div className="skill-card">
            <img src="/firebase.svg" alt="MongoDB" />
            <span>Firebase</span>
          </div>
          <div className="skill-card">
            <img src="/flutter.svg" alt="MongoDB" />
            <span>Flutter</span>
          </div>
          <div className="skill-card">
            <img src="/git.svg" alt="MongoDB" />
            <span>Git</span>
          </div>
        </div>
      </section>

<Footer/>
    </div>
  );
}


