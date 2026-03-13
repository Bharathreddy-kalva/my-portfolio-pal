import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Distributed Multi-Client Chat System",
    description:
      "High-performance client-server application supporting real-time messaging for 50+ concurrent users. Custom application-layer protocol handling 15+ commands including send, broadcast, and block. Multi-threaded server with non-blocking I/O.",
    tech: ["C", "Linux", "Socket Programming", "Multi-Threading"],
    github: "https://github.com/Bharathreddy-kalva",
  },
  {
    title: "Pintos OS Kernel Enhancements",
    description:
      "Priority donation system solving priority inversion, advanced MLFQS with fixed-point arithmetic for dynamic thread priority adjustment. Revamped timer_sleep() eliminating busy-waiting, reducing CPU utilization significantly.",
    tech: ["C", "Operating Systems", "Synchronization"],
    github: "https://github.com/Bharathreddy-kalva",
  },
  {
    title: "16-Bit MIPS-like Processor",
    description:
      "Single-cycle, non-pipelined 16-bit processor supporting 20+ R-type, I-type, and J-type instructions. Designed 8+ core components (ALU, Control Unit, Register File) and deployed on Xilinx Basys3 FPGA.",
    tech: ["Verilog", "FPGA", "Computer Architecture"],
    github: "https://github.com/Bharathreddy-kalva",
  },
  {
    title: "NS-3 Network Simulation & Analysis",
    description:
      "Simulated 4 network topologies across 30+ scenarios analyzing routing and congestion control. Processed 10 GB of trace data, modeled TCP congestion with automated performance plotting.",
    tech: ["C++", "TCP/IP", "Wireshark", "NS-3"],
    github: "https://github.com/Bharathreddy-kalva",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <section className="section-container min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-2">
              My Recent <span className="text-primary">Works</span>
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Here are a few projects I've worked on recently.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <AiFillGithub size={18} />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
