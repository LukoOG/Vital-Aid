// import React from 'react';
// import {
//   Plus, FileText, Heart, Building2, Car, PiggyBank, User, Phone, LogIn,
// } from 'lucide-react';

// type SidebarProps = {
//   active: string;
//   onChange: (id: string) => void;
// };

// const sidebarItems = [
//   { id: 'new-chat', icon: Plus, label: 'New Chat' },
//   { id: 'police-report', icon: FileText, label: 'Police Report' },
//   { id: 'first-aid', icon: Heart, label: 'First Aid' },
//   { id: 'suitable-hospital', icon: Building2, label: 'Suitable Hospital' },
//   { id: 'emergency-driver', icon: Car, label: 'Emergency Driver' },
//   { id: 'emergency-savings', icon: PiggyBank, label: 'Emergency Savings' },
// ];

// const Sidebar: React.FC<SidebarProps> = ({ active, onChange }) => {
//   return (
//     <div className="w-64 bg-gray-100 border-r border-gray-200 flex flex-col h-screen">
//       {/* Logo container with same horizontal padding */}
//       <div className="pt-10 px-6 pb-6">
//         <button
//           onClick={() => onChange('home')}
//           className="flex items-center space-x-2 focus:outline-none"
//         >
//           <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center">
//             {/* Slightly smaller icon */}
//             <Plus className="w-4.5 h-4.5 text-white" />
//           </div>
//           <h1 className="text-lg font-bold text-gray-800">VitalAid</h1> {/* Reduced font size */}
//         </button>
//       </div>

//       {/* Nav with reduced spacing and smaller font & icon */}
//       <nav className="flex-1 px-6">
//         <ul className="space-y-1.5">
//           {sidebarItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <li key={item.id}>
//                 <button
//                   onClick={() => onChange(item.id)}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
//                     active === item.id
//                       ? 'bg-blue-100 text-blue-700'
//                       : 'text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {/* Smaller icons */}
//                   <Icon className="w-4 h-4 text-blue-600" />
//                   <span className="text-xs font-medium">{item.label}</span> {/* Smaller font */}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Footer with consistent padding, smaller icons and fonts */}
//       <div className="p-4 border-t border-gray-200">
//         <ul className="space-y-1">
//           <li>
//             <button className="flex items-center space-x-3 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg w-full text-left">
//               <LogIn className="w-3.5 h-3.5" />
//               <span className="text-xs">Sign Up</span>
//             </button>
//           </li>
//           <li>
//             <button className="flex items-center space-x-3 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg w-full text-left">
//               <User className="w-3.5 h-3.5" />
//               <span className="text-xs">About Us</span>
//             </button>
//           </li>
//           <li>
//             <button className="flex items-center space-x-3 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg w-full text-left">
//               <Phone className="w-3.5 h-3.5" />
//               <span className="text-xs">Contact Us</span>
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
