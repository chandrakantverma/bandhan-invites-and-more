import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  Heart, 
  Calendar, 
  Palette, 
  Sparkles, 
  Gift, 
  Users, 
  Scroll,
  Box,
  Scissors,
  Monitor,
  Video,
  Globe,
  FileText,
  MapPin,
  Camera,
  ShoppingBag,
  ExternalLink,
  Phone,
  Mail
} from "lucide-react";

const services = [
  // Printed Invitation Products
  {
    icon: Heart,
    title: "Wedding Cards",
    description: "Luxury, premium, eco-friendly, and budget-friendly wedding invitations crafted to perfection.",
    category: "Printed Invitations",
    details: "Choose from our extensive collection of wedding invitation designs including traditional, modern, and fusion styles. Available in various paper qualities and finishes.",
    pricing: "Starting from ₹25 per card",
    features: ["Premium paper quality", "Custom designs", "Multiple color options", "Fast delivery"]
  },
  {
    icon: Box,
    title: "Box Invitations",
    description: "Elegant box invitations with sweets, dry fruits, gifts, or wedding favors included.",
    category: "Printed Invitations",
    details: "Luxurious box invitations that create a memorable first impression. Perfect for destination weddings and special celebrations.",
    pricing: "Starting from ₹150 per box",
    features: ["Premium packaging", "Custom inserts", "Gift options", "Elegant presentation"]
  },
  {
    icon: Scroll,
    title: "Scroll Invitations",
    description: "Royal touch scroll invitations with Rajasthani and Mughal style designs.",
    category: "Printed Invitations",
    details: "Traditional scroll invitations that add a royal touch to your wedding. Perfect for traditional and cultural celebrations.",
    pricing: "Starting from ₹80 per scroll",
    features: ["Traditional designs", "Handcrafted details", "Cultural themes", "Premium materials"]
  },
  {
    icon: Scissors,
    title: "Laser-Cut Invitations",
    description: "Intricate laser-cut designs that add an elegant and sophisticated touch.",
    category: "Printed Invitations",
    details: "Precision laser-cut invitations with intricate patterns and designs that create stunning visual impact.",
    pricing: "Starting from ₹60 per card",
    features: ["Intricate patterns", "Precision cutting", "Modern designs", "Unique shapes"]
  },
  {
    icon: Sparkles,
    title: "Foil-Stamped & Embossed",
    description: "Premium foil-stamped and embossed cards for a luxurious finish.",
    category: "Printed Invitations",
    details: "Add luxury and elegance with foil stamping and embossing techniques. Available in gold, silver, and rose gold.",
    pricing: "Starting from ₹45 per card",
    features: ["Foil stamping", "Embossing effects", "Luxury finish", "Multiple foil colors"]
  },
  {
    icon: FileText,
    title: "Pocketfold Invitations",
    description: "Elegant pocketfold and envelope style invitations with multiple inserts.",
    category: "Printed Invitations",
    details: "Sophisticated pocketfold designs with multiple inserts for detailed wedding information and RSVP cards.",
    pricing: "Starting from ₹35 per card",
    features: ["Multiple inserts", "Elegant design", "Detailed information", "RSVP included"]
  },
  
  // Digital Invitation Products
  {
    icon: Monitor,
    title: "E-Invites",
    description: "Modern JPEG/PDF digital invitations perfect for WhatsApp sharing.",
    category: "Digital Invitations",
    details: "Eco-friendly digital invitations that can be easily shared via WhatsApp, email, or social media platforms.",
    pricing: "Starting from ₹500 per design",
    features: ["Eco-friendly", "Easy sharing", "Multiple formats", "Quick delivery"]
  },
  {
    icon: Video,
    title: "Animated Wedding Videos",
    description: "Beautiful animated videos with couple names, dates, venue, and background music.",
    category: "Digital Invitations",
    details: "Create stunning animated wedding invitation videos that tell your love story with beautiful animations and music.",
    pricing: "Starting from ₹2,500 per video",
    features: ["Custom animations", "Background music", "Personalized content", "HD quality"]
  },
  {
    icon: Globe,
    title: "Wedding Websites",
    description: "Complete wedding websites with RSVP, love story, itinerary, and gallery.",
    category: "Digital Invitations",
    details: "Comprehensive wedding websites that serve as a central hub for all wedding information and guest interactions.",
    pricing: "Starting from ₹5,000 per website",
    features: ["RSVP system", "Love story section", "Photo gallery", "Event itinerary"]
  },
  {
    icon: Camera,
    title: "AR Invitations",
    description: "Augmented reality invitations that come alive when scanned.",
    category: "Digital Invitations",
    details: "Cutting-edge AR technology that brings your invitations to life with interactive 3D elements and animations.",
    pricing: "Starting from ₹3,500 per invitation",
    features: ["AR technology", "Interactive elements", "3D animations", "Unique experience"]
  },
  
  // Wedding Stationery Add-Ons
  {
    icon: Calendar,
    title: "Save-the-Date Cards",
    description: "Beautiful save the date cards to announce your wedding date in style.",
    category: "Wedding Stationery",
    details: "Elegant save the date cards that give your guests advance notice of your special day with beautiful designs.",
    pricing: "Starting from ₹20 per card",
    features: ["Early announcement", "Beautiful designs", "Multiple styles", "Custom dates"]
  },
  {
    icon: Gift,
    title: "Thank You Cards",
    description: "Elegant thank you cards to express gratitude to your guests.",
    category: "Wedding Stationery",
    details: "Show appreciation to your guests with beautifully designed thank you cards that match your wedding theme.",
    pricing: "Starting from ₹15 per card",
    features: ["Gratitude expression", "Matching designs", "Personal messages", "Quality printing"]
  },
  {
    icon: MapPin,
    title: "Wedding Signages",
    description: "Custom welcome boards, table place cards, menu cards, and wedding signages.",
    category: "Wedding Stationery",
    details: "Complete signage solutions for your wedding venue including welcome boards, table numbers, and directional signs.",
    pricing: "Starting from ₹200 per signage",
    features: ["Custom designs", "Multiple sizes", "Weather resistant", "Easy installation"]
  },
  {
    icon: Palette,
    title: "Custom Seals & Stamps",
    description: "Personalized envelope seals, stickers, stamps, and wax seals.",
    category: "Wedding Stationery",
    details: "Add personal touches with custom seals, stamps, and stickers that reflect your wedding theme and style.",
    pricing: "Starting from ₹50 per seal",
    features: ["Personalized designs", "Multiple materials", "Custom text", "Premium quality"]
  },
  
  // Custom Wedding Merchandise
  {
    icon: ShoppingBag,
    title: "Wedding Favors",
    description: "Custom printed bags, pouches, and boxes for wedding favor packaging.",
    category: "Wedding Merchandise",
    details: "Beautiful packaging solutions for wedding favors that your guests will treasure as keepsakes.",
    pricing: "Starting from ₹30 per favor",
    features: ["Custom printing", "Multiple sizes", "Quality materials", "Bulk discounts"]
  },
  {
    icon: Users,
    title: "Guest Welcome Kits",
    description: "Photo booth props, welcome bags, water bottles, and personalized gifts.",
    category: "Wedding Merchandise",
    details: "Complete welcome kits for your guests including personalized items and photo booth accessories.",
    pricing: "Starting from ₹200 per kit",
    features: ["Personalized items", "Photo booth props", "Welcome bags", "Custom branding"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "Printed Invitations",
    "Digital Invitations", 
    "Wedding Stationery",
    "Wedding Merchandise"
  ];

  const getServicesByCategory = (category: string) => {
    return services.filter(service => service.category === category);
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleContactClick = () => {
    // You can add contact functionality here
    window.location.href = "#contact";
  };

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-elegant font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional printed invitations to modern digital solutions, we offer comprehensive 
            wedding stationery and merchandise to make your special day unforgettable.
          </p>
        </div>
        
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-elegant font-semibold text-center text-foreground mb-8">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getServicesByCategory(category).map((service, index) => (
                <Card 
                  key={index} 
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 border-border/50 group cursor-pointer hover:scale-105 hover:border-primary/50"
                  onClick={() => handleServiceClick(service)}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-elegant group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-sm text-primary font-medium group-hover:text-primary/80 transition-colors">
                      Click for details
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Service Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedService && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg gradient-accent flex items-center justify-center">
                      <selectedService.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-elegant">{selectedService.title}</DialogTitle>
                      <p className="text-muted-foreground">{selectedService.category}</p>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedService.details}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Pricing</h4>
                    <p className="text-primary font-medium text-lg">{selectedService.pricing}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                    <Button 
                      onClick={handleContactClick}
                      className="flex-1"
                      size="lg"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleContactClick}
                      className="flex-1"
                      size="lg"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;