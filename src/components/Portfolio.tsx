import { Card, CardContent } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Romantic Save the Dates",
    description: "Elegant save the date cards with gold foil details"
  },
  {
    image: portfolio2,
    title: "Luxury Wedding Suite",
    description: "Complete wedding invitation suite in blush and gold"
  },
  {
    image: portfolio3,
    title: "Modern Minimalist",
    description: "Clean and sophisticated design with rose gold accents"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-elegant font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover some of our most beautiful wedding invitation designs and stationery suites 
            that have helped couples celebrate their love stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-20 transition-smooth"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-elegant font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;