import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Globe } from "lucide-react";
const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Enterprise-grade solutions with 99.9% uptime and professional installation standards"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local businesses and strengthening California's telecommunications infrastructure"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Carrier-approved technology and certified technicians ensuring optimal performance"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Leading-edge cellular offload solutions that prepare businesses for the future of connectivity"
    }
  ];
  const logoUrl = new URL('/lovable-uploads/df5dc330-0f95-4275-afe8-948e7195b633.png', import.meta.env.BASE_URL).href;

  return (
    <div>
      {/* Hero Section */}
      <section className="banking-section bg-gradient-to-br from-accent to-background">
        <div className="banking-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About California Carrier Offload
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're dedicated to improving business connectivity across California through 
              grant-funded cellular offload solutions that benefit businesses and communities alike.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="banking-section">
        <div className="banking-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  California Carrier Offload was created to address the growing need for reliable cellular 
                  connectivity in business environments while supporting the broader telecommunications 
                  infrastructure across the state.
                </p>
                <p>
                  Through strategic grant funding, we provide small and medium businesses with access to 
                  enterprise-level cellular offload technology that was previously only available to large 
                  corporations.
                </p>
                <p>
                  Our program not only improves connectivity for individual businesses but also reduces 
                  strain on local cellular towers, creating benefits for entire communities.
                </p>
              </div>
            </div>
            <div className="banking-card">
              <div className="text-center p-8">
                <img 
                  src={logoUrl}
                  alt="California Carrier Offload" 
                  className="h-24 w-auto mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Grant-Funded Program
                </h3>
                <p className="text-muted-foreground">
                  Our initiative is supported by state and federal grants designed to improve 
                  telecommunications infrastructure and support business growth across California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="banking-section bg-secondary">
        <div className="banking-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our commitment to California businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="banking-card text-center h-full">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="banking-section">
        <div className="banking-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="banking-card">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Program Impact
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Businesses Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">$0</div>
                    <div className="text-sm text-muted-foreground">Cost to Businesses</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Program?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>No Cost to You:</strong> Our grant-funded program covers all equipment, 
                  installation, and ongoing service costs for qualifying businesses.
                </p>
                <p>
                  <strong>Professional Installation:</strong> Certified technicians ensure optimal 
                  performance with minimal disruption to your business operations.
                </p>
                <p>
                  <strong>Ongoing Support:</strong> 24/7 monitoring and technical support keep your 
                  connectivity solution running smoothly.
                </p>
                <p>
                  <strong>Future-Ready Technology:</strong> Our solutions support current and emerging 
                  cellular technologies, protecting your investment.
                </p>
              </div>
              <Button 
                variant="default" 
                className="banking-button-primary mt-6"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfzQCqdOwmaYm18HuOiB1SAQOQhePpJKQgbLyUlC7RW4mLRcw/viewform', '_blank')}
              >
                Apply Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;