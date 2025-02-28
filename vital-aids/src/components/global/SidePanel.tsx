"use client";
import Link from "next/link";
import React from "react";
import {
  FileText,
  BriefcaseMedical,
  HospitalIcon,
  Wallet,
  Ambulance,
} from "lucide-react";
import Image from "next/image";

export default function SidePanel() {
  return (
    <div className="hidden flex-col bg-stone-100 p-16 shadow-md md:flex md:flex-[0.25] lg:flex-[0.15]">
      <Link href="/" className="mt-1 flex items-center gap-2">
        <Image src="logo.svg" width={100} height={100} alt="logo Vital Aid" />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <NavigationButtons />
        <BottomLinks />
      </div>
    </div>
  );
}

const nav_buttons = [
  { title: "First Aid", value: "first-aid" },
  { title: "Police Report", value: "police-report" },
  { title: "Suitable Hospital", value: "hospital" },
  { title: "Emergency Driver", value: "emergency-driver" },
  { title: "Emergency Savings", value: "emergency-savings" }, // Fixed extra space
];

function NavigationButtons() {
  return (
    <div className="mt-[5vh] flex w-full flex-col items-start gap-5">
      {nav_buttons.map(({ value, title }) => (
        <Link
          href={`/${value}`}
          key={value}
          className="flex w-full cursor-pointer items-center justify-start gap-2 text-indigo-800"
        >
          <div>
            {value === "first-aid" && <BriefcaseMedical className="h-5 w-5" />}
            {value === "police-report" && <FileText className="h-5 w-5" />}
            {value === "hospital" && <HospitalIcon className="h-5 w-5" />}
            {value === "emergency-driver" && <Ambulance className="h-5 w-5" />}
            {value === "emergency-savings" && <Wallet className="h-5 w-5" />}
          </div>
          <p className="text-[0.9rem] font-medium">{title}</p>
        </Link>
      ))}
    </div>
  );
}

function BottomLinks() {
  return (
    <div className="flex flex-col items-start gap-2 border-t pt-5">
      {["Sign Up", "About Us", "Contact Us"].map((text) => (
        <Link
          href="#"
          key={text}
          className="text-[0.9rem] font-medium text-indigo-800 transition-colors hover:text-indigo-600"
        >
          {text}
        </Link>
      ))}
    </div>
  );
}
