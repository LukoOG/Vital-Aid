"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    fetch("/api/hospital")
      .then((res) => res.json())
      .then((data) => {
        setHospitals(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Hospitals in {decodeURIComponent(location)}</h1>
      <p>
        List of hospitals for {decodeURIComponent(location)} will be displayed
        here.
      </p>
      <div>
        {isLoading ? (
          <div className="flex text-xl pt-4 justify-center">
            Loading... nearest hospitals
          </div>
        ) : (
          <ul className="divide-y divide-gray-900 pt-4">
            {hospitals.map((hospital) => (
              <div key={hospital.id}>
                <li>{hospital.name}</li>
                <img src={hospital.cover_image} />
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
