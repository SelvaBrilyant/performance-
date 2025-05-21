import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Server, Database } from 'lucide-react';

// Using Intersection Observer for animation on scroll
function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

export default function TechSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);
  
  return (
    <section 
      id="technologies" 
      ref={sectionRef} 
      className="py-16 bg-muted/30"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore performance optimization techniques for the modern web stack
          </p>
        </div>

        <Tabs defaultValue="react" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="react">React.js</TabsTrigger>
            <TabsTrigger value="node">Node.js</TabsTrigger>
            <TabsTrigger value="mongo">MongoDB</TabsTrigger>
          </TabsList>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TabsContent value="react" className="space-y-4">
              <TechCard 
                id="react"
                icon={<Code2 className="h-10 w-10 text-blue-500" />}
                title="React.js"
                description="A JavaScript library for building user interfaces with exceptional performance"
                features={[
                  "Virtual DOM for efficient updates",
                  "Component memoization",
                  "Code splitting & lazy loading",
                  "Server-side rendering capabilities"
                ]}
                color="blue"
              />
            </TabsContent>
            
            <TabsContent value="node" className="space-y-4">
              <TechCard 
                id="node"
                icon={<Server className="h-10 w-10 text-green-600" />}
                title="Node.js"
                description="Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine"
                features={[
                  "Non-blocking I/O operations",
                  "Event-driven architecture",
                  "Worker threads for CPU-intensive tasks",
                  "Cluster module for scaling"
                ]}
                color="green"
              />
            </TabsContent>
            
            <TabsContent value="mongo" className="space-y-4">
              <TechCard 
                id="mongodb"
                icon={<Database className="h-10 w-10 text-green-700" />}
                title="MongoDB"
                description="Document-oriented NoSQL database designed for scalability and performance"
                features={[
                  "Indexing strategies",
                  "Aggregation pipeline optimization",
                  "Data modeling best practices",
                  "Sharding for horizontal scaling"
                ]}
                color="leaf"
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

interface TechCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: 'blue' | 'green' | 'leaf';
}

function TechCard({ id, icon, title, description, features, color }: TechCardProps) {
  const colorMap = {
    blue: "border-blue-500/20 dark:border-blue-500/30",
    green: "border-green-600/20 dark:border-green-600/30",
    leaf: "border-green-700/20 dark:border-green-700/30"
  };

  return (
    <Card id={id} className={`border-2 ${colorMap[color]} transition-all duration-300 hover:shadow-lg`}>
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base mt-1">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                {index + 1}
              </Badge>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Badge className={`${color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-600' : 'bg-green-700'} hover:${color === 'blue' ? 'bg-blue-600' : color === 'green' ? 'bg-green-700' : 'bg-green-800'}`}>
          Learn Performance Techniques
        </Badge>
      </CardFooter>
    </Card>
  );
}