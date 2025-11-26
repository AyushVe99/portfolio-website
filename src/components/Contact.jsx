import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    emailjs.sendForm(
      "service_5b7vxdp",
      "template_4p2s1fr",
      e.target,
      "ivKdLZ3t786sMqr-0"
    ).then(
      () => {
        setSent(true);
        setError("");
        setFormData({ name: "", email: "", message: "" });
      },
      () => {
        setError("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">
            Get In Touch
          </span>
        </h2>

        <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-white/10 shadow-2xl">
          {sent && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 text-green-500 rounded-lg">
              Message sent successfully!
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 text-red-500 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#252526] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#252526] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-[#252526] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-electric-blue to-electric-purple text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
