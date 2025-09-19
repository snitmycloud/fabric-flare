import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="SNIT" className="h-10 w-10" />
          <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            SNIT Fashion
          </span>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#categories" className="hover:text-primary transition-colors">Categories</a>
          <a href="#sale" className="hover:text-primary transition-colors">Sale</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-muted rounded-lg px-3 py-2 flex-1 max-w-md mx-8">
          <Search className="h-4 w-4 text-muted-foreground mr-2" />
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="bg-transparent outline-none flex-1"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;