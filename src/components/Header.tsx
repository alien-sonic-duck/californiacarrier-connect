import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

  const navigation = [
    { name: "Home", path: "" },
    { name: "How It Works", path: "how-it-works" },
    { name: "About", path: "about" },
    { name: "FAQ", path: "faq" },
    { name: "Contact", path: "contact" },
  ];
  const logoUrl = new URL('/lovable-uploads/df5dc330-0f95-4275-afe8-948e7195b633.png', import.meta.env.BASE_URL).href;

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="banking-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoUrl}
              alt="California Carrier Offload" 
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">California Carrier Offload</h1>
              <p className="text-sm text-muted-foreground">Better Cell Coverage For Your Business.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={withBase(item.path)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="banking-button-primary">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={withBase(item.path)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="banking-button-primary mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;