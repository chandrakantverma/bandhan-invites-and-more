import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-elegant font-bold text-foreground mb-6">
              About Vowsnvision
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Vowsnvision, we believe every love story deserves to be told beautifully.
              With years of experience in wedding stationery design, we specialize in creating 
              timeless, elegant invitations that capture the essence of your special day.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our passion lies in transforming your vision into stunning paper goods that your 
              guests will cherish. From intimate gatherings to grand celebrations, we craft each 
              piece with meticulous attention to detail and personalized care.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-1">500+</h3>
                <p className="text-muted-foreground">Happy Couples</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-1">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-elegant font-semibold text-foreground mb-2">
                      Personalized Approach
                    </h3>
                    <p className="text-muted-foreground">
                      We work closely with each couple to understand their vision and create 
                      unique designs that reflect their personality and style.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-elegant font-semibold text-foreground mb-2">
                      Quality Craftsmanship
                    </h3>
                    <p className="text-muted-foreground">
                      Using premium materials and meticulous attention to detail, we ensure 
                      every piece meets the highest standards of quality and elegance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;