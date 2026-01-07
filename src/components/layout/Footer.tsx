import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-3">Join the Bloom Family</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe for exclusive offers, beauty tips, and early access to new arrivals.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-xl bg-background border-border/50"
            />
            <Button variant="coral" size="lg" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Shop Links */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/shop?category=skincare" className="hover:text-coral transition-colors">Skincare</Link></li>
              <li><Link to="/shop?category=makeup" className="hover:text-coral transition-colors">Makeup</Link></li>
              <li><Link to="/shop?category=haircare" className="hover:text-coral transition-colors">Haircare</Link></li>
              <li><Link to="/shop?category=fragrances" className="hover:text-coral transition-colors">Fragrances</Link></li>
              <li><Link to="/shop" className="hover:text-coral transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-coral transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-coral transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-coral transition-colors">Returns</Link></li>
              <li><Link to="/faq" className="hover:text-coral transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-coral transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-coral transition-colors">Sustainability</Link></li>
              <li><Link to="/about" className="hover:text-coral transition-colors">Ingredients</Link></li>
              <li><Link to="/blog" className="hover:text-coral transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-coral">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-coral">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-coral">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-coral">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container py-6 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-semibold text-foreground">Bloom</span>
            <span>© 2024 All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-coral transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-coral transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
