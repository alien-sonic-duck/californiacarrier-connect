import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="banking-section bg-gradient-to-br from-accent to-background">
        <div className="banking-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to improve your business connectivity? Get in touch with our team to learn more 
              about grant-funded cellular offload solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="banking-section">
        <div className="banking-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="banking-card">
              <CardHeader>
                <CardTitle className="text-2xl">Apply for Service</CardTitle>
                <p className="text-muted-foreground">
                  Fill out our eligibility form to get started with your free cellular offload assessment.
                </p>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[800px] mb-6">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfzQCqdOwmaYm18HuOiB1SAQOQhePpJKQgbLyUlC7RW4mLRcw/viewform?embedded=true"
                    className="w-full h-full border-0 rounded-lg"
                    title="California Carrier Offload Application Form"
                  >
                    Loading form...
                  </iframe>
                </div>
                <div className="text-center">
                  <Button 
                    variant="default" 
                    className="banking-button-primary"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfzQCqdOwmaYm18HuOiB1SAQOQhePpJKQgbLyUlC7RW4mLRcw/viewform', '_blank')}
                  >
                    Open Form in New Tab
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="banking-card">
                <CardHeader>
                  <CardTitle className="text-xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@californiacarrieroffloading.org</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">Available through online form</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                      <p className="text-muted-foreground">California Statewide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                      <p className="text-muted-foreground">1-2 business days for applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="banking-card">
                <CardHeader>
                  <CardTitle className="text-xl">Program Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Grant-Funded Program:</strong> Our cellular 
                      offload solutions are provided at no cost to qualifying businesses through state 
                      and federal telecommunications grants.
                    </p>
                    <p>
                      <strong className="text-foreground">Professional Service:</strong> All installations 
                      are performed by certified technicians with ongoing 24/7 support and monitoring.
                    </p>
                    <p>
                      <strong className="text-foreground">Fast Processing:</strong> Applications are 
                      typically reviewed within 1-2 business days, with installations scheduled within 
                      1-2 weeks of approval.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="banking-card">
                <CardHeader>
                  <CardTitle className="text-xl">Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <span className="text-muted-foreground">Submit eligibility form</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <span className="text-muted-foreground">Receive qualification confirmation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <span className="text-muted-foreground">Schedule free site assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <span className="text-muted-foreground">Professional installation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;