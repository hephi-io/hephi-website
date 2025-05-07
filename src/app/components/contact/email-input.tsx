"use client";

import React, { useState } from "react";

export default function EmailInput() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const isFilled = text.trim() !== "";

  return (
    <input
      type="email"
      name="email"
      className={`w-full border border-gray-300 dark:border-[#6C6C6C] rounded-2xl lg:p-[24px] p-[16px] placeholder:font-semibold dark:placeholder:text-[#C9C9CA] focus:outline-none focus:bg-blue-50 mb-4 ${
        isFilled ? "bg-blue-50" : "bg-[#EEEEEE] dark:bg-[#333334]"
      }`}
      required
      placeholder="Email Address"
      value={text}
      onChange={handleChange}
    />
  );
}
