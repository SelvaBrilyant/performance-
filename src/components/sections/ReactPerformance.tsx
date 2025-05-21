import React, { Suspense, lazy } from 'react';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle2, Search, Timer } from 'lucide-react';
import { useOptimizedState } from '@/hooks/useOptimizedState';

// Demo 2: List Virtualization
const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
  <div style={style} className="flex items-center p-4 border-b">
    <span className="font-medium">Item {index + 1}</span>
  </div>
);

// Demo 3: Memoization
const ExpensiveCalculation = (num: number) => {
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += Math.random();
  }
  return result;
};

// Demo 4: Throttling & Debouncing
const searchAPI = async (query: string) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return `Results for: ${query}`;
};

// Demo 5: Lazy Loading Components
const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));

export default function ReactPerformance() {

  // Demo 2: List data
  const listItems = Array.from({ length: 10000 }, (_, i) => i);

  // Demo 3: Memoization state
  const [number, setNumber] = useState(1000);
  const [, setDummy] = useState(0);
  const [regularRenderCount, setRegularRenderCount] = useState(0);
  const [memoizedRenderCount, setMemoizedRenderCount] = useState(0);

  // Regular calculation (will recalculate on every render)
  const regularResult = ExpensiveCalculation(number);

  // Memoized calculation (only recalculates when number changes)
  const memoizedResult = useMemo(() => {
    setMemoizedRenderCount(prev => prev + 1);
    return ExpensiveCalculation(number);
  }, [number]);

  // Track renders for regular calculation
  useEffect(() => {
    setRegularRenderCount(prev => prev + 1);
  }, [number, setDummy]);

  // Calculate efficiency percentage for visualization
  const calcRegularEfficiency = Math.max(0, Math.min(100, 100 - (regularRenderCount * 5)));
  const calcMemoizedEfficiency = Math.max(0, Math.min(100, 100 - (memoizedRenderCount * 2)));

  // Demo 4: Search state
  const [results, setResults] = useState('');
  const [searchCount, setSearchCount] = useState({ regular: 0, optimized: 0 });

  // Regular search
  const handleRegularSearch = async (value: string) => {
    const result = await searchAPI(value);
    setResults(result);
    setSearchCount(prev => ({ ...prev, regular: prev.regular + 1 }));
  };

  // Debounced search
  const debouncedSearch = useCallback(
    debounce(async (value: string) => {
      const result = await searchAPI(value);
      setResults(result);
      setSearchCount(prev => ({ ...prev, optimized: prev.optimized + 1 }));
    }, 500),
    []
  );

  // Throttled scroll handler
  const handleScroll = throttle(() => {
    console.log('Scroll event throttled');
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const [regularCounter, setRegularCounter] = useState(0);
  const [optimizedCounter, setOptimizedCounter] = useOptimizedState(0);

  // Track render count for demonstration purposes
  const [optimizedRenderCount, setOptimizedRenderCount] = useState(0);

  // Demonstrates expensive calculation
  const calculateFactorial = (num: number): number => {
    console.log(`Calculating factorial for ${num}`);
    if (num <= 1) return 1;

    // Intentionally inefficient for demo
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  // Regular way - recalculates on every render
  const regularFactorial = calculateFactorial(regularCounter % 10);

  // Optimized way - uses memoization
  const optimizedFactorial = useMemo(() => {
    return calculateFactorial(optimizedCounter % 10);
  }, [optimizedCounter]);

  // Regular increment function
  const incrementRegular = () => {
    setRegularCounter(regularCounter + 1);
  };

  // Optimized increment function with useCallback
  const incrementOptimized = useCallback(() => {
    setOptimizedCounter(prev => prev + 1);
  }, []);

  // Simulate render tracking
  useEffect(() => {
    setRegularRenderCount(prev => prev + 1);
  }, [regularCounter]);

  useEffect(() => {
    setOptimizedRenderCount(prev => prev + 1);
  }, [optimizedCounter]);

  // Calculate efficiency percentage for visualization
  const regularEfficiency = Math.max(0, Math.min(100, 100 - (regularRenderCount * 5)));
  const optimizedEfficiency = Math.max(0, Math.min(100, 100 - (optimizedRenderCount * 2)));

  // Demo 5: Lazy Loading state
  const [showLazyComponent, setShowLazyComponent] = useState(false);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">React Performance Optimization</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive demonstrations of key React performance optimization techniques
          </p>
        </div>

        <Tabs defaultValue="rerenders" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="rerenders">Re-renders</TabsTrigger>
            <TabsTrigger value="virtualization">Virtualization</TabsTrigger>
            <TabsTrigger value="memoization">Memoization</TabsTrigger>
            <TabsTrigger value="throttling">Throttling</TabsTrigger>
            <TabsTrigger value="lazyloading">Lazy Loading</TabsTrigger>
          </TabsList>

          <TabsContent value="rerenders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Preventing Unnecessary Re-renders</CardTitle>
                <CardDescription>
                  Compare regular vs memoized component re-renders
                </CardDescription>
              </CardHeader>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-red-500/20">
                  <CardHeader>
                    <CardTitle>Regular Implementation</CardTitle>
                    <CardDescription>
                      Without performance optimizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="mb-2">Counter Value: {regularCounter}</p>
                      <p className="mb-2">Factorial Result: {regularFactorial}</p>
                      <p className="mb-2">Render Count: {regularRenderCount}</p>

                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Efficiency</p>
                        <Progress value={regularEfficiency} className="h-2" />
                        <p className="text-xs text-right text-muted-foreground">{regularEfficiency}%</p>
                      </div>
                    </div>

                    <Button
                      onClick={incrementRegular}
                      className="w-full bg-red-500 hover:bg-red-600"
                    >
                      Increment Counter
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-green-500/20">
                  <CardHeader>
                    <CardTitle>Optimized Implementation</CardTitle>
                    <CardDescription>
                      With useMemo, useCallback, and optimized state updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="mb-2">Counter Value: {optimizedCounter}</p>
                      <p className="mb-2">Factorial Result: {optimizedFactorial}</p>
                      <p className="mb-2">Render Count: {optimizedRenderCount}</p>

                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Efficiency</p>
                        <Progress value={optimizedEfficiency} className="h-2" />
                        <p className="text-xs text-right text-muted-foreground">{optimizedEfficiency}%</p>
                      </div>
                    </div>

                    <Button
                      onClick={incrementOptimized}
                      className="w-full bg-green-500 hover:bg-green-600"
                    >
                      Increment Counter
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="virtualization" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>List Virtualization</CardTitle>
                <CardDescription>
                  Efficiently render large lists using react-window
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] border rounded-lg">
                  <List
                    height={400}
                    itemCount={listItems.length}
                    itemSize={50}
                    width="100%"
                  >
                    {Row}
                  </List>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="memoization" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>useMemo for Expensive Calculations</CardTitle>
                <CardDescription>
                  Compare regular vs memoized expensive calculations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Regular Calculation</h4>
                    <p className="text-sm text-muted-foreground">
                      Result: {regularResult.toFixed(2)}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Render Count: {regularRenderCount}</p>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Efficiency</p>
                        <Progress value={calcRegularEfficiency} className="h-2" />
                        <p className="text-xs text-right text-muted-foreground">{calcRegularEfficiency}%</p>
                      </div>
                      <Badge variant="destructive">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        High Load
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Memoized Calculation</h4>
                    <p className="text-sm text-muted-foreground">
                      Result: {memoizedResult.toFixed(2)}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Render Count: {memoizedRenderCount}</p>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Efficiency</p>
                        <Progress value={calcMemoizedEfficiency} className="h-2" />
                        <p className="text-xs text-right text-muted-foreground">{calcMemoizedEfficiency}%</p>
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Optimized
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button onClick={() => setNumber(n => n + 100)}>
                    Increase Number
                  </Button>
                  <Button variant="outline" onClick={() => setDummy(d => d + 1)}>
                    Force Re-render
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="throttling" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Throttling & Debouncing</CardTitle>
                <CardDescription>
                  Compare regular vs optimized event handling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4" />
                      <h4 className="text-sm font-medium">Regular Search</h4>
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Type to search..."
                        onChange={e => handleRegularSearch(e.target.value)}
                      />
                      <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          API calls: {searchCount.regular}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4" />
                      <h4 className="text-sm font-medium">Debounced Search</h4>
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Type to search..."
                        onChange={e => debouncedSearch(e.target.value)}
                      />
                      <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          API calls: {searchCount.optimized}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Search Results</h4>
                  <p className="text-sm text-muted-foreground">{results}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Performance Comparison</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Regular Search</span>
                        <Badge variant="destructive">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          High Load
                        </Badge>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Debounced Search</span>
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

          <TabsContent value="lazyloading" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Code Splitting & Lazy Loading</CardTitle>
                <CardDescription>
                  Load components only when needed to reduce initial bundle size
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium">Lazy Loaded Component</h4>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                      <Timer className="h-3 w-3 mr-1" />
                      Load on Demand
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      onClick={() => setShowLazyComponent(!showLazyComponent)}
                      className="w-full"
                    >
                      {showLazyComponent ? 'Hide Component' : 'Load Component'}
                    </Button>

                    {showLazyComponent && (
                      <div className="border rounded-lg p-4">
                        <Suspense fallback={
                          <div className="flex items-center justify-center p-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                          </div>
                        }>
                          <LazyLoadedComponent />
                        </Suspense>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Performance Benefits</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Initial Bundle Size</span>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Reduced
                          </Badge>
                        </div>
                        <Progress value={40} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">First Contentful Paint</span>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Faster
                          </Badge>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
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