import { ReactNode } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const summary =
  "Software Engineer with 2+ years of professional experience building scalable, highly available backend systems and user-facing consumer products. Shipped microservices for a platform with 300,000+ daily agent logins across 150 countries, optimized distributed data pipelines achieving 35% latency reductions, and delivered full-stack applications end-to-end. Strong foundation in Java, Spring Boot, PostgreSQL, and AWS. Experienced in microservices architecture, system design, unit/integration testing, and Agile delivery. MS in Computer Science from University at Buffalo (Dec 2025).";

const experience = [
  {
    title: "Software Engineer",
    company: "Ozonetel (oneCXI)",
    dates: "Aug 2022 – Jun 2024",
    bullets: [
      "Architected and delivered RESTful microservices using Java/Spring Boot and OOP design patterns, serving a platform with 300,000+ daily agent logins across 150 countries with 99.9% high availability",
      "Built and optimized user-facing React web applications, reducing page load time by 30% (from ~4s to ~2.8s) through lazy loading and bundle optimization",
      "Accelerated API response time by 35% via SQL query optimization, composite indexing, and service-layer refactoring in a PostgreSQL environment",
      "Secured application with JWT-based authentication and RBAC using Spring Security; authored unit and integration tests with JUnit and Mockito, reducing security vulnerabilities by 40%",
      "Deployed and monitored microservices on AWS EC2 with CloudWatch alerting, improving system reliability and reducing unplanned downtime by 25%",
      "Collaborated cross-functionally with product managers, data scientists, QA, and design teams via Agile/Scrum; consistently delivered end-user features on schedule across 10+ sprint cycles",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Ozonetel",
    dates: "Jun 2022 – Aug 2022",
    bullets: [
      "Designed and deployed a CI/CD pipeline using Jenkins, Git, and Docker — reduced deployment time by 75% across dev, staging, and production environments",
      "Onboarded 2 engineers to the new release workflow and authored pipeline documentation, cutting average release preparation time from 4 hours to under 30 minutes",
    ],
  },
];

const projects = [
  {
    title: "HireSignal — Company Growth Intelligence Platform",
    tech: "React, NestJS, PostgreSQL, Redis, BullMQ, Groq AI, Docker, GitHub Actions",
    bullets: [
      "Built a full-stack platform aggregating real-time signals from GitHub, Adzuna job boards, and NewsAPI to score companies on hiring momentum",
      "Architected async distributed data pipelines with NestJS and BullMQ processing signals across 3 external APIs concurrently using Promise.allSettled",
      "Integrated Groq AI (llama-3.1-8b-instant) to generate real-time natural language company health summaries",
      "Introduced Redis caching layer and PostgreSQL persistence via Prisma ORM; deployed with Docker Compose and GitHub Actions CI/CD",
    ],
  },
  {
    title: "PackMind — AI Travel Packing Assistant",
    tech: "Next.js, TypeScript, Supabase, Clerk, Groq AI, Twilio, Vercel",
    bullets: [
      "Built and deployed a full-stack consumer web app that generates personalized weather-aware packing lists using LLM (Groq llama-3.3-70b)",
      "Engineered a conversational AI trip-creation flow and automated WhatsApp/SMS notification pipeline with Twilio",
      "Implemented AI-powered destination intelligence module for local conditions, cultural notes, and resource warnings",
      "Integrated Clerk authentication and Supabase PostgreSQL for secure multi-user data persistence",
    ],
  },
  {
    title: "Personal Finance Intelligence Platform",
    tech: "React, Spring Boot, PostgreSQL, Plaid API, OAuth2",
    bullets: [
      "Developed full-stack application integrating Plaid API for real-time financial data aggregation across checking, savings, and investment accounts",
      "Designed fault-tolerant data pipelines with idempotent transaction processing and OAuth2-based secure authentication",
      "Applied algorithmic optimization on database queries improving data retrieval latency by 25% (from ~600ms to ~450ms)",
      "Built rule-based anomaly and pattern detection engine to surface behavioral insights and flag irregular transactions",
    ],
  },
];

const skills = [
  { cat: "Languages", items: "Java, Python, Go (learning), C, C++, JavaScript, TypeScript, SQL" },
  { cat: "Frameworks & Libraries", items: "Spring Boot, NestJS, React, Node.js, REST APIs, Microservices, GraphQL" },
  { cat: "Databases", items: "PostgreSQL, MySQL, Redis, Prisma ORM, indexing & query optimization" },
  { cat: "Cloud & Infrastructure", items: "AWS (EC2, RDS, CloudWatch, S3), Docker, Linux, CI/CD, GitHub Actions" },
  { cat: "AI Integration", items: "Groq API, LLM-powered features, prompt engineering" },
  { cat: "Testing", items: "JUnit, Mockito, Jest, unit testing, integration testing" },
  { cat: "Tools & Practices", items: "Git, Jenkins, BullMQ, Agile/Scrum, system design" },
  { cat: "Concepts", items: "Distributed Systems, Scalable Systems, High Availability, OOP, Concurrency, Networking, OS" },
];

const education = [
  {
    school: "University at Buffalo (SUNY)",
    dates: "Aug 2024 – Dec 2025",
    degree: "Master of Science in Computer Science",
    location: "Buffalo, NY",
    extra: "Coursework: Distributed Systems, Operating Systems, Database Systems, Algorithms, Computer Networks",
  },
  {
    school: "S.N.I.S.T",
    dates: "Jul 2022",
    degree: "Bachelor of Engineering in Electrical and Computer Engineering",
    location: "India",
  },
];

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="text-base sm:text-lg font-bold text-primary uppercase tracking-wider pb-2 mb-4 border-b-2 border-primary/30">
    {children}
  </h3>
);

const Resume = () => {
  return (
    <PageTransition>
      <section className="section-container min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-8">
              My <span className="text-primary">Resume</span>
            </h2>
            <div className="flex justify-center mb-10">
              <a
                href="/Kalva_Resume.docx"
                download
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <AiOutlineDownload size={20} />
                Download CV
              </a>
            </div>
          </ScrollReveal>

          {/* Resume document */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-[800px] mx-auto bg-card text-card-foreground rounded-lg shadow-xl border border-border p-6 sm:p-10 md:p-14">
              {/* Header */}
              <div className="text-center mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  Bharath Reddy Kalva
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm text-muted-foreground mt-3">
                  <a href="tel:+17164003422" className="hover:text-primary transition-colors">
                    +1 (716) 400-3422
                  </a>
                  <span className="text-muted-foreground/50">•</span>
                  <a href="mailto:bharathreddykalva10@gmail.com" className="hover:text-primary transition-colors">
                    bharathreddykalva10@gmail.com
                  </a>
                  <span className="text-muted-foreground/50">•</span>
                  <a
                    href="https://linkedin.com/in/bharathreddy-kalva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/bharathreddy-kalva
                  </a>
                  <span className="text-muted-foreground/50">•</span>
                  <a
                    href="https://github.com/kalva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/kalva
                  </a>
                  <span className="text-muted-foreground/50">•</span>
                  <span>Buffalo, NY</span>
                </div>
              </div>

              <hr className="border-t-2 border-primary mb-6" />

              {/* Professional Summary */}
              <div className="mb-8">
                <SectionHeading>Professional Summary</SectionHeading>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{summary}</p>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <SectionHeading>Experience</SectionHeading>
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.title + exp.company}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h4 className="font-bold text-foreground text-sm sm:text-base">
                          {exp.title}{" "}
                          <span className="font-normal text-muted-foreground">— {exp.company}</span>
                        </h4>
                        <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                          {exp.dates}
                        </span>
                      </div>
                      <ul className="list-disc list-outside ml-5 mt-2 space-y-1.5 text-sm text-foreground/80 leading-relaxed">
                        {exp.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <SectionHeading>Projects</SectionHeading>
                <div className="space-y-6">
                  {projects.map((proj) => (
                    <div key={proj.title}>
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{proj.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground italic mb-2">{proj.tech}</p>
                      <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-foreground/80 leading-relaxed">
                        {proj.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <SectionHeading>Technical Skills</SectionHeading>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {skills.map((s) => (
                    <p key={s.cat} className="text-sm text-foreground/80 leading-relaxed">
                      <span className="font-bold text-foreground">{s.cat}: </span>
                      {s.items}
                    </p>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <SectionHeading>Education</SectionHeading>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.school}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h4 className="font-bold text-foreground text-sm sm:text-base">{edu.school}</h4>
                        <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                          {edu.dates}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80">
                        {edu.degree} | {edu.location}
                      </p>
                      {edu.extra && <p className="text-sm text-muted-foreground mt-1">{edu.extra}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;
