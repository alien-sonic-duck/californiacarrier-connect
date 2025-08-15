const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="banking-container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/60d40ce8-c226-488a-9037-52cf34a76f5d.png" 
                  alt="CCO" 
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="font-bold text-primary">California Carrier Offload</h3>
                  <p className="text-sm text-muted-foreground">Better Cell Coverage For Your Business</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Providing grant-funded cellular connectivity solutions to improve business operations and customer experience.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>californiacarrieroffloading.org</p>
                <p>Grant-funded connectivity solutions</p>
                <p>Free installation and service available</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2024 California Carrier Offload. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                Grant-funded program to improve cellular connectivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;