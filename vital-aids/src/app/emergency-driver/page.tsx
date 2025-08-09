import React, { useState } from 'react';
import { MapPin, Navigation, Clock, MessageCircle } from 'lucide-react';
import SendInput from '../../components/SendInput';
 

const EmergencyDriver = () => {
  const [userMessage, setUserMessage] = useState('');

  const hospitals = [
    {
      name: "Rogue & Rebex Hospital",
      location: "No 45 General Santana Inda, Yaba",
      image: "/api/placeholder/120/80",
      distance: "2.3 km",
    },
    {
      name: "Mainland Hospital Yaba",
      location: "Mainland Hospital St, Yaba",
      image: "/api/placeholder/120/80",
      distance: "1.8 km",
    },
  ];

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      console.log('Sending message:', userMessage);
      setUserMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 relative pb-[80px]"> 
      {/* pb to avoid input overlapping content */}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Emergency Driver</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Emergency Mode
          </button>
        </div>
      </div>

      {/* Chat / Info Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Location Request Message */}
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
            <p className="text-gray-800 text-sm">Please turn on your location.</p>
          </div>
        </div>

        {/* Location Status */}
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
            <p className="text-sm">There are 6 drivers</p>
          </div>
        </div>

        {/* Current Location */}
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
            <p className="text-gray-800 text-sm font-medium">
              Your current location: 11, Avenue Street, Ikurodu, Yaba.
            </p>
          </div>
        </div>

        {/* Hospital Suggestion */}
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
            <p className="text-gray-800 text-sm">Please select designated hospital:</p>
          </div>
        </div>

        {/* Hospital Cards */}
        <div className="ml-12 space-y-3">
          {hospitals.map((hospital, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-16 h-12 rounded-md object-cover bg-gray-200"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm">{hospital.name}</h3>
                  <p className="text-gray-600 text-xs">{hospital.location}</p>
                  <p className="text-blue-600 text-xs font-medium">{hospital.distance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Request Emergency ride to Mainland Hospital Yaba
          </button>
        </div>

        {/* Driver Status Questions */}
        <div className="space-y-4">
          {/* Example Question: Choose Driver */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">Choose Driver to use:</p>
              <p className="text-gray-600 text-xs mt-1">Location: No 4, Central Street, Ikurodu, Yaba</p>
              <p className="text-gray-600 text-xs">ETA: 5 mins</p>
              <div className="mt-3">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm mr-2">
                  Accept Driver
                </button>
                <button className="text-blue-600 hover:underline text-sm">📞</button>
              </div>
            </div>
          </div>

          {/* Other info blocks */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
              <Navigation className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">Driver's minutes away</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">Location will arrive</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm mt-2">
                Reached
              </button>
            </div>
          </div>

          {/* Passenger Question */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">Are you a passenger?</p>
              <div className="mt-3 space-x-2">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm">
                  Yes
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm">
                  No
                </button>
              </div>
            </div>
          </div>

          {/* Speed Question */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">Is your vehicle fast you need high split?</p>
              <div className="mt-3 space-x-2">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm">
                  Yes
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm">
                  No
                </button>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">Thank you for choosing VitalAid.</p>
              <p className="text-gray-600 text-xs">Get to know if you need anything later</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Input using SendInput component */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[720px] px-4 z-50 bg-transparent">
        <SendInput
          value={userMessage}
          onChange={setUserMessage}
          onSend={handleSendMessage}
          placeholder="Make a request"
          disabled={false}
        />
      </div>
    </div>
  );
};

export default EmergencyDriver;
