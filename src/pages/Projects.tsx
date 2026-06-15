import { AiFillGithub } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const badgeStyles: Record<string, string> = {
  "Hackathon Project": "bg-orange-500/10 text-orange-600 border-orange-500/20",
  "Personal Project": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "Professional Project": "bg-purple-500/10 text-purple-600 border-purple-500/20",
};

type Project = {
  title: string;
  subtitle?: string;
  badge: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string | null;
  live?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "PackMind",
    subtitle: "AI Travel Packing Assistant",
    badge: "Personal Project",
    tagline:
      "A full-stack web app that generates personalized, weather-aware packing lists using AI.",
    description:
      "Users create trips through a conversational AI chat or guided form and get an LLM-generated packing list tailored to their destination, weather, and activities. The app includes AI-researched destination intelligence — cultural notes, weather warnings, and travel tips — and sends automated WhatsApp/SMS packing reminders before departure via a Twilio + Vercel Cron pipeline. Built the full stack end-to-end including auth, database schema, AI integration, and messaging pipeline.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase", "Clerk", "Groq API", "Twilio", "OpenWeatherMap", "Vercel Cron Jobs"],
    github: "https://github.com/Bharathreddy-kalva/packmind",
    live: "https://packmind-two.vercel.app",
  },
  {
    title: "Research Brain",
    badge: "Hackathon Project",
    tagline:
      "A living research brain that tracks topics, remembers what it has already learned, and proactively updates you through Slack or Discord.",
    description:
      "Built during a hackathon using RocketRide for AI research workflows, Butterbase as the backend and database, XTrace as the long-term memory layer, and Photon for Slack/Discord communication. The system continuously monitors topics, stays silent when nothing meaningful changes, and sends concise updates only when new developments are detected. Users can also drop links directly in Slack/Discord and the app reads, compares against memory, and replies with what changed.",
    tech: ["RocketRide", "Butterbase", "XTrace", "Photon", "AI", "Research", "Automation", "Slack", "Discord"],
    github: null,
    live: "https://research-brain.butterbase.dev",
  },
  {
    title: "ML Model Serving & Monitoring Platform",
    badge: "Personal Project",
    tagline:
      "An end-to-end ML platform for serving, monitoring, and automatically retraining production models.",
    description:
      "Built a FastAPI inference API with an MLflow model registry and A/B testing between model versions. Added a real-time PSI-based data drift detection dashboard that auto-triggers retraining when drift is detected, backed by a full CI/CD pipeline with GitHub Actions deploying to Render via Docker containers.",
    tech: ["Python", "FastAPI", "MLflow", "React", "PostgreSQL", "Docker", "GitHub Actions"],
    github: "https://github.com/Bharathreddy-kalva/ml-serving-platform",
  },
  {
    title: "Distributed Log Monitoring System",
    badge: "Personal Project",
    tagline:
      "A distributed observability platform for collecting, streaming, and visualizing microservice logs in real time.",
    description:
      "Collects logs from simulated microservices, streams them through Kafka, stores them in PostgreSQL, and visualizes them on a real-time dashboard. Features an event-driven architecture, REST APIs for querying, and interactive charts with error rate monitoring.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "Python", "React"],
    github: "https://github.com/Bharathreddy-kalva/distributed-log-monitoring-system",
    live: "https://log-harmony-dashboard.vercel.app",
  },
  {
    title: "Distributed Multi-Client Chat System",
    badge: "Personal Project",
    tagline:
      "A high-performance multi-threaded chat server supporting real-time messaging for 50+ concurrent users.",
    description:
      "Built a custom application-layer protocol handling 15+ commands including send, broadcast, and block, served by a multi-threaded server with non-blocking I/O for high-performance concurrent connections.",
    tech: ["C", "Linux", "Socket Programming", "Multi-Threading"],
    github: null,
  },
];

const getUrlLabel = (project: Project) => {
  const url = project.live || project.github;
  if (!url) return "project";
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
};

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
              >
                {/* Browser chrome mockup */}
                <div className="border-b border-border">
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 truncate rounded bg-muted px-2 py-0.5 text-center text-[10px] text-muted-foreground">
                      {getUrlLabel(project)}
                    </div>
                  </div>
                  <div className="flex aspect-video items-center justify-center [background-image:var(--gradient-card)]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="px-4 text-center font-mono text-sm font-semibold text-primary/40">
                        {project.title}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span
                    className={`mb-3 inline-block self-start rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[project.badge]}`}
                  >
                    {project.badge}
                  </span>
                  <h3 className="mb-2 font-mono text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                    {project.subtitle && (
                      <span className="block text-sm font-normal text-muted-foreground">
                        {project.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {project.tagline}
                  </p>
                  <div className="mb-4 flex flex-1 flex-wrap items-start gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {(project.github || project.live) && (
                    <div className="flex items-center gap-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                        >
                          <AiFillGithub size={18} />
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/20 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/30"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
