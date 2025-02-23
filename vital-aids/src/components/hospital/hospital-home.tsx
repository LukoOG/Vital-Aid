"use client";
import React, { useEffect, useState, FormEvent } from "react";

interface Hospital {
  id: number;
  address: string;
  contact: string;
  cover_image: string;
  description: string;
  google_maps_url: string;
  name: string;
  specialities: string[];
  treatments: string[];
  created_at: string;
}

const HospitalHome = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/hospital")
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex text-xl pt-4 justify-center">
          Loading... nearest hospitals
        </div>
      ) : (
        <ul className="divide-y divide-gray-900 pt-4">
          {hospitals.map((hospital) => (
            <div>
              <li key={hospital.id}>{hospital.name}</li>
              <img src={hospital.cover_image} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HospitalHome;
