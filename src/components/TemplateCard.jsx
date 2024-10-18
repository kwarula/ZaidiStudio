import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileIcon, ShareIcon, DownloadIcon } from 'lucide-react';

const TemplateCard = ({ template, onDownload }) => {
  const getIcon = (name) => {
    if (name.includes('File') || name.includes('Form')) return FileIcon;
    if (name.includes('Social') || name.includes('Share')) return ShareIcon;
    return DownloadIcon;
  };

  const Icon = getIcon(template.name);

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className="w-5 h-5 mr-2 text-blue-500" />
          {template.name}
        </CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{template.useCase}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white" 
          onClick={() => onDownload(template)}
        >
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;