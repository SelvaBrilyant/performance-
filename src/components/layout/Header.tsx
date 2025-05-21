import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to add background to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl hidden sm:inline-block">PerformancePro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/react" className="text-sm font-medium transition-colors hover:text-primary">
              React.js
            </Link>
            <Link to="/node" className="text-sm font-medium transition-colors hover:text-primary">
              Node.js
            </Link>
            <Link to="/mongodb" className="text-sm font-medium transition-colors hover:text-primary">
              MongoDB
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b pb-4 px-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/react" 
              className="text-sm font-medium p-2 rounded-md transition-colors hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              React.js
            </Link>
            <Link 
              to="/node" 
              className="text-sm font-medium p-2 rounded-md transition-colors hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Node.js
            </Link>
            <Link 
              to="/mongodb" 
              className="text-sm font-medium p-2 rounded-md transition-colors hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MongoDB
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}