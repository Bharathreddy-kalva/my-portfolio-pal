import { useState } from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:bharathreddykalva10@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
      <section className="section-container min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-2">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Feel free to reach out — I'd love to hear from you!
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project idea, job opportunity, or just want to say hi — my inbox is always open.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:bharathreddykalva10@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <AiOutlineMail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">bharathreddykalva10@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Bharathreddy-kalva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <AiFillGithub size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="text-foreground font-medium">Bharathreddy-kalva</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bharathreddy-kalva-201b6a1a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <FaLinkedinIn size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="text-foreground font-medium">Bharath Reddy Kalva</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </motion.button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
