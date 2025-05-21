import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Build fast, optimize better.';
  
  // Simulating typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-muted/20 to-transparent dark:from-muted/10" />
      
      <div className="container px-4 py-16 md:py-24 lg:py-32 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-6 px-3 py-1.5 animate-fade-in">
            <Zap className="h-3.5 w-3.5 mr-1" />
            Performance Optimization Demo
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter mb-6">
            <span className="text-primary">React.js</span>, <span className="text-green-600">Node.js</span>, and <span className="text-green-700">MongoDB</span> Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Explore optimized implementations and performance techniques across the modern web stack.
            Learn best practices for building lightning-fast, scalable applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Components
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}