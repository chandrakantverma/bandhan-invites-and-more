import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  ShoppingBag
} from "lucide-react";

const services = [
  // Printed Invitation Products
  {
    icon: Heart,
    title: "Wedding Cards",
    description: "Luxury, premium, eco-friendly, and budget-friendly wedding invitations crafted to perfection.",
    category: "Printed Invitations"
  },
  {
    icon: Box,
    title: "Box Invitations",
    description: "Elegant box invitations with sweets, dry fruits, gifts, or wedding favors included.",
    category: "Printed Invitations"
  },
  {
    icon: Scroll,
    title: "Scroll Invitations",
    description: "Royal touch scroll invitations with Rajasthani and Mughal style designs.",
    category: "Printed Invitations"
  },
  {
    icon: Scissors,
    title: "Laser-Cut Invitations",
    description: "Intricate laser-cut designs that add an elegant and sophisticated touch.",
    category: "Printed Invitations"
  },
  {
    icon: Sparkles,
    title: "Foil-Stamped & Embossed",
    description: "Premium foil-stamped and embossed cards for a luxurious finish.",
    category: "Printed Invitations"
  },
  {
    icon: FileText,
    title: "Pocketfold Invitations",
    description: "Elegant pocketfold and envelope style invitations with multiple inserts.",
    category: "Printed Invitations"
  },
  
  // Digital Invitation Products
  {
    icon: Monitor,
    title: "E-Invites",
    description: "Modern JPEG/PDF digital invitations perfect for WhatsApp sharing.",
    category: "Digital Invitations"
  },
  {
    icon: Video,
    title: "Animated Wedding Videos",
    description: "Beautiful animated videos with couple names, dates, venue, and background music.",
    category: "Digital Invitations"
  },
  {
    icon: Globe,
    title: "Wedding Websites",
    description: "Complete wedding websites with RSVP, love story, itinerary, and gallery.",
    category: "Digital Invitations"
  },
  {
    icon: Camera,
    title: "AR Invitations",
    description: "Augmented reality invitations that come alive when scanned.",
    category: "Digital Invitations"
  },
  
  // Wedding Stationery Add-Ons
  {
    icon: Calendar,
    title: "Save-the-Date Cards",
    description: "Beautiful save the date cards to announce your wedding date in style.",
    category: "Wedding Stationery"
  },
  {
    icon: Gift,
    title: "Thank You Cards",
    description: "Elegant thank you cards to express gratitude to your guests.",
    category: "Wedding Stationery"
  },
  {
    icon: MapPin,
    title: "Wedding Signages",
    description: "Custom welcome boards, table place cards, menu cards, and wedding signages.",
    category: "Wedding Stationery"
  },
  {
    icon: Palette,
    title: "Custom Seals & Stamps",
    description: "Personalized envelope seals, stickers, stamps, and wax seals.",
    category: "Wedding Stationery"
  },
  
  // Custom Wedding Merchandise
  {
    icon: ShoppingBag,
    title: "Wedding Favors",
    description: "Custom printed bags, pouches, and boxes for wedding favor packaging.",
    category: "Wedding Merchandise"
  },
  {
    icon: Users,
    title: "Guest Welcome Kits",
    description: "Photo booth props, welcome bags, water bottles, and personalized gifts.",
    category: "Wedding Merchandise"
  }
];

const Services = () => {
  const categories = [
    "Printed Invitations",
    "Digital Invitations", 
    "Wedding Stationery",
    "Wedding Merchandise"
  ];

  const getServicesByCategory = (category: string) => {
    return services.filter(service => service.category === category);
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
                <Card key={index} className="shadow-soft hover:shadow-elegant transition-smooth border-border/50 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-elegant">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;