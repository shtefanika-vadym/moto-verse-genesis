import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Safe useLocation with error handling
  let location;
  let hasRouterContext = true;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    location = useLocation();
  } catch (error) {
    // Fallback if router context is not available
    location = { pathname: "/" };
    hasRouterContext = false;
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tipuri Motociclism", path: "/tipuri-motociclism" },
    { name: "Motociclete", path: "/motociclete" },
    { name: "Echipamente", path: "/echipamente" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Safe navigation component that handles missing router context
  const SafeNavLink = ({
    to,
    children,
    className,
  }: {
    to: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    if (hasRouterContext) {
      return (
        <Link to={to} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <SafeNavLink
            to="/"
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            <img
              src={logo}
              alt={"EVYAN"}
              className="w-60 h-20 object-cover rounded-t-lg"
            />
          </SafeNavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <SafeNavLink
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-primary/50"
                }`}
              >
                {item.name}
              </SafeNavLink>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <SafeNavLink
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <span onClick={() => setIsOpen(false)}>{item.name}</span>
                </SafeNavLink>
              ))}
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
