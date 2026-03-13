import aboutImg from "@/assets/about-illustration.png";
import {
  SiPython, SiJavascript, SiReact, SiSpringboot, SiDocker,
  SiGit, SiMysql, SiCplusplus, SiLinux
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const skills = [
  { icon: SiPython, name: "Python" },
  { icon: FaJava, name: "Java" },
  { icon: SiCplusplus, name: "C/C++" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React.js" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: SiDocker, name: "Docker" },
  { icon: FaAws, name: "AWS" },
  { icon: SiGit, name: "Git" },
  { icon: SiMysql, name: "SQL" },
  { icon: SiLinux, name: "Linux" },
  { icon: TbBrandVscode, name: "VS Code" },
];

const tools = [
  "Vivado", "Eclipse", "Jira", "Jupyter Notebook", "Wireshark", "NS-3",
];

const About = () => {
  return (
    <section className="section-container min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* About me */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1 animate-fade-in-up">
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
          </div>
          <div className="flex-1 flex justify-center">
            <img src={aboutImg} alt="About me" className="w-full max-w-sm drop-shadow-2xl" />
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2">
            Professional <span className="text-primary">Skillset</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mb-10" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <skill.icon className="text-3xl text-primary" />
                <span className="text-xs text-muted-foreground font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-2">
            Tools I <span className="text-primary">Use</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
