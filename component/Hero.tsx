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
        <section className="relative min-h-screen bg-[#05070d] text-white flex items-center justify-center px-6">

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
                    <div className="mt-8 flex gap-10 flex-wrap">

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
                    <div className="mt-6 flex items-center gap-4">

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/iamshubhamsolanki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
                        >
                            <Image src="/linkedin.png" alt="linkedin" width={40} height={40} className="w-10 h-10" />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/iamshubham1704"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
                        >
                            <Image src="/github.png" alt="github" width={40} height={40} className="w-10 h-10 invert" />
                        </a>

                    </div>

                </div>


                {/* RIGHT (Slider) */}
                <div className="relative flex justify-center">

                    {/* Glow */}
                    <div className="absolute w-112.5 h-87.5 bg-blue-500/20 blur-3xl rounded-full"></div>

                    {/* Slider Card */}
                    <div className="relative w-105 h-75 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

                        {/* Image */}
                        <Image
                            src={images[current]}
                            alt="milestone"
                            width={420}
                            height={300}
                            className="w-full h-full object-contain bg-black"
                        />

                        {/* Left Button */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full"
                        >
                            ◀
                        </button>

                        {/* Right Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full"
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