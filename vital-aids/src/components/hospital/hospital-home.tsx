"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// interface Hospital {
//   id: number;
//   address: string;
//   contact: string;
//   cover_image: string;
//   description: string;
//   google_maps_url: string;
//   name: string;
//   specialities: string[];
//   treatments: string[];
//   created_at: string;
// }

const HospitalHome = () => {
  //   const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [emergencyDescription, setEmergencyDescription] = useState("");
  const [showHospitals, setShowHospitals] = useState(false); // State to toggle visibility of hospitals list

  const router = useRouter();

  useEffect(() => {
    fetch("/api/hospital")
      .then((res) => res.json())
      .then(() => {
        // setHospitals(data);
        setIsLoading(false);
      });
  }, []);

  const handleFindHospital = () => {
    router.push(
      // `/hospitals?location=${location}&emergencyDescription=${emergencyDescription}`
      `/hospital/${location}`
    );
    setShowHospitals(true); // Show hospitals after clicking the button
  };

  return (
    <div className="p-4">
      {/* Location Input */}
      <div className="mb-4">
        <label htmlFor="location" className="block text-lg font-semibold">
          Your Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter your location"
          className="w-full mt-2 p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Emergency Description Input */}
      <div className="mb-4">
        <label
          htmlFor="emergencyDescription"
          className="block text-lg font-semibold"
        >
          Emergency Description
        </label>
        <textarea
          id="emergencyDescription"
          placeholder="Describe your emergency"
          className="w-full mt-2 p-2 border rounded"
          value={emergencyDescription}
          onChange={(e) => setEmergencyDescription(e.target.value)}
        />
      </div>

      {/* Find Hospital Button */}
      <div className="mb-4">
        <button
          onClick={handleFindHospital}
          className="w-full bg-blue-500 text-white p-3 rounded"
        >
          Find Hospitals
        </button>
      </div>

      {/* Show hospitals list only after clicking the button */}
      {showHospitals && (
        <div>
          {/* Loading State */}
          {isLoading ? (
            <div className="flex text-xl pt-4 justify-center">
              Loading... nearest hospitals
            </div>
          ) : (
            <ul className="divide-y divide-gray-900 pt-4">
              <p>loading hospitals</p>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HospitalHome;
