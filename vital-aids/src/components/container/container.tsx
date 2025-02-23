"use client";

import React from "react";
import Link from "next/link"; // Import Link from next/link

const Container = () => {
  return (
    <div className="flex flex-col items-center py-8">
      {/* Title text */}
      <h2 className="text-2xl font-semibold text-[#002177] mb-6">
        How can we be of aid?
      </h2>

      {/* Service Cards Container */}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { text: "Police Report", value: "police-report", bg: "#FFF" },
          { text: "First Aid", value: "first-aid", bg: "#FFF" },
          { text: "Suitable Hospital", value: "hospital", bg: "#FFF" },
          { text: "Emergency Driver", value: "emergency-driver", bg: "#FFF" },
        ].map((service, index) => (
          <Link
            key={index}
            href={`/${service.value}`} // Navigate to the page based on the service's value
            className="flex flex-col items-center justify-center gap-2.5 transition-all hover:scale-105 cursor-pointer"
          >
            <div
              className="flex flex-col items-center justify-center gap-2.5 transition-all hover:scale-105 cursor-pointer"
              style={{
                width: "160px",
                height: "160px",
                backgroundColor: service.bg,
                border: "2px solid", 
                borderImage: "linear-gradient(to right, #CB00DD, #A91125) 1",
                borderRadius: "50%", // Full round corners
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span className="text-center text-[#002177] font-medium text-sm">
                {service.text}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Container;
