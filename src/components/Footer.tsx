import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-soft border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-elegant font-bold text-foreground mb-4">
            Bandhan Creations
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Creating beautiful wedding memories through elegant stationery and timeless design.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-gold fill-current" />
            <span>for beautiful love stories</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Bandhan Creations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;