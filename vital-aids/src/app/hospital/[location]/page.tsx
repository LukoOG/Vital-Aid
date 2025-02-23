"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HospitalCard from "@/components/hospital/hospital-card";

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

export default function HospitalLocationPage() {
  const { location } = useParams();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!location) return; // Prevent fetch if location is undefined
    fetch(`/api/hospital?location=${location}`)
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [location]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-2xl font-bold">
        Hospitals in {decodeURIComponent(location)}
      </h1>
      <p className="text-gray-600">
        List of hospitals for {decodeURIComponent(location)} will be displayed
        here.
      </p>

      {isLoading ? (
        <div className="flex text-xl pt-4 justify-center">
          Loading... nearest hospitals
        </div>
      ) : (
        <ul className="divide-y divide-gray-300 pt-4">
          {hospitals.map((hospital) => (
            <li key={hospital.id} className="py-4">
              <HospitalCard hospital={hospital} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
