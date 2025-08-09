'use client';

import React, { useState } from 'react';
// import Sidebar from './Sidebar';

import Home from '../app/home/page';
import PoliceReport from '../app/police-report/page';
import FirstAid from '../app/first-aid/page';
import SuitableHospital from '../app/hospital/page';
import EmergencyDriver from '../app/emergency-driver/page';
import NewChat from '../app/new-chat/page';

const VitalAidLayout = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home onSelect={setActiveSection} />;
      case 'new-chat':
        return <NewChat onSelect={setActiveSection} />;
      case 'police-report':
        return <PoliceReport />;
      case 'first-aid':
        return <FirstAid />;
      case 'suitable-hospital':
        return <SuitableHospital />;
      case 'emergency-driver':
        return <EmergencyDriver />;
      default:
        return <div>Select a section.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* <Sidebar active={activeSection} onChange={setActiveSection} /> */}
      <div className="flex-1 p-8 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default VitalAidLayout;
