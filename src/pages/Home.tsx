import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Shield, TrendingUp, Zap, CheckCircle, Users } from "lucide-react";

const Home = () => {
  const benefits = [
    {
      icon: Wifi,
      title: "Enhanced Coverage",
      description: "Eliminate dead zones and provide seamless cellular connectivity for your customers"
    },
    {
      icon: TrendingUp,
      title: "Boost Revenue",
      description: "Improved connectivity leads to longer customer stays and increased satisfaction"
    },
    {
      icon: Shield,
      title: "Carrier-Grade Quality",
      description: "Professional installation and enterprise-level equipment for reliable performance"
    },
    {
      icon: Zap,
      title: "Easy Integration",
      description: "Works with your existing Wi-Fi infrastructure - no complex changes required"
    }
  ];

  const qualifications = [
    "Small to medium businesses",
    "Retail stores and restaurants",
    "Professional offices",
    "Event venues and conference centers",
    "Healthcare facilities",
    "Educational institutions"
  ];

  const logoUrl = new URL('/lovable-uploads/df5dc330-0f95-4275-afe8-948e7195b633.png', import.meta.env.BASE_URL).href;

  return (
    <div>
      {/* Hero Section */}
      <section className="banking-section bg-gradient-to-br from-accent to-background">
        <div className="banking-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Better Cell Coverage For Your Business.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get grant-funded cellular offload solutions that improve connectivity for your customers 
                while reducing burden on cell towers. Free installation and service available for qualifying businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="banking-button-primary"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfzQCqdOwmaYm18HuOiB1SAQOQhePpJKQgbLyUlC7RW4mLRcw/viewform', '_blank')}
                >
                  Check Your Eligibility
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/how-it-works">Learn How It Works</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="banking-card text-center">
                <img 
                  src={logoUrl}
                  alt="California Carrier Offload" 
                  className="h-32 w-auto mx-auto mb-4"
                />
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Grant Funded</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Free Installation</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Professional Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="banking-section">
        <div className="banking-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Transform Your Business Connectivity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cellular offload solutions provide enterprise-grade connectivity that improves customer experience 
              and supports local cellular infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="banking-card text-center h-full">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Explanation */}
      <section className="banking-section bg-secondary">
        <div className="banking-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Is Cellular Offload?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cellular offload uses your existing Wi-Fi infrastructure to extend and improve cellular coverage 
                  inside your business. When customers' phones connect to your enhanced network, they experience 
                  better signal strength and faster data speeds.
                </p>
                <p>
                  This technology reduces the load on nearby cell towers while providing your customers with 
                  seamless connectivity. The result is improved customer satisfaction, longer visit durations, 
                  and enhanced business operations.
                </p>
                <p>
                  Through our grant program, qualifying businesses receive professional installation and ongoing 
                  service at no cost, making this enterprise-level technology accessible to small and medium businesses.
                </p>
              </div>
              <Button 
                variant="default" 
                className="banking-button-primary mt-6"
                asChild
              >
                <a href="/how-it-works">Learn More Details</a>
              </Button>
            </div>
            <div className="banking-card">
              <div className="space-y-6">
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Who Qualifies?
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{qualification}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="banking-section">
        <div className="banking-container">
          <Card className="banking-card text-center max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Improve Your Business Connectivity?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join businesses across California that are already benefiting from grant-funded cellular offload solutions. 
                Check your eligibility today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="banking-button-primary"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfzQCqdOwmaYm18HuOiB1SAQOQhePpJKQgbLyUlC7RW4mLRcw/viewform', '_blank')}
                >
                  Apply Now - It's Free
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;