import Link from "next/link";

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

interface HospitalCardProps {
  hospital: Hospital; // Using the Hospital interface directly
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  // console.log(hospital);
  return (
    <div
      key={hospital.id}
      className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md"
    >
      <img
        src={hospital.cover_image}
        alt={hospital.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-3">{hospital.name}</h2>
      <p className="text-gray-600 text-sm mt-1">{hospital.address}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {hospital.specialities.slice(0, 3).map((spec, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {spec}
          </span>
        ))}
      </div>

      <p className="text-gray-700 text-sm mt-3 line-clamp-3">
        {hospital.description}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <Link
          href={hospital.google_maps_url}
          target="_blank"
          className="text-white bg-blue-500 hover:bg-blue-600 text-sm font-medium px-4 py-2 rounded-lg"
        >
          View on Maps
        </Link>
        <span className="text-gray-500 text-xs">
          {new Date(hospital.created_at).toDateString()}
        </span>
      </div>
    </div>
  );
}
