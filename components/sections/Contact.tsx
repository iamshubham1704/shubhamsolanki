"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const contactInfo = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "iamshubham1719@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Delhi, India",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent transition-all text-sm";

  return (
    <section id="contact" className="relative bg-[#05070d] text-white py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let&apos;s"
          highlight="Connect"
          description="Have a project idea, a question, or just want to say hi? My inbox is always open."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:pt-4"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/3 transition-colors border border-transparent hover:border-white/8 group"
              >
                <div className={`${item.bg} p-3.5 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-0.5">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-500/8 to-cyan-500/5 border border-blue-500/15">
              <p className="text-sm text-gray-400 leading-relaxed">
                I typically respond within{" "}
                <span className="text-blue-400 font-medium">24 hours</span>. For urgent
                matters, DM me on{" "}
                <a
                  href="https://www.linkedin.com/in/iamshubhamsolanki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/3 border border-white/8 p-7 rounded-3xl backdrop-blur-md shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 ml-1">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} suppressHydrationWarning />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 ml-1">Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} suppressHydrationWarning />
              </div>
            </div>
            <div className="space-y-1.5 mb-4">
              <label className="text-xs text-gray-500 ml-1">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can I help?" className={inputClass} suppressHydrationWarning />
            </div>
            <div className="space-y-1.5 mb-6">
              <label className="text-xs text-gray-500 ml-1">Message</label>
              <textarea rows={4} name="message" value={formData.message} onChange={handleChange} required placeholder="Your message..." className={`${inputClass} resize-none`} suppressHydrationWarning />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20 text-sm"
              suppressHydrationWarning
            >
              {status === "idle" && (<>Send Message <Send size={15} /></>)}
              {status === "loading" && (<>Sending... <Loader2 size={15} className="animate-spin" /></>)}
              {status === "success" && (<>Message Sent! <CheckCircle size={15} /></>)}
              {status === "error" && (<>Error Sending <XCircle size={15} /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
