"use client";

import { getAiBodyText } from "@/lib/context/getAiBodyText";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function DocumentForm() {
  // const handleKeyDown = (e: any) => {
  //   if (e.key === "Enter" && !e.shiftKey) {
  //     e.preventDefault();
  //     e.target.form.requestSubmit();
  //   }
  // };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    situation: "",
  });
  const [textInput, setTextInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        autoFocus={true}
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Generate Document
      </button>
    </form>
  );
}
