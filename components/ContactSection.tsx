"use client";

import dynamic from "next/dynamic";
import { useState, type ChangeEvent, type FormEvent } from "react";

const ContactGlobe = dynamic(() => import("./ContactGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white/20">
      Loading Universe...
    </div>
  ),
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send");

      setFormData({ name: "", email: "", message: "" });
      setSubmitMessage("Thank you! I'll be in touch soon.");
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative overflow-hidden flex items-center py-20"
    >
      {/* Deep dark background container matching the reference */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#050505] rounded-[30px] p-8 md:p-12 lg:p-16 border border-[#1a1a1a] shadow-2xl overflow-hidden">
          {/* Subtle purple glow blob in the background */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3 z-0"></div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Column: Form */}
            <div className="flex flex-col justify-center">
              <div className="mb-10">
                <p className="text-gray-500 text-xs font-bold tracking-[0.2em] mb-4 uppercase">
                  GET IN TOUCH
                </p>
                <h2 className="text-white text-6xl md:text-7xl font-black tracking-tighter">
                  Contact<span className="text-purple-500">.</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-gray-400 text-sm font-bold ml-1">
                    Your Name
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 bg-[#101016] rounded-xl text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-[#16161e] transition-all text-base border border-transparent group-hover:border-[#222]"
                      placeholder="What's your name?"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-400 text-sm font-bold ml-1">
                    Your Email
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 bg-[#101016] rounded-xl text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-[#16161e] transition-all text-base border border-transparent group-hover:border-[#222]"
                      placeholder="What's your email?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-400 text-sm font-bold ml-1">
                    Your Message
                  </label>
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-5 bg-[#101016] rounded-xl text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-[#16161e] transition-all outline-none resize-none text-base border border-transparent group-hover:border-[#222]"
                      placeholder="What do you want to say?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1a1a23] hover:bg-[#252530] text-white px-10 py-5 rounded-xl font-bold transition-all text-lg shadow-lg hover:shadow-purple-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-auto border border-[#2a2a35]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitMessage && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {submitMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Right Column: 3D Globe */}
            <div className="hidden lg:flex h-[600px] w-full items-center justify-center relative perspective-container">
              <ContactGlobe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
