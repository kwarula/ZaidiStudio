import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

const businessTypes = [
  'E-commerce',
  'Service-based',
  'SaaS',
  'Manufacturing',
  'Retail',
  'Healthcare',
  'Education',
  'Finance',
  'Other'
];

const AIContentGenerator = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    location: '',
    additionalInfo: ''
  });
  const [generatedStrategy, setGeneratedStrategy] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGeneratedStrategy, setHasGeneratedStrategy] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prevData => ({ ...prevData, businessType: value }));
  };

  const generateStrategy = async () => {
    if (hasGeneratedStrategy) {
      toast({
        title: "Strategy Already Generated",
        description: "You can only generate one strategy. Please refresh the page to start over.",
        variant: "warning",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedStrategy('');
    try {
      const response = await fetch('https://hook.eu1.make.com/hhj0k9bmpe1wu8e96cjqqb7u73tjoj66', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      setGeneratedStrategy(data);
      setHasGeneratedStrategy(true);
      toast({
        title: "Strategy Generated",
        description: "Your AI-powered business strategy is ready!",
      });
    } catch (error) {
      console.error('Error generating strategy:', error);
      toast({
        title: "Error",
        description: "Oops! We couldn't generate your strategy. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardTitle className="text-2xl font-bold text-center">AI Business Strategy Wizard</CardTitle>
        <CardDescription className="text-center text-blue-100">
          Unlock your business potential with our AI-powered strategy generator. 
          Just fill in a few details, and we'll craft a custom strategy for your success!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">What's your business called?</Label>
          <Input
            id="businessName"
            name="businessName"
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">What type of business are you running?</Label>
          <Select onValueChange={handleSelectChange} value={formData.businessType}>
            <SelectTrigger className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 shadow-lg">
              {businessTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()} className="text-gray-800 hover:bg-gray-100">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium text-gray-700">Where are you based?</Label>
          <Input
            id="location"
            name="location"
            placeholder="Enter your business location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">Any specific goals or challenges?</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            placeholder="Tell us about your business goals or challenges"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <Button 
          onClick={generateStrategy} 
          disabled={isLoading || !formData.businessName || !formData.businessType || hasGeneratedStrategy} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Crafting Your Strategy...
            </>
          ) : hasGeneratedStrategy ? (
            'Strategy Generated!'
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate My AI Strategy
            </>
          )}
        </Button>
        {isLoading && (
          <div className="flex justify-center items-center mt-4">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-blue-400 h-3 w-3"></div>
              <div className="rounded-full bg-blue-400 h-3 w-3"></div>
              <div className="rounded-full bg-blue-400 h-3 w-3"></div>
            </div>
          </div>
        )}
        {generatedStrategy && (
          <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Your AI-Generated Business Strategy:</h3>
            <div 
              className="prose prose-blue max-w-none" 
              dangerouslySetInnerHTML={{ __html: generatedStrategy }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIContentGenerator;