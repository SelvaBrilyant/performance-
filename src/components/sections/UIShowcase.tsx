import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { 
  BellRing, 
  Check, 
  ChevronsUpDown, 
  Circle, 
  Crown, 
  Forward, 
  Laptop, 
  Moon, 
  Sun
} from 'lucide-react';

export default function UIShowcase() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    toast({
      title: "Success!",
      description: "This is a toast notification",
    });
  };

  return (
    <section id="components" className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">UI Component Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our beautifully designed UI components powered by shadcn/ui
          </p>
        </div>

        <Tabs defaultValue="inputs" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="display">Display</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
          </TabsList>

          <TabsContent value="inputs" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>Essential input components for forms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Notification preferences</Label>
                    <RadioGroup defaultValue="all">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all" />
                        <Label htmlFor="all">All notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="important" id="important" />
                        <Label htmlFor="important">Important only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="none" id="none" />
                        <Label htmlFor="none">None</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Selection Controls</CardTitle>
                  <CardDescription>Components for selecting options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select framework" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                        <SelectItem value="angular">Angular</SelectItem>
                        <SelectItem value="svelte">Svelte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <ToggleGroup type="single" defaultValue="system">
                      <ToggleGroupItem value="light">
                        <Sun className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="system">
                        <Laptop className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="dark">
                        <Moon className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="performance">Performance</Label>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Slider defaultValue={[75]} max={100} step={1} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="display" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Display Components</CardTitle>
                <CardDescription>Components for displaying information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <BellRing className="h-4 w-4 text-primary" />
                    <div>
                      <h4 className="text-sm font-medium">Push Notifications</h4>
                      <p className="text-sm text-muted-foreground">Send notifications to your users</p>
                    </div>
                    <div className="ml-auto">
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Crown className="h-4 w-4 text-amber-500" />
                    <div>
                      <h4 className="text-sm font-medium">Premium Features</h4>
                      <p className="text-sm text-muted-foreground">Unlock premium features</p>
                    </div>
                    <div className="ml-auto">
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Forward className="h-4 w-4 text-green-500" />
                    <div>
                      <h4 className="text-sm font-medium">Auto-forward</h4>
                      <p className="text-sm text-muted-foreground">Automatically forward messages</p>
                    </div>
                    <div className="ml-auto">
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Components</CardTitle>
                <CardDescription>Components for user feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <Button onClick={handleShowToast}>
                    Show Toast Notification
                  </Button>
                  <div className="flex items-center gap-2 p-4 border rounded-lg">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Operation completed successfully</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="navigation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Navigation Components</CardTitle>
                <CardDescription>Components for navigating the UI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                    <Button variant="outline">Menu Item</Button>
                    <Button variant="outline" size="sm">Small</Button>
                    <Button variant="outline" size="lg">Large</Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Circle className="mr-2 h-3 w-3 fill-current" /> Small
                    </Button>
                    <Button size="default" variant="outline">
                      <Circle className="mr-2 h-4 w-4 fill-current" /> Default
                    </Button>
                    <Button size="lg" variant="outline">
                      <Circle className="mr-2 h-5 w-5 fill-current" /> Large
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Toaster />
      </div>
    </section>
  );
}