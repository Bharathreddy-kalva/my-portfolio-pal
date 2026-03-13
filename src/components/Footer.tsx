import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Designed & Built by Bharath Reddy Kalva
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Bharathreddy-kalva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
          >
            <AiFillGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/bharathreddy-kalva-201b6a1a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="mailto:bharathreddykalva10@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
          >
            <AiOutlineMail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
