import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "@/assets/logo1.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="items-center transition-transform hover:scale-105 ml-4"
        >
          <img src={logo} alt="TAP Academy Logo" className="h-8" />

        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/dbms"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            DBMS
          </Link>
          <Link
            to="/computer-networks"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            CN
          </Link>
          <Link
            to="/operating-system"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary mr-24"
          >
            OS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
