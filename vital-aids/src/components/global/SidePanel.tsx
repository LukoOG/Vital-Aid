"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BriefcaseMedical, HospitalIcon, SquarePen } from "lucide-react";

type Props = {};

export default function SidePanel({}: Props) {
  return (
    <div className="hidden flex-col bg-stone-100 p-5 shadow-md md:flex md:flex-[0.25] lg:flex-[0.15]">
      <Link
        href="/"
        className="mt-1 flex items-center gap-2 font-mono text-2xl font-semibold text-blue-900"
      >
        Vital Aid
      </Link>

      {/* navigations */}

      <div className="flex flex-1 flex-col justify-between">
        <NavigationButtons />
        {/* <NavigationLinks /> */}
      </div>
    </div>
  );
}

const nav_buttons = [
  { title: "First Aid", value: "first-aid" },
  { title: "Hospital", value: "hospital" },
  { title: "Register", value: "register" },
];

function NavigationButtons() {
  return (
    <div className="mt-[5vh] flex w-full flex-col items-center justify-center gap-5">
      {nav_buttons.map(({ value, title }) => (
        // buttons
        <Link
          href={`/${value}`}
          key={value}
          className="flex cursor-pointer items-center justify-start gap-2 text-indigo-800"
        >
          <div>
            {value === "first-aid" && <BriefcaseMedical className="h-5 w-5" />}
            {value === "hospital" && <HospitalIcon className="h-5 w-5" />}
            {value === "register" && <SquarePen className="h-5 w-5" />}
          </div>
          <p className="text-[1.1rem] font-medium">{title}</p>
        </Link>
      ))}
    </div>
  );
}
