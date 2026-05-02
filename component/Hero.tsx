"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/milestones/1.jpg",
    "/milestones/2.png",
    "/milestones/3.png",
    "/milestones/4.png",
    "/milestones/5.png",
    "/milestones/featured.png",
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <section id="hero" className="relative min-h-screen bg-[#05070d] text-white flex items-center justify-center px-6">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

            <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT (same as before) */}
                <div>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I&apos;m{" "}
                        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Shubham Solanki
                        </span>
                    </h1>

                    <p className="mt-5 text-gray-400 max-w-lg">
                        Product Engineer · AI Builder <br />
                        I build systems that people actually use.
                    </p>
                    {/* Stats */}
                    <div className="mt-8 flex gap-6 sm:gap-10 flex-wrap">

                        <div>
                            <h3 className="text-2xl font-semibold text-white">30+</h3>
                            <p className="text-gray-400 text-sm">Projects Built</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">100+</h3>
                            <p className="text-gray-400 text-sm">Students Mentored</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">5+</h3>
                            <p className="text-gray-400 text-sm">Clients Worked With</p>
                        </div>

                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex items-center gap-4">

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/iamshubhamsolanki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2] hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-black/20"
                        >
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0A66C2] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/iamshubham1704"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-black/20"
                        >
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>

                        {/* X (Twitter) */}
                        <a
                            href="https://x.com/solankii019"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-black/20"
                        >
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>

                    </div>

                </div>


                {/* RIGHT (Slider) */}
                <div className="relative flex justify-center w-full mt-10 md:mt-0">

                    {/* Glow */}
                    <div className="absolute w-full max-w-[450px] h-64 sm:h-[350px] bg-blue-500/20 blur-3xl rounded-full"></div>

                    {/* Slider Card */}
                    <div className="relative w-full max-w-[420px] h-60 sm:h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">

                        {/* Image */}
                        <Image
                            src={images[current]}
                            alt="milestone"
                            width={420}
                            height={300}
                            className="w-full h-full object-contain bg-black"
                            priority
                        />

                        {/* Left Button */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full"
                            suppressHydrationWarning
                        >
                            ◀
                        </button>

                        {/* Right Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full"
                            suppressHydrationWarning
                        >
                            ▶
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-3 w-full flex justify-center gap-2">
                            {images.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-2 rounded-full ${i === current ? "w-6 bg-blue-400" : "w-2 bg-gray-400"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;