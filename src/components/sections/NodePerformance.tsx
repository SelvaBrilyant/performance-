import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function NodePerformance() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Node.js Performance Optimization</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive demonstrations of key Node.js performance optimization techniques
          </p>
        </div>

        <Tabs defaultValue="async" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="async">Async Operations</TabsTrigger>
            <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            <TabsTrigger value="caching">Caching</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="clustering">Clustering</TabsTrigger>
          </TabsList>

          <TabsContent value="async" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Asynchronous Operations</CardTitle>
                <CardDescription>
                  Proper handling of I/O operations to prevent event loop blocking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Blocking Implementation</CardTitle>
                      <CardDescription>
                        Using synchronous file operations
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`app.get('/block', (req, res) => {
  const data = fs.readFileSync('large-file.txt');
  res.send(data.toString());
});`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Blocks Event Loop
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>Non-Blocking Implementation</CardTitle>
                      <CardDescription>
                        Using asynchronous file operations
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`app.get('/non-block', (req, res) => {
  fs.readFile('large-file.txt', (err, data) => {
    if (err) return res.status(500).send('Error');
    res.send(data.toString());
  });
});`}
                        </pre>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Non-Blocking
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Performance Impact</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Event Loop Blocking</span>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          High Impact
                        </Badge>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Concurrent Requests</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Optimized
                        </Badge>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dependencies" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Dependency Management</CardTitle>
                <CardDescription>
                  Optimizing package dependencies for better performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Heavy Dependencies</CardTitle>
                      <CardDescription>
                        Using full lodash for simple operations
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`const _ = require('lodash');
const user = { name: "Sam", role: "admin" };
const cloned = _.cloneDeep(user);`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Large Bundle
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>Optimized Dependencies</CardTitle>
                      <CardDescription>
                        Using native methods or modular packages
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`const user = { name: "Sam", role: "admin" };
const cloned = structuredClone(user);
// OR
const clone = require('just-clone');
const cloned = clone(user);`}
                        </pre>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Optimized
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Performance Benefits</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Bundle Size</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Reduced
                        </Badge>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Startup Time</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Faster
                        </Badge>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="caching" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Caching Strategies</CardTitle>
                <CardDescription>
                  Implementing efficient caching to reduce redundant computations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Without Caching</CardTitle>
                      <CardDescription>
                        Repeated database queries
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`app.get('/stats', async (req, res) => {
  const result = await db.collection('orders')
    .aggregate([...])
    .toArray();
  res.json(result);
});`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          High DB Load
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>With Caching</CardTitle>
                      <CardDescription>
                        Using in-memory cache with TTL
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`const cache = new NodeCache({ stdTTL: 60 });

app.get('/stats', async (req, res) => {
  const cached = cache.get('order-stats');
  if (cached) return res.json(cached);
  
  const result = await db.collection('orders')
    .aggregate([...])
    .toArray();
    
  cache.set('order-stats', result);
  res.json(result);
});`}
                        </pre>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Optimized
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Performance Impact</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Database Load</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Reduced
                        </Badge>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Response Time</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Faster
                        </Badge>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="database" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Database Optimization</CardTitle>
                <CardDescription>
                  Efficient database queries and filtering
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Inefficient Query</CardTitle>
                      <CardDescription>
                        Fetching all data and filtering in Node
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`app.get('/products', async (req, res) => {
  const allProducts = await db.collection('products')
    .find()
    .toArray();
  const filtered = allProducts
    .filter(p => p.price > 1000);
  res.json(filtered);
});`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Memory Heavy
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>Optimized Query</CardTitle>
                      <CardDescription>
                        Using database-level filtering
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`app.get('/products', async (req, res) => {
  const filtered = await db.collection('products')
    .find({ price: { $gt: 1000 } })
    .toArray();
  res.json(filtered);
});`}
                        </pre>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Optimized
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Performance Benefits</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Memory Usage</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Reduced
                        </Badge>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Query Performance</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Faster
                        </Badge>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clustering" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Load Balancing with Clustering</CardTitle>
                <CardDescription>
                  Utilizing multiple CPU cores for better performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Single Thread</CardTitle>
                      <CardDescription>
                        Using only one CPU core
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`const http = require('http');
http.createServer((req, res) => 
  res.end('OK')
).listen(3000);`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Single Core
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>Clustered</CardTitle>
                      <CardDescription>
                        Using all available CPU cores
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) 
    cluster.fork();
} else {
  http.createServer((req, res) => {
    res.end(\`Worker \${process.pid}\`);
  }).listen(3000);
}`}
                        </pre>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Multi-Core
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Performance Benefits</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">CPU Utilization</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Optimized
                        </Badge>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Request Handling</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Improved
                        </Badge>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 