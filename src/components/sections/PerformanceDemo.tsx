import { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useOptimizedState } from '@/hooks/useOptimizedState';

// Performance improvement demo
export default function PerformanceDemo() {
  const [tabValue, setTabValue] = useState("regular");
  const [regularCounter, setRegularCounter] = useState(0);
  const [optimizedCounter, useOptimizedCounter] = useOptimizedState(0);
  
  // Track render count for demonstration purposes
  const [regularRenderCount, setRegularRenderCount] = useState(0);
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
    useOptimizedCounter(prev => prev + 1);
  }, [useOptimizedCounter]);
  
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
  
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Optimization Demo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare optimized and non-optimized implementations side by side
          </p>
        </div>
        
        <Tabs value={tabValue} onValueChange={setTabValue} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="regular">Regular Implementation</TabsTrigger>
            <TabsTrigger value="optimized">Optimized Implementation</TabsTrigger>
          </TabsList>
          
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
        </Tabs>
      </div>
    </section>
  );
}