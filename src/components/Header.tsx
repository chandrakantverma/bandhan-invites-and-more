import { Button } from "@/components/ui/button";
import logo from "@/assets/bandhan-creations-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Bandhan Creations Logo" 
            className="h-10 w-auto"
          />
          <h1 className="text-2xl font-elegant font-bold text-foreground">
            Bandhan Creations
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
          <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">Portfolio</a>
          <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
        </nav>
        
        <Button variant="elegant" size="lg" className="hidden md:inline-flex">
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;