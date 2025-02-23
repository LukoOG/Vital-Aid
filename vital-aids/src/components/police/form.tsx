"use client";

import { getAiBodyText } from "@/lib/context/getAiBodyText";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function DocumentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    situation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    const response = await getAiBodyText(formData);
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "user_document.docx";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      console.error("Error generating document");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded shadow"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <TextareaAutosize
        className="w-full resize-none text-base outline-none md:bg-transparent"
        placeholder="Enter your situation"
        name="situation"
        autoFocus={true}
        value={formData.situation}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Generate Document
      </button>
    </form>
  );
}

// "use client";

// import { getAiBodyText } from "@/lib/context/getAiBodyText";
// import { useState } from "react";
// import TextareaAutosize from "react-textarea-autosize";

// export default function DocumentForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//     situation: "",
//     incidentDate: "",
//     incidentTime: "",
//     incidentLocation: "",
//     emergencyNature: "",
//     suspectDetails: "",
//     victimDescription: "",
//     evidenceDetails: "",
//     personalContact: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log(formData);
//     const response = await getAiBodyText(formData);
//     if (response.ok) {
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "user_document.docx";
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//     } else {
//       console.error("Error generating document");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4 max-w-4xl mx-auto p-4 border rounded shadow"
//     >
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {/* Left Column */}
//         <div className="flex flex-col gap-2">
//           <label htmlFor="incidentDate">Date of Incident</label>
//           <input
//             type="date"
//             name="incidentDate"
//             id="incidentDate"
//             onChange={handleChange}
//             required
//             className="p-2 border rounded"
//           />
//           <label htmlFor="incidentTime">Time of Incident</label>
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             onChange={handleChange}
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             onChange={handleChange}
//             className="p-2 border rounded"
//           />
//           <input
//             type="time"
//             name="incidentTime"
//             id="incidentTime"
//             onChange={handleChange}
//             required
//             className="p-2 border rounded"
//           />
//           <label htmlFor="incidentLocation">Location of Incident</label>
//           <input
//             type="text"
//             name="incidentLocation"
//             id="incidentLocation"
//             placeholder="Enter location"
//             onChange={handleChange}
//             required
//             className="p-2 border rounded"
//           />
//           <label htmlFor="emergencyNature">Nature of Emergency</label>
//           <input
//             type="text"
//             name="emergencyNature"
//             id="emergencyNature"
//             placeholder="Nature of the emergency"
//             onChange={handleChange}
//             required
//             className="p-2 border rounded"
//           />
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-2">
//           <label htmlFor="suspectDetails">Details About Suspect</label>
//           <input
//             type="text"
//             name="suspectDetails"
//             id="suspectDetails"
//             placeholder="Details about the suspect"
//             onChange={handleChange}
//             className="p-2 border rounded"
//           />
//           <label htmlFor="victimDescription">Description of Victim</label>
//           <input
//             type="text"
//             name="victimDescription"
//             id="victimDescription"
//             placeholder="Description of the victim"
//             onChange={handleChange}
//             className="p-2 border rounded"
//           />
//           <label htmlFor="evidenceDetails">Relevant Evidence/Property</label>
//           <input
//             type="text"
//             name="evidenceDetails"
//             id="evidenceDetails"
//             placeholder="Relevant evidence or property"
//             onChange={handleChange}
//             className="p-2 border rounded"
//           />
//           <label htmlFor="personalContact">Your Personal Contact Info</label>
//           <input
//             type="text"
//             name="personalContact"
//             id="personalContact"
//             placeholder="Your contact information"
//             onChange={handleChange}
//             className="p-2 border rounded"
//           />
//         </div>
//       </div>

//       <div className="mt-4">
//         <label htmlFor="situation">Enter Your Situation</label>
//         <TextareaAutosize
//           className="w-full resize-none text-base outline-none md:bg-transparent p-2 border rounded"
//           placeholder="Describe the situation"
//           name="situation"
//           id="situation"
//           autoFocus={true}
//           value={formData.situation}
//           onChange={handleChange}
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-500 text-white py-2 rounded mt-4"
//       >
//         Generate Document
//       </button>
//     </form>
//   );
// }
