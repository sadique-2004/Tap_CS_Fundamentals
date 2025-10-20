import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container flex h-16 items-center justify-center px-4">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by 
          <span className="font-semibold text-primary">TAP Academy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
