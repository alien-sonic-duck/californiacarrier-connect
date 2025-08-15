import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wifi, Settings, Users, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Application & Assessment",
      description: "Submit your business information through our eligibility form. Our team will assess your location and confirm grant qualification.",
      icon: CheckCircle
    },
    {
      step: "2",
      title: "Site Survey",
      description: "Our certified technicians visit your location to evaluate your existing network infrastructure and design the optimal solution.",
      icon: Settings
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "We install carrier-grade equipment that integrates seamlessly with your existing Wi-Fi network - no disruption to your business.",
      icon: Wifi
    },
    {
      step: "4",
      title: "Activation & Support",
      description: "Your cellular offload solution goes live, providing immediate coverage improvements with ongoing monitoring and support.",
      icon: Users
    }
  ];

  const technicalSpecs = [
    "Works with major carriers (AT&T, T-Mobile)",
    "Supports 4G LTE and 5G connectivity",
    "Enterprise-grade security protocols",
    "Automatic failover capabilities",
    "Real-time performance monitoring",
    "24/7 technical support included"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="banking-section bg-gradient-to-br from-accent to-background">
        <div className="banking-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How California Carrier Offload Works
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our grant-funded program provides businesses with professional cellular offload solutions 
              that enhance connectivity and support local network infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="banking-section">
        <div className="banking-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From application to activation, we handle everything for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="banking-card text-center h-full">
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4 mx-auto">
                      {step.step}
                    </div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="banking-section bg-secondary">
        <div className="banking-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Enterprise-Grade Technology
              </h2>
              <p className="text-muted-foreground mb-6">
                Our cellular offload solution uses carrier-approved equipment and protocols to seamlessly 
                extend cellular coverage through your existing Wi-Fi infrastructure.
              </p>
              <div className="space-y-3">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="banking-card">
              <div className="text-center p-8">
                <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Measurable Results
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Coverage Improvement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">3x</div>
                    <div className="text-sm text-muted-foreground">Faster Data Speeds</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$0</div>
                    <div className="text-sm text-muted-foreground">Cost to You</div>
                  </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Apply for grant-funded cellular offload and transform your business connectivity today.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="banking-button-primary"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfzQCqdOwmaYm18HuOiB1SAQOQhePpJKQgbLyUlC7RW4mLRcw/viewform', '_blank')}
              >
                Apply for Free Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;