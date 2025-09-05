import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-elegant font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create your dream wedding invitations? Let's discuss your vision 
            and bring your love story to life through beautiful stationery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-elegant">Let's Create Something Beautiful</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Wedding Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your vision</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your dream wedding style, color preferences, and any specific ideas you have in mind..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button variant="elegant" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-elegant font-semibold text-foreground mb-1">
                      Email Us
                    </h3>
                    <p className="text-muted-foreground">hello@vowsnvision.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-elegant font-semibold text-foreground mb-1">
                      Call Us
                    </h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-elegant font-semibold text-foreground mb-1">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">Monday - Saturday: 10 AM - 7 PM</p>
                    <p className="text-muted-foreground">Sunday: By Appointment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-elegant font-semibold text-foreground mb-1">
                      Studio Location
                    </h3>
                    <p className="text-muted-foreground">Available for consultation by appointment</p>
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

export default Contact;