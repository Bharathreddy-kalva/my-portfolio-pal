import Typewriter from "typewriter-effect";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import heroImg from "@/assets/hero-illustration.png";

const Home = () => {
  return (
    <section className="section-container min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-in-up">
            <h1 className="text-lg text-muted-foreground mb-2">Hi There! 👋</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              I'M <span className="text-primary text-glow">BHARATH REDDY KALVA</span>
            </h2>
            <div className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-8">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Full-Stack Developer",
                    "Systems Programmer",
                    "Cloud Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Strategic and solutions-driven Software Engineer specializing in secure, full-stack development 
              and systems programming, with experience building scalable applications supporting 5,000+ daily users.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 transition-colors border border-primary/30"
              >
                <AiFillGithub size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bharathreddy-kalva-201b6a1a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border"
              >
                <FaLinkedinIn size={18} />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={heroImg}
              alt="Developer illustration"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
