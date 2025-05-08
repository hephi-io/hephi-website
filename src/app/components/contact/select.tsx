"use client";

import React, { useState } from "react";

export default function Select() {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const isFilled = selected !== "";

  return (
    <select
      name="service"
      className={`w-full border border-gray-300 dark:border-[#6C6C6C] rounded-2xl lg:p-[24px] p-[16px] placeholder:font-semibold dark:text-[#C9C9CA] mb-4 ${ 
        isFilled
          ? "bg-blue-50 dark:text-black"
          : "bg-[#EEEEEE] dark:bg-[#333334]"
      }`}
      value={selected}
      onChange={handleChange}
    >
      <option value="" className={`${isFilled ? 'dark:text-black' : ''}`}>
        -- Select --
      </option>
      <option value="web-design" className={`${isFilled ? 'dark:text-black' : ''}`}>
        Web Design
      </option>
      <option value="development" className={`${isFilled ? 'dark:text-black' : ''}`}>
        Development
      </option>
      <option value="marketing" className={`${isFilled ? 'dark:text-black' : ''}`}>
        Marketing
      </option>
    </select>
  );
}
