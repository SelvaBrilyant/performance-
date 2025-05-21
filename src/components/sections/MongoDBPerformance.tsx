import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function MongoDBPerformance() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MongoDB Performance Optimization</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive demonstrations of key MongoDB performance optimization techniques
          </p>
        </div>

        <Tabs defaultValue="indexing" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="indexing">Indexing</TabsTrigger>
            <TabsTrigger value="projection">Projection</TabsTrigger>
            <TabsTrigger value="pagination">Pagination</TabsTrigger>
            <TabsTrigger value="document">Document Size</TabsTrigger>
            <TabsTrigger value="aggregation">Aggregation</TabsTrigger>
          </TabsList>

          <TabsContent value="indexing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Indexing for Faster Queries</CardTitle>
                <CardDescription>
                  Using indexes to optimize query performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Without Index</CardTitle>
                      <CardDescription>
                        Full collection scan
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// This query scans the entire collection
await db.collection('products')
  .find({ category: 'laptop' })
  .toArray();`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Slow Performance
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>With Index</CardTitle>
                      <CardDescription>
                        Using index for faster lookups
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// Create index first
await db.collection('products')
  .createIndex({ category: 1 });

// Now queries are fast!
await db.collection('products')
  .find({ category: 'laptop' })
  .toArray();`}
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
                        <span className="text-sm">Query Time</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Reduced
                        </Badge>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Memory Usage</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Optimized
                        </Badge>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projection" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Field Projection</CardTitle>
                <CardDescription>
                  Retrieving only needed fields
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Full Document</CardTitle>
                      <CardDescription>
                        Retrieving all fields
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// Pulls entire document including large fields
const data = await db.collection('products')
  .find({ category: 'phone' })
  .toArray();`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          High Bandwidth
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>Projected Fields</CardTitle>
                      <CardDescription>
                        Selecting only needed fields
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// Only get name and price
const data = await db.collection('products')
  .find(
    { category: 'phone' },
    { projection: { name: 1, price: 1 } }
  )
  .toArray();`}
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
                        <span className="text-sm">Network Transfer</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Reduced
                        </Badge>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Memory Usage</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Optimized
                        </Badge>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pagination" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pagination</CardTitle>
                <CardDescription>
                  Efficient data retrieval in chunks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>No Pagination</CardTitle>
                      <CardDescription>
                        Loading all records at once
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// Bad: Returns all records
const results = await db.collection('orders')
  .find()
  .toArray();`}
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
                      <CardTitle>With Pagination</CardTitle>
                      <CardDescription>
                        Using skip and limit
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`const page = parseInt(req.query.page) || 1;
const limit = 10;
const skip = (page - 1) * limit;

const results = await db.collection('orders')
  .find()
  .skip(skip)
  .limit(limit)
  .toArray();`}
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
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Response Time</span>
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

          <TabsContent value="document" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Document Size Optimization</CardTitle>
                <CardDescription>
                  Efficient document structure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Large Documents</CardTitle>
                      <CardDescription>
                        Storing everything in one document
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// One document has entire chat history
{
  _id: 'chat1',
  messages: [ /* 10000+ messages */ ]
}`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Document Bloat
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>Normalized Structure</CardTitle>
                      <CardDescription>
                        Splitting data into separate documents
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// Store messages separately
{
  chatId: 'chat1',
  message: 'Hi!',
  timestamp: new Date()
}`}
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
                        <span className="text-sm">Document Size</span>
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
                          Improved
                        </Badge>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aggregation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Aggregation Pipeline</CardTitle>
                <CardDescription>
                  Efficient data processing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-red-500/20">
                    <CardHeader>
                      <CardTitle>Multiple Queries</CardTitle>
                      <CardDescription>
                        Processing in application
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// Get orders, then sum in app
const orders = await db.collection('orders')
  .find({ status: 'completed' })
  .toArray();
const total = orders.reduce((acc, o) => 
  acc + o.amount, 0);`}
                        </pre>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Inefficient
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle>Aggregation Pipeline</CardTitle>
                      <CardDescription>
                        Processing in database
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                          {`// Use aggregation pipeline
const stats = await db.collection('orders')
  .aggregate([
    { $match: { status: 'completed' } },
    { $group: { 
        _id: null, 
        totalAmount: { $sum: "$amount" } 
      } 
    }
  ])
  .toArray();`}
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
                        <span className="text-sm">CPU Usage</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Reduced
                        </Badge>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Network Transfer</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Optimized
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