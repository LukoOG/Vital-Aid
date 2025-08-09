'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Plus,
  FileText,
  Heart,
  Building2,
  Car,
  PiggyBank,
  LogIn,
  User,
  Phone,
} from 'lucide-react';

const sidebarItems = [
  { id: '', icon: Plus, label: 'Home' },
  { id: 'police-report', icon: FileText, label: 'Police Report' },
  { id: 'first-aid', icon: Heart, label: 'First Aid' },
  { id: 'suitable-hospital', icon: Building2, label: 'Suitable Hospital' },
  { id: 'emergency-driver', icon: Car, label: 'Emergency Driver' },
  { id: 'emergency-savings', icon: PiggyBank, label: 'Emergency Savings' },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname() ?? '';
  const active = pathname.split('/')[1] || ''; // fallback to '' for root

  const handleNavigation = (id: string) => {
    const path = id === '' ? '/' : `/${id}`;
    router.push(path);
  };

  return (
    <div className="w-64 bg-stone-100 border-r border-gray-200 flex flex-col h-screen hidden md:flex">
      {/* Logo */}
      <div className="pt-10 px-6 pb-6">
        <button
          onClick={() => handleNavigation('')}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold text-gray-800">VitalAid</h1>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-6">
        <ul className="space-y-1.5">
          {sidebarItems.map(({ id, icon: Icon, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavigation(id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  active === id
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-medium">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <ul className="space-y-1">
          <li>
            <button className="flex items-center space-x-3 px-3 py-2 text-indigo-800 hover:bg-indigo-50 rounded-lg w-full text-left">
              <LogIn className="w-3.5 h-3.5" />
              <span className="text-xs">Sign Up</span>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-3 px-3 py-2 text-indigo-800 hover:bg-indigo-50 rounded-lg w-full text-left">
              <User className="w-3.5 h-3.5" />
              <span className="text-xs">About Us</span>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-3 px-3 py-2 text-indigo-800 hover:bg-indigo-50 rounded-lg w-full text-left">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs">Contact Us</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
