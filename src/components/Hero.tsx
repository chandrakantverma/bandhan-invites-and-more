import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding-invitations.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft opacity-50"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-elegant font-bold text-foreground mb-6">
              Creating Beautiful
              <span className="gradient-hero bg-clip-text text-transparent"> Wedding Memories</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Exquisite wedding invitations and stationery crafted with love, attention to detail, 
              and timeless elegance. Let us bring your dream wedding vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="elegant" size="lg" className="font-medium">
                View Our Work
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                Get Started
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Beautiful wedding invitations with elegant calligraphy and floral details"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;