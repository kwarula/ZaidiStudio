import React from 'react';
import { Switch } from './ui/switch';

const Toggle = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onCheckedChange={setEnabled}
      className="bg-blue-500"
    />
  );
};

export default Toggle;