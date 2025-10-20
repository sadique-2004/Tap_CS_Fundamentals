import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-md">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">TAP Academy</span>
            <span className="text-xs text-muted-foreground">CS Fundamentals</span>
          </div>
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
            Computer Networks
          </Link>
          <Link 
            to="/operating-system" 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Operating System
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
