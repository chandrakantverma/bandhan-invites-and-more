import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, Palette, Sparkles, Gift, Users } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Invitations",
    description: "Elegant and personalized wedding invitations that set the perfect tone for your special day."
  },
  {
    icon: Calendar,
    title: "Save the Dates",
    description: "Beautiful save the date cards to announce your wedding date in style."
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Bespoke designs tailored to your unique style and wedding theme."
  },
  {
    icon: Sparkles,
    title: "Premium Finishes",
    description: "Luxury finishes including foil stamping, letterpress, and embossing."
  },
  {
    icon: Gift,
    title: "Wedding Stationery",
    description: "Complete wedding stationery suites including programs, menus, and thank you cards."
  },
  {
    icon: Users,
    title: "Event Invitations",
    description: "Beautiful invitations for all your special events and celebrations."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-elegant font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From wedding invitations to complete stationery suites, we create beautiful designs 
            that capture the essence of your special moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-smooth border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
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
    </section>
  );
};

export default Services;