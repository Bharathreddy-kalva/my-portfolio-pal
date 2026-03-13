import aboutImg from "@/assets/about-illustration.png";
import {
  SiPython, SiJavascript, SiReact, SiSpringboot, SiDocker,
  SiGit, SiMysql, SiCplusplus, SiLinux
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const skills = [
  { icon: SiPython, name: "Python", level: 85 },
  { icon: FaJava, name: "Java", level: 90 },
  { icon: SiCplusplus, name: "C/C++", level: 80 },
  { icon: SiJavascript, name: "JavaScript", level: 85 },
  { icon: SiReact, name: "React.js", level: 88 },
  { icon: SiSpringboot, name: "Spring Boot", level: 82 },
  { icon: SiDocker, name: "Docker", level: 75 },
  { icon: FaAws, name: "AWS", level: 70 },
  { icon: SiGit, name: "Git", level: 90 },
  { icon: SiMysql, name: "SQL", level: 85 },
  { icon: SiLinux, name: "Linux", level: 80 },
  { icon: TbBrandVscode, name: "VS Code", level: 92 },
];

const tools = [
  "Vivado", "Eclipse", "Jira", "Jupyter Notebook", "Wireshark", "NS-3",
];

const About = () => {
  return (
    <PageTransition>
      <section className="section-container min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* About me */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <ScrollReveal className="flex-1" direction="left">
              <h2 className="text-3xl font-bold mb-2">
                Know Who <span className="text-primary">I AM</span>
              </h2>
              <div className="w-16 h-1 bg-primary rounded mb-6" />
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Hi! I'm <strong className="text-foreground">Bharath Reddy Kalva</strong>,
                  a graduate student pursuing my MS in Computer Science at the
                  <strong className="text-foreground"> University at Buffalo</strong>,
                  specializing in Systems Programming, Networks, and Full-Stack Development.
                </p>
                <p>
                  Previously, I worked as a Software Engineer at <strong className="text-foreground">Ozonetel (oneCXI)</strong> where
                  I built responsive web applications with React.js and scalable REST APIs with Spring Boot,
                  serving 5,000+ daily active users.
                </p>
                <p>
                  I'm passionate about building secure, high-performance systems. My interests span across:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Full-Stack Web Development 🌐</li>
                  <li>Systems & Low-Level Programming ⚙️</li>
                  <li>Cloud Infrastructure & DevOps ☁️</li>
                  <li>Network Systems & Security 🔒</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal className="flex-1 flex justify-center" direction="right">
              <img src={aboutImg} alt="About me" className="w-full max-w-sm drop-shadow-2xl" />
            </ScrollReveal>
          </div>

          {/* Skills with progress bars */}
          <ScrollReveal className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">
              Professional <span className="text-primary">Skillset</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded mx-auto mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon className="text-2xl text-primary" />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Tools */}
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-2">
              Tools I <span className="text-primary">Use</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded mx-auto mb-10" />
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>

          {/* Achievements */}
          <ScrollReveal className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-2">
              Achievements & <span className="text-primary">Highlights</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded mx-auto mb-10" />
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { emoji: "🎓", title: "MS in Computer Science", desc: "University at Buffalo — GPA 3.1" },
                { emoji: "💼", title: "2+ Years Industry Experience", desc: "Built scalable systems for 5,000+ daily users at Ozonetel" },
                { emoji: "🏗️", title: "Full-Stack Expertise", desc: "React, Spring Boot, AWS — end-to-end product delivery" },
                { emoji: "⚙️", title: "Systems Programming", desc: "OS kernel enhancements, FPGA processor design, network simulation" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  <span className="text-2xl mb-3 block">{item.emoji}</span>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
