import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface BookCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
}

const BookCard = ({ title, description, icon: Icon, href, gradient }: BookCardProps) => {
  return (
    <Link to={href} className="group block">
      <div className="relative h-80 w-64 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-105">
        {/* Book spine */}
        <div className="absolute left-0 top-0 h-full w-12 rounded-l-lg bg-gradient-to-b from-primary-dark to-primary shadow-lg" />
        
        {/* Book cover */}
        <div className={`absolute left-8 top-0 h-full w-full rounded-r-lg ${gradient} shadow-card transition-shadow duration-500 group-hover:shadow-card-hover`}>
          <div className="relative flex h-full flex-col items-center justify-center p-6 text-center text-primary-foreground">
            {/* Icon */}
            <div className="mb-6 rounded-full bg-white/20 p-6 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Icon className="h-12 w-12" />
            </div>
            
            {/* Title */}
            <h3 className="mb-3 text-2xl font-bold leading-tight">{title}</h3>
            
            {/* Description - visible on hover */}
            <p className="text-sm font-medium opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {description}
            </p>
            
            {/* Decorative line */}
            <div className="absolute bottom-8 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/30 transition-all duration-500 group-hover:w-24" />
          </div>
        </div>
        
        {/* Book pages effect */}
        <div className="absolute left-10 top-1 h-full w-full rounded-r-lg bg-white/10 shadow-md" />
        <div className="absolute left-9 top-0.5 h-full w-full rounded-r-lg bg-white/5 shadow-sm" />
      </div>
    </Link>
  );
};

export default BookCard;
