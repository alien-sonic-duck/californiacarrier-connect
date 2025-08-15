import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is cellular offload and how does it work?",
      answer: "Cellular offload uses your existing Wi-Fi infrastructure to extend cellular coverage. When customers' phones connect to our enhanced network, they automatically get better signal strength and faster data speeds. The technology seamlessly routes cellular traffic through your Wi-Fi network, reducing load on nearby cell towers while improving connectivity for everyone in your business."
    },
    {
      question: "Is this service really free?",
      answer: "Yes, for qualifying businesses, our grant-funded program covers all costs including equipment, professional installation, and ongoing service. There are no hidden fees, monthly charges, or long-term contracts. The program is funded by state and federal grants designed to improve telecommunications infrastructure."
    },
    {
      question: "What types of businesses qualify?",
      answer: "We serve small to medium businesses including retail stores, restaurants, professional offices, healthcare facilities, educational institutions, and event venues. Qualification is based on business type, location, and current connectivity challenges. Most businesses that serve customers or have employees who need reliable cellular service qualify."
    },
    {
      question: "Will this interfere with my existing Wi-Fi?",
      answer: "No, our solution is designed to enhance, not interfere with your existing network. Our certified technicians conduct a thorough site survey and integrate the cellular offload equipment seamlessly with your current Wi-Fi infrastructure. Your existing internet service and Wi-Fi performance will not be affected."
    },
    {
      question: "Which cellular carriers are supported?",
      answer: "Our solution works with major carriers including AT&T and T-Mobile, plus their MVNOs. The technology is carrier-agnostic, meaning customers from any supported carrier will experience improved connectivity when in your business location."
    },
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 2-4 hours with minimal disruption to your business operations. Our technicians work around your schedule and can often perform installations during off-peak hours. The equipment activation is immediate once installation is complete."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive 24/7 support including real-time monitoring, proactive maintenance, and immediate technical assistance. Our support team can remotely diagnose and resolve most issues. If on-site service is needed, we dispatch certified technicians promptly."
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No contracts are required. Our grant-funded program provides the service at no cost for the grant period. If you're not satisfied with the service, you can request removal of the equipment at any time with no penalties or fees."
    },
    {
      question: "How do I know if my business has connectivity issues?",
      answer: "Common signs include customers complaining about poor cell service, difficulty processing mobile payments, dropped calls, slow data speeds, or employees having trouble with mobile apps. Our site survey will identify specific areas where connectivity can be improved."
    },
    {
      question: "What happens if my internet service goes down?",
      answer: "Our system includes automatic failover capabilities. If your internet service is interrupted, the cellular offload temporarily disables to prevent any issues, and customers' phones automatically fall back to the traditional cellular tower coverage."
    },
    {
      question: "Can this help with mobile payment processing?",
      answer: "Absolutely! Improved cellular connectivity directly benefits mobile payment systems, reducing transaction failures and processing delays. This leads to smoother customer transactions and reduced frustration at checkout."
    },
    {
      question: "How do I apply for the program?",
      answer: "Simply fill out our online eligibility form. Our team will review your application and contact you within 1-2 business days to schedule a free site assessment. The entire process from application to installation typically takes 1-2 weeks."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="banking-section bg-gradient-to-br from-accent to-background">
        <div className="banking-container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get answers to common questions about our grant-funded cellular offload program
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="banking-section">
        <div className="banking-container">
          <div className="max-w-4xl mx-auto">
            <Card className="banking-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Common Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="banking-section bg-secondary">
        <div className="banking-container">
          <Card className="banking-card text-center max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team is here to help. Contact us directly or submit an application to learn more 
                about how cellular offload can benefit your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="banking-button-primary"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfzQCqdOwmaYm18HuOiB1SAQOQhePpJKQgbLyUlC7RW4mLRcw/viewform', '_blank')}
                >
                  Apply Now
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

export default FAQ;