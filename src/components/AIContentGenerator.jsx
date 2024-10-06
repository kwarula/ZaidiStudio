import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prevData => ({ ...prevData, businessType: value }));
  };

  const generateStrategy = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://hook.eu2.make.com/il6jftigdhlxasptd8hbya5aspc19rmm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate strategy');
      }

      const data = await response.json();
      setGeneratedStrategy(data.strategy); // Assuming the response contains a 'strategy' field
    } catch (error) {
      console.error('Error generating strategy:', error);
      setGeneratedStrategy('Failed to generate strategy. Please try again.');
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
          {isLoading ? 'Generating Strategy...' : 'Generate AI Strategy'}
        </Button>
        {generatedStrategy && (
          <div className="mt-6 p-4 bg-blue-50 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Your AI-Generated Business Strategy:</h3>
            <p className="text-sm text-blue-800 whitespace-pre-wrap">{generatedStrategy}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIContentGenerator;