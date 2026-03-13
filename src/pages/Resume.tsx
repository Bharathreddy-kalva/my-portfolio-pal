import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
  return (
    <section className="section-container min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          My <span className="text-primary">Resume</span>
        </h2>

        {/* Download button */}
        <div className="flex justify-center mb-12">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <AiOutlineDownload size={20} />
            Download CV
          </a>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">Experience</h3>
          
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h4 className="text-lg font-bold text-foreground">Software Engineer</h4>
                <span className="text-sm text-muted-foreground">Aug 2022 – Jun 2024</span>
              </div>
              <p className="text-primary font-medium mb-3">Ozonetel (oneCXI)</p>
              <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                <li>• Built responsive web apps with React.js, improving load speed by 30%</li>
                <li>• Optimized scalable REST APIs with Spring Boot for 5,000+ daily users</li>
                <li>• Implemented JWT + Spring Security, reducing vulnerabilities by 40%</li>
                <li>• Deployed on AWS, achieving 99.9% uptime</li>
                <li>• Collaborated in agile sprints with cross-functional teams</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h4 className="text-lg font-bold text-foreground">Software Engineer Intern</h4>
                <span className="text-sm text-muted-foreground">Jun 2022 – Aug 2022</span>
              </div>
              <p className="text-primary font-medium mb-3">Ozonetel (oneCXI)</p>
              <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                <li>• Designed CI/CD pipeline with Jenkins, Git, Docker reducing manual effort by 80%</li>
                <li>• Cut deployment time from 3 hours to 45 minutes for 10+ developers</li>
                <li>• Reduced deployment errors by 70% through automated workflows</li>
                <li>• Improved release cycle efficiency by 35%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="text-lg font-bold text-foreground">University at Buffalo</h4>
              <p className="text-muted-foreground">MS in Computer Science • GPA: 3.1</p>
              <p className="text-sm text-muted-foreground/70">Jan 2026 (Expected)</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="text-lg font-bold text-foreground">S.N.I.S.T, India</h4>
              <p className="text-muted-foreground">BE in Electrical & Computer Engineering • GPA: 3.0</p>
              <p className="text-sm text-muted-foreground/70">Jul 2022</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-primary">Skills</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { cat: "Languages", items: "Python, Java, C, C++, JavaScript, SQL, Verilog" },
              { cat: "Systems & Low-Level", items: "OS, Socket Programming, Multi-threading, Concurrency" },
              { cat: "Web & Backend", items: "React.js, Spring Boot, REST APIs, Docker, AWS" },
              { cat: "Networking", items: "NS-3, TCP/IP, Wireshark, Network Protocols" },
            ].map((s) => (
              <div key={s.cat} className="p-4 rounded-xl bg-card border border-border">
                <h5 className="font-bold text-foreground mb-2">{s.cat}</h5>
                <p className="text-sm text-muted-foreground">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
