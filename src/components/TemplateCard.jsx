import React from 'react';
import { Button } from "@/components/ui/button";

const TemplateCard = ({ template, onDownload }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
      <p className="text-gray-600 mb-4">{template.description}</p>
      <p className="text-sm text-gray-500 mb-4">{template.useCase}</p>
      <Button onClick={() => onDownload(template)}>Download</Button>
    </div>
  );
};

export default TemplateCard;