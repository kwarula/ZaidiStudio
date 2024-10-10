import React from 'react';
import { Switch } from './ui/switch';

const Toggle = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onCheckedChange={setEnabled}
      className={`${
        enabled ? 'bg-green-500' : 'bg-gray-300'
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  );
};

export default Toggle;