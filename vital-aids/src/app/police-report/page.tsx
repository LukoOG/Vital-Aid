// import DocumentForm from "@/components/police/form";

// const Police = () => {
//   return <DocumentForm />;
// };

// export default Police;

"use client";
import React, { useState } from "react";
import { FaDownload } from 'react-icons/fa'; // Download icon from react-icons

const PoliceReport: React.FC = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    meansOfEmergency: "",
    suspectDetails: "",
    victimWitness: "",
    extraInfo: "",
    personalContact: "",
  });

  const [generatedReport, setGeneratedReport] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate the report generation and show the report card
    setGeneratedReport("path/to/your/dummy-police-report.png");
  };

  // Download function (placeholder)
  const handleDownload = () => {
    // For now, just a placeholder alert to show functionality.
    alert('Download report (this is just a demo, no real file).');
  };

  return (
    <div
      className="flex flex-col w-[840px] h-[600px] p-6"
      style={{
        top: "76px",
        left: "320px",
        gap: "50px",
        backgroundColor: "#fff",
        opacity: 1,
      }}
    >
      {!generatedReport ? (
        <>
          <h1 className="text-xl font-bold mb-6 text-gray-800">Police Report</h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{
              opacity: 1,
            }}
          >
            {/* Date Field */}
            <div>
              <label
                className="block text-sm font-medium mb-1 text-black"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full h-[50px] rounded-[8px] border-[1px] border-[#2D2D2D99] px-3 py-2"
                placeholder="Enter date"
                style={{
                  backgroundColor: "#2D2D2D99",
                  color: "#fff", // White text for better visibility
                }}
              />
            </div>

            {/* Time Field */}
            <div>
              <label
                className="block text-sm font-medium mb-1 text-black"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full h-[50px] rounded-[8px] border-[1px] border-[#2D2D2D99] px-3 py-2"
                placeholder="Enter time"
                style={{
                  backgroundColor: "#2D2D2D99",
                  color: "#fff",
                }}
              />
            </div>

            {/* Location Field */}
            <div>
              <label
                className="block text-sm font-medium mb-1 text-black"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Location of the incident
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                className="w-full h-[50px] rounded-[8px] border-[1px] border-[#2D2D2D99] px-3 py-2"
                style={{
                  backgroundColor: "#2D2D2D99",
                  color: "#fff",
                }}
              />
            </div>

            {/* Means of Emergency */}
            <div>
              <label
                className="block text-sm font-medium mb-1 text-black"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Nature of emergency
              </label>
              <input
                type="text"
                name="meansOfEmergency"
                value={formData.meansOfEmergency}
                onChange={handleChange}
                placeholder="e.g., robbery, assault"
                className="w-full h-[50px] rounded-[8px] border-[1px] border-[#2D2D2D99] px-3 py-2"
                style={{
                  backgroundColor: "#2D2D2D99",
                  color: "#fff",
                }}
              />
            </div>

            {/* Suspect Details */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-1 text-black"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Details about suspect
              </label>
              <textarea
                name="suspectDetails"
                value={formData.suspectDetails}
                onChange={handleChange}
                placeholder="Enter suspect description"
                className="w-full h-[50px] rounded-[8px] border-[1px] border-[#2D2D2D99] px-3 py-2"
                style={{
                  backgroundColor: "#2D2D2D99",
                  color: "#fff",
                }}
              ></textarea>
            </div>

            {/* Victim/Witness Details */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-1 text-black"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Description of victim and witnesses
              </label>
              <textarea
                name="victimWitness"
                value={formData.victimWitness}
                onChange={handleChange}
                placeholder="Enter victim/witness details"
                className="w-full h-[50px] rounded-[8px] border-[1px] border-[#2D2D2D99] px-3 py-2"
                style={{
                  backgroundColor: "#2D2D2D99",
                  color: "#fff",
                }}
              ></textarea>
            </div>

            {/* Extra Information */}
            <div>
              <label
                className="block text-sm font-medium mb-1 text-black"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Any relevant evidence or property involved
              </label>
              <input
                type="text"
                name="extraInfo"
                value={formData.extraInfo}
                onChange={handleChange}
                placeholder="e.g., purse stolen, knife left"
                className="w-full h-[50px] rounded-[8px] border-[1px] border-[#2D2D2D99] px-3 py-2"
                style={{
                  backgroundColor: "#2D2D2D99",
                  color: "#fff",
                }}
              />
            </div>

            {/* Contact Info */}
            <div>
              <label
                className="block text-sm font-medium mb-1 text-black"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Your personal contact information
              </label>
              <input
                type="text"
                name="personalContact"
                value={formData.personalContact}
                onChange={handleChange}
                placeholder="Enter name and phone number"
                className="w-full h-[50px] rounded-[8px] border-[1px] border-[#2D2D2D99] px-3 py-2"
                style={{
                  backgroundColor: "#2D2D2D99",
                  color: "#fff",
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[#4062BB] text-white w-[140px] h-[45px] rounded-[5px] hover:bg-[#365F9E]"
                style={{
                  gap: "10px",
                  padding: "10px",
                  borderRadius: "5px",
                  opacity: 1,
                }}
              >
                Generate Report
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4 text-gray-800">Police Report Generated</h1>
          <p className="mb-4">Find below the Police Report for your emergency:</p>
          
          {/* Card Design with Download Icon */}
          <div
            className="relative w-[221px] h-[248px] border rounded-lg shadow"
            style={{
              width: "221px",
              height: "248px",
              top: "126px",
              left: "352px",
              opacity: 1,
              backgroundColor: "#fff", // White background for the card
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #2D2D2D99",
            }}
          >
            {/* Report Thumbnail or Image */}
            <img
              src={generatedReport}
              alt="Generated Police Report"
              className="w-full h-[180px] object-cover mb-2"
            />

            {/* Download Icon */}
            <div
              onClick={handleDownload}
              className="absolute bottom-4 right-4 bg-[#4062BB] p-2 rounded-full cursor-pointer hover:bg-[#365F9E]"
              style={{
                opacity: 1,
                width: "40px",
                height: "40px",
              }}
            >
              {/* <FaDownload className="text-white w-6 h-6" /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PoliceReport;
