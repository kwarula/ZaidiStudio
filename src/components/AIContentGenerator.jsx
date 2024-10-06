import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';
import { Loader2 } from 'lucide-react';

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

const formatStrategy = (strategy) => {
  // Split the strategy into sections
  const sections = strategy.split('\n\n');
  
  return sections.map((section, index) => {
    const [title, ...content] = section.split('\n');
    return (
      <div key={index} className="mb-4">
        <h4 className="text-lg font-semibold text-blue-700 mb-2">{title}</h4>
        <ul className="list-disc pl-5 space-y-1">
          {content.map((item, itemIndex) => (
            <li key={itemIndex} className="text-sm text-blue-800">{item.trim()}</li>
          ))}
        </ul>
      </div>
    );
  });
};

const AIContentGenerator = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    location: '',
    additionalInfo: ''
  });
  const [generatedStrategy, setGeneratedStrategy] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prevData => ({ ...prevData, businessType: value }));
  };

  const generateStrategy = async () => {
    setIsLoading(true);
    setGeneratedStrategy('');
    try {
      const response = await fetch('https://hook.eu2.make.com/il6jftigdhlxasptd8hbya5aspc19rmm', {
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
      toast({
        title: "Strategy Generated",
        description: "Your AI strategy has been successfully generated.",
      });
    } catch (error) {
      console.error('Error generating strategy:', error);
      toast({
        title: "Error",
        description: "Failed to generate strategy. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Business AI Strategy Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            name="businessName"
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessType">Business Type</Label>
          <Select onValueChange={handleSelectChange} value={formData.businessType}>
            <SelectTrigger>
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            placeholder="Enter your business location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            placeholder="Enter any additional information about your business goals or challenges"
            value={formData.additionalInfo}
            onChange={handleInputChange}
          />
        </div>
        <Button 
          onClick={generateStrategy} 
          disabled={isLoading || !formData.businessName || !formData.businessType} 
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Strategy...
            </>
          ) : 'Generate AI Strategy'}
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
          <div className="mt-6 p-4 bg-blue-50 rounded-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Your AI-Generated Business Strategy:</h3>
            {formatStrategy(generatedStrategy)}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIContentGenerator;