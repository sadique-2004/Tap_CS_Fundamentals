import { FaLinkedin } from "react-icons/fa";
import { ExternalLink, Youtube } from "lucide-react";
import logo from "@/assets/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      <div className="container mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* TAP Branding */}
          <div className="md:col-span-1  flex-col gap-3 text-center md:text-left flex items-center">
            <img src={logo} alt="TAP Academy Logo" className=" w-24 " />
            <p className="text-xs text-slate-400 mt-1">
              <span className="text-blue-400">Gamify</span> Learning ·{" "}
              <span className="text-blue-400">Simplify</span> Employment
            </p>
            <div className="flex flex-row gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/thetapacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@TAPACADEMY"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </a>
              <a
                href="https://www.thetapacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Website
              </a>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="md:col-span-2 flex flex-col justify-center items-center text-center px-4">
            <p className="text-sm md:text-base text-gray-300 italic">
              Master CS Fundamentals today, crack interviews tomorrow.
              Everything that you learn is a step closer to your dream job!
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Remember: CS Fundamentals are your superpowers!
            </p>
          </div>

          {/* Personal Promotion */}
          <div className="flex flex-col items-center  gap-3 text-center pb-2">
            <div className="mr-3">
              <p className="text-base font-bold text-white tracking-wide">
                MD SADIQUE
              </p>
              <span className="font-light text-blue-400">{`SDE & Technical Trainer`}</span>
            
              <p className="text-xs text-gray-400 italic">
                Tech Evangelist • Code Whisperer • Lifetime Learner
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/mdsadique5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition duration-200 text-xs font-semibold group shadow-lg"
            >
              <FaLinkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row  justify-center items-center gap-2 text-sm text-slate-400">
          <span>© {currentYear} TAP Academy</span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span>
            Built with <span className="text-red-400 font-bold">♥</span> by
            Sadique <span className="text-blue-400">@Trainer & SDE</span>
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
