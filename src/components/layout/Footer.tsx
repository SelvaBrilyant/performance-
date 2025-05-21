import { Cpu, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">PerformancePro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Optimizing web applications across the full stack.
              Building performance-first experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#react" className="hover:text-primary transition-colors">
                  React.js
                </a>
              </li>
              <li>
                <a href="#node" className="hover:text-primary transition-colors">
                  Node.js
                </a>
              </li>
              <li>
                <a href="#mongodb" className="hover:text-primary transition-colors">
                  MongoDB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Performance Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Best Practices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Connect</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2025 PerformancePro. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}