import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Package } from 'lucide-react';

const LazyLoadedComponent = () => {
  // Simulate a heavy component with lots of data
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    status: i % 2 === 0 ? 'Active' : 'Inactive'
  }));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Package className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-semibold">Lazy Loaded Content</h3>
        <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Loaded on Demand
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {items.slice(0, 6).map((item) => (
          <Card key={item.id} className="border-blue-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={item.status === 'Active' ? 'default' : 'secondary'}>
                {item.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        This component is loaded dynamically when needed, reducing the initial bundle size
        and improving the application's initial load time.
      </p>
    </div>
  );
};

export default LazyLoadedComponent; 