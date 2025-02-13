
import React from 'react';
import { Link } from 'react-router-dom';

const DojoNavigation = () => {
  const navItems = [
    { label: 'Community', path: '/dojo', active: true },
    { label: 'Classroom', path: '/dojo/classroom' },
    { label: 'Calendar', path: '/dojo/calendar' },
    { label: 'Members', path: '/dojo/members' },
    { label: 'Leaderboards', path: '/dojo/leaderboards' },
    { label: 'About', path: '/dojo/about' },
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`py-4 px-1 border-b-2 ${
                item.active
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DojoNavigation;
